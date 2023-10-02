import { useState } from 'react';
import './Hamburger.scss';

function Hamburger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section
      className={`hamburger-menu ${isOpen ? 'hamburger-menu--open' : ''}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className='hamburger-menu__line'></span>
      <span className='hamburger-menu__line'></span>
      <span className='hamburger-menu__line'></span>
    </section>
  );
}

export default Hamburger;
