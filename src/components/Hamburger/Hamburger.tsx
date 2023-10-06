import { useRef } from 'react';
import './Hamburger.scss';

function Hamburger({ isOpen, setIsOpen }: IHamburgerProps) {
  const hamburgerRef = useRef<HTMLDivElement>(null);
  window.addEventListener('click', handleClickOutsideNav);

  // Den här funktionen används för att hantera klick utanför navigeringen.
  // Kontrollerar om navigationsmenyn är öppen och om det klickade elementet inte finns inuti menyn.
  // Om menyn är öppen och vi klickar utanför så stängs menyn.
  function handleClickOutsideNav(event: MouseEvent) {
    if (isOpen && !hamburgerRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }

  return (
    <section
      ref={hamburgerRef}
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
