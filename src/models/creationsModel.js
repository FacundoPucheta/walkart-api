const mongoose = require("mongoose");

const { Schema, model } = mongoose; // to be used on Schema Creation later

const creationsSchema = new Schema({
  // create new Schema => Define new model?
  
    name: {
      type: String,
      required: false,
      default: "Personalizada"
      
    },
    image: {
      type: String,
      required: false,
      
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      
    },
  
});

const Creations = model("creaciones", creationsSchema); // Create new model.

module.exports = Creations;
