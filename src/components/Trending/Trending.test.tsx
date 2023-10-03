import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeView from '../../views/HomeView/HomeView';
// import userEvent from '@testing-library/user-event';

describe.only('test that the base is being rendered', () => {
    it('should display a heading with the text "Trending:" ', async () => {
        render(<HomeView />)
        const trendingHeading = await screen.findByText('Trending:');

        expect(trendingHeading).toBeInTheDocument()
    })
})