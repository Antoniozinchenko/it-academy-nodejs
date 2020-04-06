import React from 'react';
import MyComponent from './pages/todo/MyComponent';

import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import StarwarsPage from './pages/starwars';

import './style.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/todo">ToDo</NavLink>
          <NavLink to="/about">About Page</NavLink>
          <NavLink to="/starwars">StarWars</NavLink>
          <NavLink to="/">Home</NavLink>
        </header>
        <Switch>
          <Route path="/todo">
            <MyComponent />
          </Route>
          <Route path="/about">
            <h1 className="container">About page</h1>
          </Route>
          <Route path="/starwars">
            <StarwarsPage />
          </Route>
          <Route exact path="/">
            <h1>Home page</h1>
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
