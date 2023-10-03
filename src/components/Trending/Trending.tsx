import './Trending.scss'
import { useState } from 'react'
import Movies from '../../assets/movies.json'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

function Trending() {
  const [slide, setSlide] = useState<number>(0);

  const nextSlide = () => {
    setSlide(slide === Movies.length -1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? Movies.length - 1 : slide - 1)
  }

  return (
    <div className='carousel'>
      <h1>Trending</h1>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
      {Movies.map((movie:MovieData, index) => {
        // if(movie.isTrending)
        return ( <>
          <img key={index} className={ slide === index ? "slide" : "slide slide-hidden" } src={movie.thumbnail} alt='Movie-thumbnail' />
          </> )
      })}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
      <span className='indicators'>{Movies.map((_, index)=>{
        // if(_.isTrending)
        return ( <button key={index} className={ slide === index ? "indicator" : "indicator indicator-inactive"} onClick={ () => setSlide(index)}></button> )
      })}</span>

    </div>

  )
}

export default Trending