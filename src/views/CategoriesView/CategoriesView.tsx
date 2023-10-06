import Header from '../../components/Header/Header';
import './CategoriesView.scss';
import allMoviesArray from '../../assets/movies.json';
import { getUniqueGenres } from '../../utils/getUniqueGenres';
import GenreCarousel from '../../GenreCarousel/GenreCarousel';

function CategoriesView() {
  const availableGenres = getUniqueGenres(allMoviesArray);

  console.log(availableGenres);

  const genreCarouselComponents = availableGenres.map((availableGenre) => (
    <GenreCarousel key={availableGenre} genre={availableGenre} />
  ));

  return (
    <div>
      <Header />
      {genreCarouselComponents}
    </div>
  );
}

export default CategoriesView;
