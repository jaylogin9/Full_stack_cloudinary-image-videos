const Information = require("../model/information");

//GET By ID Request.
const display=  async (req, res) => {
  const {id} = req.params;
    try {
      const data = await Information.findById(id);
      res.status(200).json(data.video);
    } catch (err) {
      console.log(err.message);
      res.status(505).json( err.message );
    }
  };
  

module.exports = display;