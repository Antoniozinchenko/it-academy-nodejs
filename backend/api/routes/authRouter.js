const express = require('express');

const authRouter = express.Router();

authRouter.post('/signin', (req, res, next) => {
  const {email, password} = req.body;

  if (email === 'admin@example.com' && password === "Qwerty1") {
    res.send({id: 1, username: 'Admin', email, age: 21});
  } else {
    res.sendStatus(401);
  }
});

authRouter.post('/signup', (req, res, next) => res.send('Signup OK'));

module.exports = authRouter;