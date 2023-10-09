import './Trending.scss';
import Movies from '../../assets/movies.json';
import Slider from 'react-slick';
import { sliderSettings } from '../../utils/sliderSettings';
import MovieCard from '../MovieCard/MovieCard';

function Trending() {
  const isTrendingComponents = Movies.filter((movie) => movie.isTrending).map(
    (movie) => (
      <MovieCard
        key={movie.title}
        title={movie.title}
        year={movie.year}
        thumbnail={movie.thumbnail}
        rating={movie.rating}
      />
    )
  );

  return (
    <div className='trending'>
      <div className='carousel'>
        <Slider {...sliderSettings}>{isTrendingComponents}</Slider>
      </div>
    </div>
  );
}

export default Trending;
