const express = require("express");
const app = express();
const port = 3000;
const { faker } = require('@faker-js/faker');


app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});


app.get('/nueva-ruta', (req, res) => {
  res.send("Este es el enpoint de la nueva ruta")
})

app.get('/users', (req, res) => {
  const { id } = req.params;

  res.json([
    {
      id,
      name: "usuario 1",
      age: 10
    },
  ])
})

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



app.get('/clients', (req, res) => {
  res.json([
    {
      name: "client 1",
      age: 30
    },

    {
      name: "client 2",
      age: 39
    }
  ])
})

app.get('/categories', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send("no hay parametros")
  }
})

app.listen(port, () => {
  console.log(`servidor escuchando en el puerto ${port}`);
});

