import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('Should render all the navigation texts', () => {
    render(<Navigation isOpen={true} />, { wrapper: BrowserRouter });
    const homeText = screen.getByText('Home');
    const movieText = screen.getByText('Movie');
    const favoritesText = screen.getByText('Favorites');
    const categoriesText = screen.getByText('Categories');

    expect(homeText).toBeInTheDocument();
    expect(movieText).toBeInTheDocument();
    expect(favoritesText).toBeInTheDocument();
    expect(categoriesText).toBeInTheDocument();
  });

  it('Should render the right amount of links', () => {
    render(<Navigation isOpen={true} />, { wrapper: BrowserRouter });
    const allLinks = screen.getAllByRole('listitem');
    expect(allLinks).toHaveLength(4);
  });
});
