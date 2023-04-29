// Importar las dependencias necesarias
const mongoose = require('mongoose');
require('dotenv').config();

const password = process.env.password;
// Obtener la URL de conexión a MongoDB desde la variable de entorno
const dbUrl = `mongodb+srv://carlosbt7274:${password}@cluster0.1pqkjqb.mongodb.net/test
` 
// Conectarse a la base de datos de MongoDB
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((error) => console.error('Error al conectarse a la base de datos:', error));

module.exports = mongoose 
