import './Recommended.scss'
import { useState } from 'react'
import Movies from '../../assets/movies.json'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

function Recommended() {

    const [slide, setSlide] = useState<number>(0);
    const isTrendingComp = Movies.filter((movie => movie.isTrending))

    console.log(isTrendingComp);
    

    const nextSlide = () => {
        setSlide(slide === isTrendingComp.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? isTrendingComp.length - 1 : slide - 1)
    }




    return (

        <div className='carousel'>

            <h1>Recommended:</h1>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} data-testid='arrow' />
            {Movies.map((movie: MovieData, index) => {
                return (
                    <img key={index} className={slide === index ? "slide" : "slide slide-hidden"} src={movie.thumbnail} alt={'Movie-thumbnail: ' + index} />
                )
            })}
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} data-testid='arrow' />
            <span className='indicators'>{Movies.map((_, index) => {
                return (<button key={index} className={slide === index ? "indicator" : "indicator indicator-inactive"} onClick={() => setSlide(index)}></button>)
            })}</span>
        </div>

    )
}

export default Recommended