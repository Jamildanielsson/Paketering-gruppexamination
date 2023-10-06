import './MovieCard.scss';

interface IMovieCardProps {
  title: string;
  year: number;
  rating: string;
  thumbnail: string;
}

function MovieCard({ title, year, rating, thumbnail }: IMovieCardProps) {
  return (
    <div className='movie-card'>
      <img className='movie-card__thumbnail' src={thumbnail} />
      <div className='movie-card__info'>
        <p className='movie-card__info__title'>{title}</p>
        <p className='movie-card__info__year'>{year}</p>
        <p className='movie-card__info__rating'>{rating}</p>
      </div>
    </div>
  );
}
export default MovieCard;
