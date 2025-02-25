const express = require("express")
const faker = require("@faker-js/faker")

const router = express.Router();

/*router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json([
    {
      id,
      name: "client 1",
      age: 30
    },

    {
      id,
      name: "client 2",
      age: 39
    }
  ])
});*/

router.get('/', (req, res) => {
  const clients = [];
  const { size } = req.query;
  const limit = size || 5;
  for (let i = 0; i <= limit ; i++) {
    clients.push({
      name: faker.person.fullName(),
      age: faker.number.int({ min: 18, max: 80 }),
    })

  }
  res.json([clients])
});

module.exports = router;

