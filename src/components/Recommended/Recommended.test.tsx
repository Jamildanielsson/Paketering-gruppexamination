import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Recommended from './Recommended';
import { BrowserRouter } from 'react-router-dom';

describe(Recommended, () => {
  it('should display 8 image-elements', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Recommended />
        </BrowserRouter>
      </Provider>
    );
    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(8);
  });
});
