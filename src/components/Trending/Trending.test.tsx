import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';


import HomeView from '../../views/HomeView/HomeView';
import { BrowserRouter } from 'react-router-dom';
// import userEvent from '@testing-library/user-event';

describe('test that the base is being rendered', () => {
    it('should display a heading with the text "Trending:" ', async () => {
        render(<HomeView />, {wrapper: BrowserRouter})
        const trendingHeading = await screen.findByText('Trending:');
        expect(trendingHeading).toBeInTheDocument()
    })
    it('should display two buttons with the class arrow', async () => {
        render(<HomeView />, {wrapper: BrowserRouter})
        const arrowButtons = await screen.findAllByTestId('arrow')
        expect(arrowButtons).toHaveLength(2)
    })
    it('should display an image with the alt-text Movie-thumbnail: 1', async () => {
        render(<HomeView />, {wrapper: BrowserRouter})
        const altText = await screen.findByAltText('Movie-thumbnail: 1')
        expect(altText).toBeInTheDocument()
    })
    it('should display 7 indicator-dots', async () => {
        render(<HomeView />, {wrapper: BrowserRouter})
        const indicatorButtons = await screen.findAllByRole('button')
        expect(indicatorButtons).toHaveLength(7)
        
    })

})