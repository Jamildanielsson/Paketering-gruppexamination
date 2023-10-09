import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import HomeView from '../../views/HomeView/HomeView';
import Trending from './Trending';
import { BrowserRouter } from 'react-router-dom';

describe('test that the base is being rendered', () => {
  it('should display a heading with the text "Trending:" ', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomeView />
        </BrowserRouter>
      </Provider>
    );
    const trendingHeading = await screen.findByText('Trending:');
    expect(trendingHeading).toBeInTheDocument();
  });

  it('should display 8 image-elements', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Trending />
        </BrowserRouter>
      </Provider>
    );
    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(8);
  });
});
