import { render } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { createStore } from '../../redux/store';
import HomeView from '../HomeView/HomeView';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import MovieView from './MovieView';

let store = createStore();
afterEach(() => {
  store = createStore();
});

describe('Movie view', () => {
  it('Should render app', async () => {
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
  });
});
