'use strict';

module.exports = function (app) {
  const express = require('express');
  let usersRouter = express.Router();

  usersRouter.get('/', function (req, res) {
    res.send(
      {
        "data": [
          {
            "id": "1",
            "type": "user",
            "attributes": {
              "name": "Albert Einstein",
              "image": "/images/Einstein.jpg",
              "archived": "false"
            }
          },
          {
            "id": "2",
            "type": "user",
            "attributes": {
              "name": "Walt Disney",
              "image": "/images/Walt.jpg",
              "archived": "false"
            }
          },
          {
            "id": "3",
            "type": "user",
            "attributes": {
              "name": "Bruce Lee",
              "image": "/images/Bruce.jpg",
              "archived": "false"
            }
          },
          {
            "id": "4",
            "type": "user",
            "attributes": {
              "name": "Neil Armstrong",
              "image": "/images/Neil.jpg",
              "archived": "false"
            }
          }
        ]
      }
    );
  });

  app.use('/api/users', usersRouter);
};
