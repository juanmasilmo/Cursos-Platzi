const express = require("express");
const { faker } = require('@faker-js/faker');

const router = express.Router();


router.get('/filter', (req,res)=>{//esto es especifico, para que se puedan hacer consultas dinamicas, deben estar antes de las consultas dinamicas, no despues
  res.send("Soy un filter");
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json([
    {
      id,
      name: "product 1",
     price: 2000
    },
  ])
})

/*router.get('/products/filter', (req,res)=>{//esto es especifico, para que se puedan hacer consultas dinamicas, deben estar antes de las consultas dinamicas, no despues
  res.send("Soyun filter");
})*/


router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; ++i) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10)
    })

  }
  res.json(products)
})

router.post('/', (req, res)=>{
  const body = req.body;
  res.json({
    message: "created bro",
    data: body
  });
})

module.exports = router;
