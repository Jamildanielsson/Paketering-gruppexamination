import './Hamburger.scss';

function Hamburger({ isOpen, setIsOpen }: IHamburgerProps) {
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
