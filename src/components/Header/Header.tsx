import Hamburger from '../Hamburger/Hamburger';
import fakeflixlogoPNG from '../../assets/images/fakeflix.png';
import './Header.scss';

function Header() {
  const logoPNGAlt = 'Fakeflix logo';

  return (
    <header className='header'>
      <img className='header__logo' src={fakeflixlogoPNG} alt={logoPNGAlt} />
      <Hamburger />
    </header>
  );
}
export default Header;
