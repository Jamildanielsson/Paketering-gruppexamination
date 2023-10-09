// import MovieCard from '../components/MovieCard/MovieCard';
import './GenreCarousel.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import Slider from 'react-slick';
import { sliderSettings } from '../../utils/sliderSettings';
import MovieCard from '../../components/MovieCard/MovieCard';
import allMoviesArray from '../../assets/movies.json';

interface IGenreCarouselProps {
  genre: string;
}

function GenreCarousel({ genre }: IGenreCarouselProps) {
  const moviesThatContainGenre: MovieData[] = allMoviesArray.filter((movie) =>
    movie.genre.includes(genre)
  );

  const movieCardComponents = moviesThatContainGenre.map((movie) => {
    return (
      <MovieCard
        key={movie.title}
        title={movie.title}
        year={movie.year}
        thumbnail={movie.thumbnail}
        rating={movie.rating}
      />
    );
  });

  return (
    <div className='genre-carousel'>
      <div className='genre-carousel__gradient-bg'>
        <h2 className='genre-carousel__genre-text'>{genre}</h2>
      </div>
      <div className='carousel'>
        <Slider {...sliderSettings}>{movieCardComponents}</Slider>
      </div>
    </div>
  );
}
export default GenreCarousel;
