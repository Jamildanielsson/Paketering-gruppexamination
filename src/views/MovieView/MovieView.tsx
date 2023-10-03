import Header from '../../components/Header/Header';
import { useState } from 'react';

import './MovieView.scss';

function MovieView() {
  // detta är det jag ska göra testa olika filmer</text och fixa till UI

    // Hur ska jag ta emot bookmarks så jag kan ändra det i sessionen?
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

    const movieInfo =
    {
      title: "The Shawshank Redemption",
      year: 1994,
      rating: "R",
      actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      genre: "Drama",
      synopsis: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    }

    const actors = movieInfo.actors.map(a => {
        return a + ", ";
    });

    function addToBookmarks() {
      // lägg till bookmarks
    }

    function removeFromBookmarks() {
      // ta bort bookmarks
    }


  return (
    <div className='movieView'>
      <Header />
      
      <section className='card'>
        <div className='container'>
          <div>
            <img src={movieInfo.thumbnail} />
          </div>
          <div className='info'>
            <h1 className='titel'>{movieInfo.title}</h1>
            <h3 className='year'>{movieInfo.year}, {movieInfo.genre}</h3>
            <h3 className='actors'>{actors}</h3>
            <h3 className='rating'>{movieInfo.rating}</h3>  
          </div>
        </div>
        <div className='synopsis'>
          {movieInfo.synopsis}
        </div>

        {isBookmarked? (
          <button className='movieView__button' onClick={() => removeFromBookmarks()}>Remove from Bookmark</button>
        ) : (
          <button className='movieView__button' onClick={() => addToBookmarks()}>Add to Bookmark</button>
        )}
        
        
      </section>
    </div>
  )
}


  

export default MovieView;
