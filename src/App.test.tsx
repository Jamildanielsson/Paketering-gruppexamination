// Dessa tester är så pass omfattande att vi har valt att plocka ut dem från Categories-test, detta då de testar olika komponenter samtidigt.

import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CategoriesView from './views/CategoriesView/CategoriesView';
import userEvent from '@testing-library/user-event';
import MovieView from './views/MovieView/MovieView';
import HomeView from './views/HomeView/HomeView';
import FavoritesView from './views/FavoritesView/FavoritesView';
import { AppDispatch, RootState, createStore } from '../src/redux/store';
import { AnyAction, Store } from '@reduxjs/toolkit';

let store: Store<RootState, AnyAction> & { dispatch: AppDispatch };
beforeEach(() => {
  store = createStore();
});
describe('A wider type of tests that checks functionality between a few components', () => {

  it('should display the movie view and that the add to favorites button is rendered and that it is working (by clicking and switching text)', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={['/Paketering-gruppexamination/categoriesview']}
        >
          <Routes>
            <Route
              path='/Paketering-gruppexamination'
              element={<HomeView />}
            ></Route>
            <Route
              path='/Paketering-gruppexamination/categoriesview'
              element={<CategoriesView />}
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
    const button = await screen.findByText('Add to favorites');
    await userEvent.click(button);
    expect(
      await screen.findByText('Remove from favorites', { exact: false })
    ).toBeInTheDocument();
  });

  it('should open the navigation and display value 0 in the "Favorites"-link', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={['/Paketering-gruppexamination/categoriesview']}
        >
          <Routes>
            <Route
              path='/Paketering-gruppexamination'
              element={<HomeView />}
            ></Route>
            <Route
              path='/Paketering-gruppexamination/categoriesview'
              element={<CategoriesView />}
            ></Route>
            <Route
              path='/Paketering-gruppexamination/movieview'
              element={<MovieView />}
            ></Route>
            <Route
              path='/Paketering-gruppexamination/favoritesview'
              element={<FavoritesView />}
            ></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const navButton = await screen.findByTestId('navigation');
    await userEvent.click(navButton);
    expect(await screen.findByTestId('favorite-number')).toHaveTextContent('0');
  });

  it('should go from favorites>movieview>click-add>clicknav>favorites should be 1', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={['/Paketering-gruppexamination/categoriesview']}
        >
          <Routes>
            <Route
              path='/Paketering-gruppexamination'
              element={<HomeView />}
            ></Route>
            <Route
              path='/Paketering-gruppexamination/categoriesview'
              element={<CategoriesView />}
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
    const button = await screen.findByText('Add to favorites', {
      exact: false,
    });
    await userEvent.click(button);
    const navButton = document.querySelector('.hamburger-menu') as HTMLElement;
    await userEvent.click(navButton);
    expect(await screen.findByTestId('favorite-number')).toHaveTextContent('1');
  });

  it('should click 2 starimages on the first 2 movie-images in favorites-view then open the navigation and then display value 2 in "Favorites"-link', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={['/Paketering-gruppexamination/categoriesview']}
        >
          <Routes>
            <Route
              path='/Paketering-gruppexamination'
              element={<HomeView />}
            ></Route>
            <Route
              path='/Paketering-gruppexamination/categoriesview'
              element={<CategoriesView />}
            ></Route>
            <Route
              path='/Paketering-gruppexamination/movieview'
              element={<MovieView />}
            ></Route>
            <Route
              path='/Paketering-gruppexamination/favoritesview'
              element={<FavoritesView />}
            ></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const starButton = await screen.findAllByAltText('favorite star');
    await userEvent.click(starButton[0]);
    await userEvent.click(starButton[1]);

    // Fixa testID
    const navButton = await screen.findByTestId('navigation');
    await userEvent.click(navButton);
    expect(await screen.findByTestId('favorite-number')).toHaveTextContent('2');
  });

})
