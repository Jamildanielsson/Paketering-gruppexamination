import './Trending.scss'
import Movies from '../../assets/movies.json'

const MovieComponent = Movies.map((movie: MovieData, index) => {

  if(movie.isTrending === true)
    return ( <li key={index}>
      <h1>{ movie.title }</h1>
      <h3>{movie.year}</h3>
      <div className='image-synopsis-container'>
      <img className='movie-img' src={movie.thumbnail} alt='Movie-thumbnail' />
      <p>{movie.synopsis}</p>
      </div>
       </li> )
    
})



function Trending() {

  return (

    <div className='trending-container'>

      <h1>Trending Movies:</h1>
      {MovieComponent}
    </div>

  )
}

export default Trending