import Header from '../../components/Header/Header';
import './FavoritesView.scss';

const Movies = [{
  "title": "One Flew Over the Cuckoo's Nest",
  "year": 1975,
  "rating": "R",
  "actors": ["Jack Nicholson", "Louise Fletcher", "Michael Berryman"],
  "genre": "Drama",
  "synopsis": "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
  "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
},
{
  "title": "One Flew Over the Cuckoo's Nest",
  "year": 1975,
  "rating": "R",
  "actors": ["Jack Nicholson", "Louise Fletcher", "Michael Berryman"],
  "genre": "Drama",
  "synopsis": "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
  "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
}]

const movie = Movies.map((mov: any, index) => {
  return (
    <li className='favorites__list' key={index + 'list'}>
      <div key={index} className='favorites__card'>
        <img className='favorites-thumbnail' src={mov.thumbnail} />
        <h1 className='favorites-title'>{mov.title}</h1>
        <p className='favorites-year-genre-rating'>{mov.year} | {mov.genre} | {mov.rating}</p>
        <h4>{mov.actors}</h4>
      </div>
      <div key={index + 'synopsis'} className='favorites-synopsis-button'>
        <p className='favorites-synopsis-text'>
          {mov.synopsis}
        </p>
      </div>
      <button key={'button nr. ' + index}>Remove</button>
      </li>
      )
})


      function FavoritesView() {
  return (
      <div>
        <Header />
        <div className='favorites__container'>

          <section className='favorites__section'>
            {movie}
          </section>

        </div>



      </div>
      );
}

      export default FavoritesView;
