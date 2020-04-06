import React from "react";
import MovieList from "./MovieList";
import { Switch, Route } from "react-router-dom";

const StarwarsPage = () => {
  return <Switch>
    <Route exact path="/starwars/:id">
      <h1>Movie Details</h1>
    </Route>
    <Route exact path="/starwars">
      <MovieList />
    </Route>
  </Switch>

};
export default StarwarsPage;
