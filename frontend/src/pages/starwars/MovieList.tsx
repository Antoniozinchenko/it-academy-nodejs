import React, { Component } from "react";
import { fetchMovies, fetchOwnMovies } from "../../api/starwars-api";
import { Link } from "react-router-dom";

import styles from './style.module.css';

type Movie = {
  id: number,
  title: string
}

class MovieList extends Component {
  state = {
    movies: Array<Movie>(),
    loading: true
  };
  async componentDidMount() {
    const movies = await fetchOwnMovies().catch(() => []); 
    this.setState({movies, loading: false});
  }
  render () {
    const {movies, loading} = this.state;
    console.log(styles);
    return <div>
      <h1 className={styles.container}>Starwars page</h1>
      <div>
        {loading && <h1>Loading...</h1>}
        {movies.map(movie => (
          <h4 key={movie.id}>
            <Link to={`/starwars/${movie.id}`}>{movie.title}</Link>
          </h4>
        ))}
      </div>
    </div>
  }
};
export default MovieList;
