import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeView from './views/HomeView/HomeView'
import MovieView from './views/MovieView/MovieView'
import FavoritesView from './views/FavoritesView/FavoritesView'
import CategoriesView from './views/CategoriesView/CategoriesView'

function App() {

  const router = createBrowserRouter([
    {
      path: '/paketering-gruppexamination/homeview/',
      element: <HomeView />
    },
    {
      path: '/paketering-gruppexamination/movieview/',
      element: <MovieView />
    },
    {
      path: '/paketering-gruppexamination/favoritesview/',
      element: <FavoritesView />
    },
    {
      path: '/paketering-gruppexamination/categoriesview/',
      element: <CategoriesView />
    },

  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
