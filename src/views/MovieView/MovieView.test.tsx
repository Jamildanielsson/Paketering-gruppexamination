import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import MovieView from './MovieView';
import { Provider } from 'react-redux';
import store from '../../redux/store';


describe('Movie view', () => {
    it('Should render the movie view', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <MovieView />
                </BrowserRouter>
                </Provider>
        )
        

    })
})