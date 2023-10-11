import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Recommended from './Recommended';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { createStore } from '../../redux/store';
import userEvent from '@testing-library/user-event';
import HomeView from '../../views/HomeView/HomeView';
import MovieView from '../../views/MovieView/MovieView';

let store: TStore;
beforeEach(() => {
  store = createStore();
});

describe('Recommended', () => {
  it('should display 8 image-elements', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Recommended />
        </MemoryRouter>
      </Provider>
    );
    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(8);
  });

  it('should display the movie view when a thumbnail is pressed ', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Paketering-gruppexamination/']}>
          <Routes>
            <Route
              path='/Paketering-gruppexamination'
              element={<HomeView />}
            ></Route>
            <Route
              path='/Paketering-gruppexamination/movieview'
              element={<MovieView />}
            ></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const movieImage = await screen.findAllByAltText('movie thumbnail');
    await userEvent.click(movieImage[1]);
    expect(
      await screen.findByText('Add to Favorites', { exact: false })
    ).toBeInTheDocument();
  });

  it('should display a "filled" star on the first star-image after click', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Recommended />
        </MemoryRouter>
      </Provider>
    );
    const starEmpty = await screen.findAllByRole('img', { name: 'star image' });
    const starImages = await screen.findAllByAltText('favorite star');
    await userEvent.click(starImages[3]);
    expect(starEmpty[3]).toHaveAttribute(
      'src',
      '/Paketering-gruppexamination/src/assets/images/favourite-filled.png'
    );
  });
  it('should be 4 star-images displaying', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Recommended />
        </MemoryRouter>
      </Provider>
    );
    const starImages = await screen.findAllByRole('img', {
      name: 'star image',
    });

    expect(starImages).toHaveLength(4);
  });
  it('should open the nav>Favorites(0)>ClickStar>OpenNav>Favorites(1) ', async () => {
    // Här måste vi rendera ut hela homeview för att även kunna testa att funktionaliteten mellan Recommended och Navbar fungerar.
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomeView />
        </MemoryRouter>
      </Provider>
    );
    const navButton = await screen.findByTestId('navigation');
    await userEvent.click(navButton);
    const favorites = await screen.findByTestId('favorite-number');
    expect(favorites).toHaveTextContent('0');
    const starButton = await screen.findAllByRole('img', {
      name: 'star image',
    });
    await userEvent.click(starButton[7]);
    await userEvent.click(navButton);
    screen.debug();
    expect(await screen.findByTestId('favorite-number')).toHaveTextContent('1');
  });
});
