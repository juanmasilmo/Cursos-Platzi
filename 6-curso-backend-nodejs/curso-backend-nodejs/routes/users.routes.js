const express = require("express");
const { faker } = require('@faker-js/faker');

const router = express.Router();


router.get('/', (req, res) => {

  const users = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.vehicle.vehicle(),
      marca: faker.vehicle.manufacturer()
    });

  }
  res.json([users])
});

/*router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json([
    {
      id,
      name: "usuario 1",
      age: 10
    },
  ])
})*/

module.exports = router;
