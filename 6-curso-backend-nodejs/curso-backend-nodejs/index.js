const express = require("express");
const routerApi = require("./routes");


const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

app.get('/nueva-ruta', (req, res) => {
  res.send("Este es el enpoint de la nueva ruta")
})

routerApi(app);


app.listen(port, () => {
  console.log(`servidor escuchando en el puerto ${port}`);
});

