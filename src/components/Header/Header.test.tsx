import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '../../redux/store';

describe(Header, () => {
  it('Should render the fakeflix logo in the header', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    const fakeFlixLogo = screen.getByAltText('Fakeflix logo');

    expect(fakeFlixLogo).toBeInTheDocument();
  });

  it('Should render the hamburger menu in the header', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    const hamburger = screen.getByRole('navigation');

    expect(hamburger).toBeInTheDocument();
  });
});
