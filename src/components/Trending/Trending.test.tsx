import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Trending from './Trending';
import { MemoryRouter } from 'react-router-dom';

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
});
