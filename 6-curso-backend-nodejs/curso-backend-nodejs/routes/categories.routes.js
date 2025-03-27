const express = require("express");
const { faker } = require('@faker-js/faker');

const router = express.Router();


router.get ('/',(req, res)=>{
  const categories = [];

  for (let i = 0; i < 10; i++) {
    categories.push({
      name: faker.animal.bear(),
      zodiaco: faker.person.zodiacSign()
    });
  }
  res.json([categories])
})

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send("no hay parametros")
  }
})

module.exports = router;
