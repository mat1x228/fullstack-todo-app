
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const port = 8080;

const mongoConnection = process.env.DATABASE_URL;
const database = mongoose.connection;

const app = express();

app.use(express.json());

app.listen(port, ()=>{
  console.log(`Server start on ${port} port`)
});

mongoose.connect(mongoConnection);

database.on ('error', (error)=> {
  console.log(error)
});

database.once('connected', ()=>{
  console.log('db connect')
});

const routes = require('./routes/Routes');
app.use('/api', routes)

