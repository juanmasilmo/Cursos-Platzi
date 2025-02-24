const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();


app.get('/products/filter', (req,res)=>{//esto es especifico, para que se puedan hacer consultas dinamicas, deben estar antes de las consultas dinamicas, no despues
  res.send("Soy un filter");
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json([
    {
      id,
      name: "product 1",
     price: 2000
    },
  ])
})

/*app.get('/products/filter', (req,res)=>{//esto es especifico, para que se puedan hacer consultas dinamicas, deben estar antes de las consultas dinamicas, no despues
  res.send("Soyun filter");
})*/


app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; ++i) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price())
    })

  }
  res.json([products])
});
