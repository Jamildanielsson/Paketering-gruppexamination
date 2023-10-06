import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe('Navigation', () => {
  it('Should render all the navigation texts', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navigation isOpen={true} />
        </MemoryRouter>
      </Provider>
    );

    const homeText = screen.getByText('Home');
    const favoritesText = screen.getByText(/Favorites/);
    const categoriesText = screen.getByText('Categories');

    expect(homeText).toBeInTheDocument();
    expect(favoritesText).toBeInTheDocument();
    expect(categoriesText).toBeInTheDocument();
  });

  it('Should render the right amount of links', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navigation isOpen={true} />
        </MemoryRouter>
      </Provider>
    );

    const allLinks = screen.getAllByRole('listitem');
    expect(allLinks).toHaveLength(3);
  });
});
