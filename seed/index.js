require("dotenv").config();
const mongoose = require("mongoose");
// Import the model
const Product = require("../models/Product");

// Place the array you want to seed

const products = [
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },

  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
  {
    title: "Apple Mac 4",
    description:
      "Apple Mac is an application to help people keep track of the tasks they have yet to finish",
    price: 2005,
    color: "blue",
    newStock: true,
    images:
      "https://res.cloudinary.com/drdsjj7w0/image/upload/v1662824780/apple-clone/raoz4akbgzb4bev2qss3.png",
    category: "Mac",
  },
];

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Product.create(products);
  })
  .then(() => {
    console.log("Seed done 🌱");
  })
  .catch((e) => console.log(e))
  .finally(() => {
    console.log("Closing connection");
    mongoose.connection.close();
  });

// Run npm run seed
