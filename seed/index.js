require('dotenv').config();
const mongoose = require('mongoose');
// Import the model
const Product = require('../models/Product');

// Place the array you want to seed

const products = [
  {
    title: "Apple Mac 4",
    description: "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price:2005,
    color: 'blue',
    newStock: true

  },
  {
    title: "Apple Mac 23",
    description: "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price:200,
    color: 'blue',
    newStock: false

  },
  {
    title: "Apple Mac 2",
    description: "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price:29,
    color: 'blue',
    newStock: true

  },
  {
    title: "Apple Mac 99",
    description: "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price:23,
    color: 'blue',
    newStock: false

  }
]

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return  Product.create(products)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })

// Run npm run seed 