const express = require('express');

const route = express.Router();

route.route('/user')
  .get((_req, res) => {
    // #swagger.tags = ['Users']
    res.status(200).json({ user: 'Xablau' });
  })
  .post((req, res) => {
    /*
    #swagger.tags = ['Users']
    #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Some description...',
                schema: {
                    $user: 'Jhon Doe',
                    $password: 'hello world',
                }
              }
    */
    const { user, password } = req.body;
    res.status(201).json({ user, password });
  });

module.exports = route;