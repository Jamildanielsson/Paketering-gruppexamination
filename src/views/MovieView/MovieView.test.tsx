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
              <MemoryRouter initialEntries={["/Paketering-gruppexamination"]}>
                  <Routes>
                      <Route path="/Paketering-gruppexamination" element={<HomeView />}>
                      </Route>
                      <Route path="/Paketering-gruppexamination/movieview/" element={<MovieView />}>
                      </Route>
                  </Routes>
              </MemoryRouter>
          </Provider>
      )
      const input = await screen.findByRole('textbox')
      await userEvent.type(input, 'forrest gump')

      const movie = await screen.findByText('Forrest Gump')
      await userEvent.click(movie)

      await waitFor(() => {
          expect(screen.getByText('1994', {exact: false})).toBeInTheDocument();
      })

      screen.debug()
  })
})