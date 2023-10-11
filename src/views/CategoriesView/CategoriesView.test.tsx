import { render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CategoriesView from './CategoriesView';
import userEvent from '@testing-library/user-event';
import MovieView from '../MovieView/MovieView';
import HomeView from '../HomeView/HomeView';
import { createStore } from '../../redux/store';

let store: TStore;
beforeEach(() => {
  store = createStore();
});

describe('test that the categories view is working as expected', () => {
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

  it('should render 73 images in the view (36 stars, 36 thumbnails, 1 logo)', async () => {
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
    const starImages = await screen.findAllByRole('img', { name: 'star image' });
    expect(starImages).toHaveLength(36);
  });
  it('should display a "filled" star on the first star-image after clicking it', async () => {
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

  it('clicks a movie-thumbnail in the categories view, then should navigate to the movieview and display the actors 2 first names', async () => {
    // Film-ordningen är alltid samma i våran applikation, det betyder att filmen 'The Dark Knight' alltid är första filmen.
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

  it('should find a movie in the first container with the expected name', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CategoriesView />
        </MemoryRouter>
      </Provider>
    );
      const container = document.querySelector('.genre-carousel') as HTMLElement
      const title = await within(container).findByText('Gladiator')
      expect(title).toBeInTheDocument()
  });

  it('should display the expected amount of carousels in the categories-view', () => {
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
