const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const clientModel = new Schema({
  name: {
    type: String,
    required: false,
    default: "Personalizada",
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
  order: {
    type: Number,
    required: [true, "Order number is required"],
  },
  client: {
    type: String,
    required: [true, "Client name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  mail: {
    type: String,
    required: [true, "Client mail is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Client phoneNumber is required"],
  },
  state: {
    type: String,
    required: true,
    default: "Pendiente",
  },
});


const clients = model("clients", clientModel);

module.exports = clients;