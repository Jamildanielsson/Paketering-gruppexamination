import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from '../../redux/store';
import HomeView from '../../views/HomeView/HomeView';
import MovieView from '../../views/MovieView/MovieView';

let store: TStore;
beforeEach(() => {
  store = createStore();
});

describe('SearchBar', () => {
  it('Should render the searchbar', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Searchbar />
        </MemoryRouter>
      </Provider>
    );
    const user = userEvent.setup();
    const input = screen.getByRole('textbox');

    await user.type(input, 'the godfather: part II');
    expect(input).toHaveValue('the godfather: part II');
  });
  it('Should navigate to movie view when a movie is clicked', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/Paketering-gruppexamination']}>
          <Routes>
            <Route
              path='/Paketering-gruppexamination'
              element={<HomeView />}
            ></Route>
            <Route
              path='/Paketering-gruppexamination/movieview/'
              element={<MovieView />}
            ></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const user = userEvent.setup();
    const input = screen.getByRole('textbox');

    await user.type(input, 'the godfather:');
    await user.click(screen.getByTestId('searchResultLi'));
    expect(
      await screen.findByText('Add to Favorites', { exact: false })
    ).toBeInTheDocument();
  });
});
