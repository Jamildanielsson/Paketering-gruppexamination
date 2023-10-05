import { useSelector } from 'react-redux';
import './Navigation.scss';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';

function Navigation({ isOpen }: INavigationProps) {
  const navigate = useNavigate();
  const favorites = useSelector((state: RootState) => state.favorites);

  return (
    <nav className='navigation'>
      {isOpen && (
        <ul className='navigation__links'>
          {/* HOME */}
          <li
            onClick={() => navigate('/Paketering-gruppexamination/')}
            className='navigation__link'
          >
            Home
          </li>

          {/* FAVORITES */}
          <li
            onClick={() =>
              navigate('/Paketering-gruppexamination/favoritesview/')
            }
            className='navigation__link'
          >
            Favorites ({' '}
            <span className='navigation__link__favorite-number'>
              {favorites.length}
            </span>{' '}
            )
          </li>

          {/* CATEGORIES */}
          <li
            onClick={() =>
              navigate('/Paketering-gruppexamination/categoriesview/')
            }
            className='navigation__link'
          >
            Categories
          </li>
        </ul>
      )}
    </nav>
  );
}
export default Navigation;
