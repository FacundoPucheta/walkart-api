const mongoose = require("mongoose");

const { Schema, model } = mongoose; // to be used on Schema Creation later

const ownCreation = new Schema({
  // create new Schema => Define new model?
  
    name: {
      type: String,
      required: true,
      
    },
    image: {
      type: String,
      required: false,
      
    },
    description: {
      type: String,
      required: true,
      
    },
    category: {
      type: String,
      required: true,
      
    },
    order: {
      type: Number,
      required: true,
      
    },
    client: {
      type: String,
      required: true,
      
    },
    price: {
      type: Number,
      required: true,
      
    },
    mail: {
      type: String,
      required: true,
      
    },
    phone: {
      type: String,
      required: true,
      
    },
    state: {
      type: String,
      required: true,
      default: "Pendiente"
      
    }
  
});

const creations = model("CosasDePrueba", ownCreation); // Create new model.

module.exports = creations;
