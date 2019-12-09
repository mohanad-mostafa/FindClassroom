const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const morgan = require('morgan');
const bodyParser = require('body-parser');


require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());


const rooms = require("./route/room");
const user = require("./route/user");

app.use(cors());
app.use(express.json());

app.use("/rooms",rooms);
app.use("/user",user);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get("/", (req, res) => {
    res.send(`<h2>Welcome to Findclassroom</h2> `);
  });


app.use((req, res) => {
    res.status(404).send({ err: "We can not find what you are looking for" });
  });
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server up and running on port ${port}`));