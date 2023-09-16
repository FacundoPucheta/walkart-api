const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema del superusuario
const superuserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Asegura que cada nombre de usuario sea único
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Asegura que cada correo electrónico sea único
  },
  fullName: {
    type: String,
    required: true,
  },
});

// Crear el modelo de superusuario a partir del esquema
const Superuser = mongoose.model('Superuser', superuserSchema);

module.exports = Superuser;
