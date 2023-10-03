import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe(Header, () => {
  it('Should render the fakeflix logo in the header', () => {
    render(<Header />, { wrapper: BrowserRouter });
    const fakeFlixLogo = screen.getByAltText('Fakeflix logo');

    expect(fakeFlixLogo).toBeInTheDocument();
  });

  it('Should render the hamburger menu in the header', () => {
    render(<Header />, { wrapper: BrowserRouter });
    const hamburger = screen.getByRole('navigation');

    expect(hamburger).toBeInTheDocument();
  });
});
