const express = require("express");
const app = express();
require("./Database/db.js");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const port = process.env.PORT || 8080;
const routes = require('./Routes/index.js');

/*-------------------------------------------------------------------------------------------------*/

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({ useTempFiles: true }));
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET","POST","PUT","DELETE"]
}));
 /*Router*/
app.use("/api", routes);

/*-------------------------------------------------------------------------------------------------*/

  //Server Listen
  app.listen(port, () => {
      console.log(`Server listen on port no ${port}`);
  });

/*-------------------------------------------------------------------------------------------------*/
                                        /* the end.*/
