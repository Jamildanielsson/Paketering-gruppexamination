// import MovieCard from '../components/MovieCard/MovieCard';
import './GenreCarousel.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import Slider from 'react-slick';
import { sliderSettings } from '../utils/sliderSettings';
import MovieCard from '../components/MovieCard/MovieCard';
import allMoviesArray from '../assets/movies.json';

interface IGenreCarouselProps {
  genre: string;
}

function GenreCarousel({ genre }: IGenreCarouselProps) {
  // Assuming you have the genre you want to filter by as a variable called 'genre'
  const moviesThatContainGenre: MovieData[] = allMoviesArray.filter((movie) =>
    movie.genre.includes(genre)
  );

  const movieCardComponents = moviesThatContainGenre.map((movie) => {
    return (
      <MovieCard
        title={movie.title}
        year={movie.year}
        thumbnail={movie.thumbnail}
        rating={movie.rating}
      />
    );
  });

  return (
    <div className='genre-carousel'>
      <h2>{genre}</h2>
      <div className='carousel'>
        <Slider {...sliderSettings}>{movieCardComponents}</Slider>
      </div>
    </div>
  );
}
export default GenreCarousel;
