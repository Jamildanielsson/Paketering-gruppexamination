import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Trending from './Trending';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppDispatch, RootState, createStore } from '../../redux/store';
import { AnyAction, Store } from '@reduxjs/toolkit';
import HomeView from '../../views/HomeView/HomeView';
import MovieView from '../../views/MovieView/MovieView';
import userEvent from '@testing-library/user-event';

let store: Store<RootState, AnyAction> & { dispatch: AppDispatch };
beforeEach(() => {
  store = createStore();
});
describe(Trending, () => {
  it('should display 8 image-elements', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Trending />
        </MemoryRouter>
      </Provider>
    );
    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(8);
  });


  //Funktionen trycker på den första thumbnailen (gudfadern 2) och då ska 1974 (året filmen släpptes) visas på skärmen.
  it('should display the movie view when a thumbnail is pressed ', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={['/Paketering-gruppexamination/']}
        >
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
    await userEvent.click(movieImage[0]);
    expect(
      await screen.findByText('1974', { exact: false })
    ).toBeInTheDocument();
  });

  it('should display a "filled" source on the first star-image after click', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Trending/>
        </MemoryRouter>
      </Provider>
    );
    const starEmpty = await screen.findAllByRole('img', { name: 'star image' });
    const starImages = await screen.findAllByAltText('favorite star');
    await userEvent.click(starImages[0]);
    expect(starEmpty[0]).toHaveAttribute(
      'src',
      '/Paketering-gruppexamination/src/assets/images/favourite-filled.png'
    );

    it('should be 36 star-images displaying', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <HomeView />
          </MemoryRouter>
        </Provider>
      );
      const starImages = await screen.findAllByRole('img', {
        name: 'star image',
      });

      expect(starImages).toHaveLength(36);
    });

    
  });

});
