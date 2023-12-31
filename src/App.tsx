import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import MovieView from './views/MovieView/MovieView';
import FavoritesView from './views/FavoritesView/FavoritesView';
import CategoriesView from './views/CategoriesView/CategoriesView';

import { Provider } from 'react-redux';
import { createStore } from './redux/store';

function App() {
  const router = createBrowserRouter([
    {
      path: '/Paketering-gruppexamination/',
      element: <HomeView />,
    },
    {
      path: '/Paketering-gruppexamination/movieview/',
      element: <MovieView />,
    },
    {
      path: '/Paketering-gruppexamination/favoritesview/',
      element: <FavoritesView />,
    },
    {
      path: '/Paketering-gruppexamination/categoriesview/',
      element: <CategoriesView />,
    },
  ]);

  return (
    <div className='App'>
      <Provider store={createStore()}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
