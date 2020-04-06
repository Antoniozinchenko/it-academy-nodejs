const express = require('express');

const movieRouter = express.Router();

const movies = [
  {id: 1, title: "Star Wars: New Hope"},
  {id: 2, title: "Star Wars: Empire Strikes Back"},
]

movieRouter.get('/films/:id', (req, res, next) => {
  const movie = movies.find(item => item.id === req.params.id);
  if (movie) {
    res.send(movie);
  } else {
    res.sendStatus(404);
  }
});

movieRouter.get('/films', (req, res, next) => {
  res.send(movies);
});


movieRouter.post('/films', (req, res, next) => {
  movies.push(req.body);
  res.send("OK");
});


module.exports = movieRouter;