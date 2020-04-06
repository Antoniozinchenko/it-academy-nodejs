import axios from 'axios';

export const fetchMovies = async () => {
  const {data} = await axios.get('https://swapi.co/api/films');
  return data.results.map((item: any, index: number) => ({id: index + 1, title: item.title}));
}

export const fetchOwnMovies = async () => {
  const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/starwars/films`);
  return data;
}