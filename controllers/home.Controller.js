const Information = require("../model/information");
//Get Request.
const home= async (req, res) => {
    try {
      const getData = await Information.find();
      res.status(200).json(getData);
    } catch (err) {
      console.log(err);
      res.status(505).json(err.message);
    }
  };

module.exports = home;