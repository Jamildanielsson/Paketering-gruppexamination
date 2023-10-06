import Header from '../../components/Header/Header';
import './FavoritesView.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { AppDispatch, RootState } from '../../redux/store';
import Movies from '../../assets/movies.json'
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';
import missing from '../../assets/images/missing.png'
import { favoriteClickHandler } from '../../utils/favoriteClickHandler';
import { useDispatch } from 'react-redux';

function FavoritesView() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  
  const movieComponent = Movies.map((movie, index) => {
    if(favorites.includes(movie.title)) {
      return (
        <li className='favorites__list' key={index + 'list'}>
          <div className='favorites-image-container'><img onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = missing;
                  }} className='favorites-thumbnail' src={movie.thumbnail}/></div>
          <div key={index} className='favorites-text-container'>
            <div className='favorites__title-year'>
              <h1 className='favorites-title'>{movie.title}</h1>
              <p className='favorites-year-genre-rating'>{movie.year} | {movie.genre} | {movie.rating}</p>
              <h4 className='favorites-actors'>{movie.actors ? movie.actors.join(', ') : ''}</h4>
            </div>
            <div key={index + 'synopsis'} className='favorites-synopsis-button'>
              <p className='favorites-synopsis-text'> {movie.synopsis} </p>
              <button className='favorites-remove-button' key={'button nr. ' + index}  onClick={() =>
                    favoriteClickHandler(movie.title, favorites, dispatch)
                  }>Remove</button>
            </div>
          </div>
        </li>
      )
      } 
  })

  const navigateToStart = () => {
    navigate(-1)
  }
  
  return (
    <div>
      <Header />
      <div className='favorites__container'>
        <section className={movieComponent && !isEmpty(favorites) ? 'favorites__section' : 'favorites__section-flex'}>
          { movieComponent && !isEmpty(favorites) ? movieComponent : 
          <div className='favorites-empty'><h1 className='favorites__empty-message'>Please add a favorite, this view is empty</h1>
          <button className='favorites__empty-button' onClick={ navigateToStart }>Back to start</button></div> }
        </section>
      </div>
    </div>
  );
}

export default FavoritesView;