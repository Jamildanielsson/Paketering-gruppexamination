import Hamburger from '../Hamburger/Hamburger';
import fakeflixlogoPNG from '../../assets/images/fakeflix.png';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';

function Header() {
  const logoPNGAlt = 'Fakeflix logo';
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='header'>
      <img className='header__logo' src={fakeflixlogoPNG} alt={logoPNGAlt} />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navigation isOpen={isOpen} />
    </header>
  );
}
export default Header;
