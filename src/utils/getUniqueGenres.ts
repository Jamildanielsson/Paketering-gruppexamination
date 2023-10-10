/**
 * Takes an array of MovieData objects, extracts and trims the genres from each movie,
 * removes any duplicates, sorts them alphabetically, and returns the resulting array
 * @param arrayFromJson The Json array of movies
 * @returns An alphabetically sorted array of unique genres
 */
export function getUniqueGenres(arrayFromJson: MovieData[]) {
  const uniqueGenres: string[] = [];

  for (const movie of arrayFromJson) {
    if (typeof movie.genre !== 'string') {
      console.error(`Invalid genre data: ${movie.genre}`);
      continue;
    }

    const genres = movie.genre.split(',').map((category) => category.trim());

    for (const genre of genres) {
      if (!uniqueGenres.includes(genre)) {
        uniqueGenres.push(genre);
      }
    }
  }
  uniqueGenres.sort();

  return uniqueGenres;
}
