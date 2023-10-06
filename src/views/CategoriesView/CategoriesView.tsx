import Header from '../../components/Header/Header';
import './CategoriesView.scss';
import allMoviesArray from '../../assets/movies.json';
import { getUniqueGenres } from '../../utils/getUniqueGenres';

function CategoriesView() {
  const availableGenres = getUniqueGenres(allMoviesArray);

  console.log(availableGenres);

  return (
    <div>
      <Header />
    </div>
  );
}

export default CategoriesView;
