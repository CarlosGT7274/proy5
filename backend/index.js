const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
require('./db/monngodb.js')
const apirRouter = require('./apis/')
const listEndpoints = require('express-list-endpoints');


app.use(express.json())
app.use(cors())
app.use('/api/v1', apirRouter)

app.get('/', (req, res) => {
  console.log(listEndpoints(app));
  res.send('Servidor vivo')
})

app.use((req, res, next) => {
  console.log(listEndpoints(app));
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
