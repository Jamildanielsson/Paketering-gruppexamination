import './Recommended.scss';
import Movies from '../../assets/movies.json';
import Slider from 'react-slick';
import { sliderSettings } from '../../utils/sliderSettings';
import MovieCard from '../MovieCard/MovieCard';
import { shuffleArray } from '../../utils/shuffleMovies';

function Recommended() {
  const isRecommendedComponent = shuffleArray(
    Movies.filter((movie) => !movie.isTrending)
  )
    .slice(0, 10)
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map((movie) => (
      <MovieCard
        key={movie.title}
        title={movie.title}
        year={movie.year}
        thumbnail={movie.thumbnail}
        rating={movie.rating}
      />
    ));

  return (
    <div className='recommended'>
      <div className='carousel'>
        <Slider {...sliderSettings}>{isRecommendedComponent}</Slider>
      </div>
    </div>
  );
}

export default Recommended;
