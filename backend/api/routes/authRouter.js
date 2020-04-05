const express = require('express');

const authRouter = express.Router();

authRouter.post('/signin', (req, res, next) => res.send('Signin OK'));

authRouter.post('/signup', (req, res, next) => res.send('Signup OK'));

module.exports = authRouter;