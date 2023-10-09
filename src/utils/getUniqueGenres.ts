/**
 *
 * @param arrayFromJson The Json array of movies
 * @returns Alphabetic-Sorted Unique Genres
 */
export function getUniqueGenres(arrayFromJson: MovieData[]) {
  const uniqueGenres: string[] = [];

  for (const movie of arrayFromJson) {
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
