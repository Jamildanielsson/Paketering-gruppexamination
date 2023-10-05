import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';


describe('SearchBar', () => {
    it('Should render the searchbar', async () => {
        render(
        <Provider store={store}>
            <BrowserRouter>
            <Searchbar />
            </BrowserRouter>
            </Provider>)
        const user = userEvent.setup();
        const input = screen.getByRole('textbox')

        await user.type(input, 'the godfather: part II')
        expect(input).toHaveValue('the godfather: part II')
    })
})