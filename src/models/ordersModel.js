const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ordersSchema = new Schema({
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
    enum: ["Realizado","Enviado","Pendiente"],
    required: true,
    default: "Pendiente",
  },
});


const NewOrder = model("NewOrder", ordersSchema);

module.exports = NewOrder;