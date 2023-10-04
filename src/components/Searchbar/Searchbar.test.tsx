import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';


describe('SearchBar', () => {
    it('Should render the searchbar', async () => {
        render(<Searchbar />, { wrapper: BrowserRouter })
        const user = userEvent.setup();
        const input = screen.getByRole('textbox')

        await user.type(input, 'the godfather: part II')
        expect(input).toHaveValue('the godfather: part II')
    })
})