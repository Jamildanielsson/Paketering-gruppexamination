
import { cleanup, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import store from '../../redux/store';


import { MemoryRouter, Route, Routes } from 'react-router-dom';
// import { waitFor } from '@testing-library/react';
import CategoriesView from './CategoriesView';
import MovieCard from '../../components/MovieCard/MovieCard';
import GenreCarousel from '../../components/GenreCarousel/GenreCarousel';

afterEach(cleanup);

describe('that the categories view is working as expected', () => {
    render(
        <Provider store={store}>
        <MemoryRouter>
          <CategoriesView />
          <GenreCarousel genre={'action'}/> 
          <MovieCard title={'Shawshank'} year={1974} rating={'R'} thumbnail={'https://m.media-amazon.com/images/M/MV5BZGJjYmIzZmQtOGE2YS00Zjc1LTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg'} />
        </MemoryRouter>
      </Provider>
    )
    it('should display the word "Action" in the document', () => {
        const actionHeading = screen.getByText('Action')
        screen.debug()
        expect(actionHeading).toBeInTheDocument()
    })
})




// describe('that images are being rendered', () => {
//     render(
//         <Provider store={store}>
//         <MemoryRouter>
//           <CategoriesView />
//           <GenreCarousel genre={'action'}/> 
//           <MovieCard title={'Shawshank'} year={1974} rating={'R'} thumbnail={'https://m.media-amazon.com/images/M/MV5BZGJjYmIzZmQtOGE2YS00Zjc1LTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg'} />
//         </MemoryRouter>
//       </Provider>
//     )
//     it('should be 22 images in the first container', async () => {
//         const images = await screen.findAllByRole('img')
//         expect(images).toHaveLength(22)
//     })
// })