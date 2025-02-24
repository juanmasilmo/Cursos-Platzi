const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();


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

app.get('/user'), (req, res) => {
const users = [];
const {size} = req.query;
const limit = size || 10;
for (let i = 0; i < limit; i++) {
  users.push({
    name: faker.users.userName(),
    age: faker.users.age()
  });

}
res.json([users])
}
