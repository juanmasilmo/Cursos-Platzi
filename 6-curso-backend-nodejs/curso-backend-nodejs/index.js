const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});


app.get('/nueva-ruta', (req, res) => {
  res.send("Este es el enpoint de la nueva ruta")
})

app.get('/products', (req, res) => {
  res.json([
    {
      name: "product 1",
      price: 1000
    },
    {
      name: "product 2",
      price: 3000
    }
  ])

  app.get('/clients', (req, res) => {
    res.json([
      {
        name:"client 1",
        age: 30
      },

      {
        name:"client 2",
        age: 39
      }
    ])
  })

})


app.listen(port, () => {
  console.log(`servidor escuchando en el puerto ${port}`);
});

