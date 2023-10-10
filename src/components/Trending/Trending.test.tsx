import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Trending from './Trending';
import { MemoryRouter } from 'react-router-dom';
import { AppDispatch, RootState, createStore } from '../../redux/store';
import { AnyAction, Store } from '@reduxjs/toolkit';

let store: Store<RootState, AnyAction> & { dispatch: AppDispatch };
beforeEach(() => {
  store = createStore();
});

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
