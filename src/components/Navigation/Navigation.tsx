import './Navigation.scss';
import { useNavigate } from 'react-router-dom';

function Navigation({ isOpen }: INavigationProps) {
  const navigate = useNavigate();

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

          {/* MOVIE */}
          <li
            onClick={() => navigate('/Paketering-gruppexamination/movieview/')}
            className='navigation__link'
          >
            Movie
          </li>

          {/* FAVORITES */}
          <li
            onClick={() =>
              navigate('/Paketering-gruppexamination/favoritesview/')
            }
            className='navigation__link'
          >
            Favorites
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
