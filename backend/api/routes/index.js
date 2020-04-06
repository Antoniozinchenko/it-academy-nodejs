const express = require('express');

const authRouter = require('./authRouter');
const movieRouter = require('./movieRouter');

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/starwars', movieRouter);

module.exports = apiRouter;