import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Recommended from './Recommended';
import { BrowserRouter } from 'react-router-dom';
import { AppDispatch, RootState, createStore } from '../../redux/store';
import { AnyAction, Store } from '@reduxjs/toolkit';

let store: Store<RootState, AnyAction> & { dispatch: AppDispatch };
beforeEach(() => {
  store = createStore();
});

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
