import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import HomeView from '../HomeView/HomeView';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { waitFor } from '@testing-library/react';
import MovieView from './MovieView';

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
