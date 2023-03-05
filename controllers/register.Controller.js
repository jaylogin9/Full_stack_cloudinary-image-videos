const Information = require("../model/information");
const cloudinary = require("cloudinary").v2;

// Cloudinary Configuration.
cloudinary.config({
  cloud_name: "dw9a3qwy2",
  api_key: "898581811833534",
  api_secret: "Ge99Cczrz-zruvHbL-i38ZSXSlQ",
});

//Post request.
const register= async (req, res) => {
     // Check if the Required Fields are Present
  if (!req.body.title || !req.body.description || !req.files.photo || !req.files.video) {
    return res.status(400).send({
      message: 'Please provide the required fields:'
    });
  }

  //------------------------------------------------------------------------------------

  // Get the Request Data
  const {description,title} = req.body;
  const {video, photo} = req.files;

  //---------------------------------------------------------------------------------------

  if (photo.mimetype !== 'image/jpeg' && photo.mimetype !== 'image/png') {
    return res.status(400).send('Invalid thumbnail format. Only JPG and PNG are allowed.');
  }

  if (video.mimetype !== 'video/mpeg' && video.mimetype !== 'video/avi' && video.mimetype !== 'video/mp4') {
    return res.status(400).send('Invalid video format. Only MPG, AVI, and MP4 are allowed.');
  }

  try{
  //--------------------------------------------------------------------------------------------

  // Upload Thumbnail Image to Cloudinary
  const phototUrl = await cloudinary.uploader.upload(
    photo.tempFilePath,  {public_id: title,folder:'collection/photo',resource_type: 'image'}
    );
  
  // Upload Video to Cloudinary
  const videoUrl = await cloudinary.uploader.upload(
    video.tempFilePath, {resource_type: 'video',public_id: title,folder:'collection/video'}
    );
  

  //----------------------------------------------------------------------------------------------

  // Create a new Document in MongoDB
  const information = await Information.create({
    title,
    description,
    thumbnail: phototUrl.secure_url,
    video: videoUrl.secure_url
  });

  // Save the Document to MongoDB
  await information.save();

  // Return Success Response
  return res.json({
    message: 'Upload Successful!'
  });
} catch(error){
 res.status(400).json(error);
console.log(error);
}
  };

module.exports = register;