import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CategoriesView from './CategoriesView';
import userEvent from '@testing-library/user-event';
import MovieView from '../MovieView/MovieView';
import HomeView from '../HomeView/HomeView';
import FavoritesView from '../FavoritesView/FavoritesView';
import { AppDispatch, RootState, createStore } from '../../redux/store';
import { AnyAction, Store } from '@reduxjs/toolkit';

let store: Store<RootState, AnyAction> & { dispatch: AppDispatch };
beforeEach(() => {
  store = createStore();
});

describe('that the categories view is working as expected', () => {
  it('should display the word "Action" in the document', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CategoriesView />
        </MemoryRouter>
      </Provider>
    );
    const actionHeading = screen.getByText('Action');
    expect(actionHeading).toBeInTheDocument();
  });

  it('should render x images in the view', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CategoriesView />
        </MemoryRouter>
      </Provider>
    );
    const images = await screen.findAllByRole('img');
    expect(images).toHaveLength(73);
  });
  it('should be 36 star-images displaying', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CategoriesView />
        </MemoryRouter>
      </Provider>
    );
    const starImages = await screen.findAllByRole('img', {
      name: 'star image',
    });

    expect(starImages).toHaveLength(36);
  });

  it('should display a "filled" source on the first star-image after click', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CategoriesView />
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
  });

  it('should display the movieview and the actors 2 first names', async () => {
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
    expect(
      await screen.findByText('Christian Bale, Heath Ledger', { exact: false })
    ).toBeInTheDocument();
  });

  it('should display the movieview and that the add to favorites button is rendered and that it is working', async () => {
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

    window.localStorage.clear();
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

    window.localStorage.clear();
    console.log(window.localStorage.getItem('favorites'));

    const movieImage = await screen.findAllByAltText('movie thumbnail');
    await userEvent.click(movieImage[0]);
    const button = await screen.findByText('Add to favorites', {
      exact: false,
    });
    await userEvent.click(button);
    const navButton = await screen.findByTestId('navigation');
    await userEvent.click(navButton);
    expect(await screen.findByTestId('favorite-number')).toHaveTextContent('1');
  });

  it('should open the nav and display 0 in favorites-li', async () => {
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

  it('should click the 2 starimages on the first 2 movieimages in favorites-view, open the nav and display 2 in favorites-li', async () => {
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
    const navButton = await screen.findByTestId('navigation');
    await userEvent.click(navButton);
    expect(await screen.findByTestId('favorite-number')).toHaveTextContent('2');
  });

  it('should find a movie in the first container with the expected name', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CategoriesView />
        </MemoryRouter>
      </Provider>
    );
    const container = screen.getAllByTestId('Action');
    expect(container[0]).toHaveTextContent('Gladiator');
  });
  it('should display the expected amount of div-containers(headings) in the view', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CategoriesView />
        </MemoryRouter>
      </Provider>
    );
    const heading = screen.getAllByRole('heading', { level: 2 });
    expect(heading).toHaveLength(15);
  });
});
