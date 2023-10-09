import allMoviesData from '../assets/movies.json';

/**
 * Finds a movie with a given title in the 'allMoviesData' array.
 * @param latestClickedMovie - The title of the movie to find.
 * @returns The movie object if found, or 'undefined' if not found.
 */
export function findMovie(latestClickedMovie: string): MovieData | undefined {
  if (!Array.isArray(allMoviesData)) {
    console.error(`Invalid movie data: ${allMoviesData}`);
    return undefined;
  }

  const foundMovie = allMoviesData.find(
    (movie: MovieData) => movie.title === latestClickedMovie
  );

  return foundMovie;
}
