// Connection to DB and Server

require("dotenv").config();
const mongoose = require("mongoose");
const server = require("./src/server");
const { PORT, DB, TEST_DB, PASSWORD } = process.env;

const DEFAULT_PORT = PORT || 3000;
const mongoURI = `mongodb+srv://Piruetricks:${PASSWORD}@cluster0.eixyc75.mongodb.net/${DB}?retryWrites=true&w=majority`;

mongoose
  .connect(mongoURI) // first, we connect to the DB
  .then(() => {
    console.log("Connected to MongoDB"); // it work
    server.listen(PORT, () => {
      // then we connect the server
      console.log(`Server UP - Listen on ${DEFAULT_PORT}`); // it work
    });
  })
  .catch((error) => console.log(error.message)); // it doesn't work
