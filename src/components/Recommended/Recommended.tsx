import './Recommended.scss'
import Movies from '../../assets/movies.json'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'




function Recommended() {

    const isNotTrendingComp = Movies.filter((movie => !movie.isTrending))

    console.log(isNotTrendingComp);

    const imgComp = isNotTrendingComp.map((movie, index) => {
<SwiperSlide style={{backgroundImage: `url(${movie.thumbnail})`}} className='my-slider'>

</SwiperSlide>
    })


    return (
        <div className='recommended'>

        <Swiper>
            {isNotTrendingComp.map((movie, index) => { return (
                <SwiperSlide>
                    <img src={movie.thumbnail} alt="" />
                </SwiperSlide> )
            })}
        </Swiper>

        </div>

    )
}

export default Recommended