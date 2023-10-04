import allMoviesData from '../assets/movies.json';

export function findMovie(latestClickedMovie: string) {
  const foundMovie = allMoviesData.find(
    (movie) => movie.title === latestClickedMovie
  );

  return foundMovie;
}
