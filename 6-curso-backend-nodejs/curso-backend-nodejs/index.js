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

