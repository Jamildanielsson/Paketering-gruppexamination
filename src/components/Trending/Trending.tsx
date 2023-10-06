import './Trending.scss';
import Movies from '../../assets/movies.json';
import { useEffect, useRef } from 'react';
import { AppDispatch, RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getClickedMovieAndNavigate } from '../../utils/getClickedMovieAndNavigate';
import isFavoritePNG from '../../assets/images/favourite-filled.png';
import isNotFavoritePNG from '../../assets/images/favourite-not-filled.png';
import { favoriteClickHandler } from '../../utils/favoriteClickHandler';

function Trending() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);

  const isNotTrendingComp = Movies.filter(
    (movie: MovieData) => movie.isTrending
  );
  const imageListRef = useRef<HTMLDivElement>(null);
  const scrollbarThumbRef = useRef<HTMLDivElement>(null);
  const sliderScrollbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initSlider();
  }, []);

  const initSlider = () => {
    const slideButtons = Array.from(
      document.getElementsByClassName('slide-button-t')
    ) as HTMLButtonElement[];
    const maxScrollLeft =
      imageListRef.current!.scrollWidth - imageListRef.current!.clientWidth;

    // hantera scroll-thumb
    scrollbarThumbRef.current!.addEventListener(
      'mousedown',
      (e: MouseEvent) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumbRef.current!.offsetLeft;
        const maxThumbPosition =
          sliderScrollbarRef.current!.getBoundingClientRect().width -
          scrollbarThumbRef.current!.offsetWidth;

        // uppdatera scroll-thumb när den flyttas
        const handleMouseMove = (e: MouseEvent) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          // säkra så att scrollthumb inte sticker iväg utanför elementet
          const boundedPosition = Math.max(
            0,
            Math.min(maxThumbPosition, newThumbPosition)
          );
          const scrollPosition =
            (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollbarThumbRef.current!.style.left = `${boundedPosition}px`;
          imageListRef.current!.scrollLeft = scrollPosition;
        };
        // ta bort eventlistener när man släpper musklick
        const handleMouseUp = () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
        // lägg till elistener för musdrag interaktion
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    );

    // flytta bilder enligt antal klicken
    slideButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const direction = button.id === 'prev-slide' ? -1 : 1;
        const scrollAmount = imageListRef.current!.clientWidth * direction;
        imageListRef.current!.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      });
    });

    // visa och ta bort sidoknappar när man nått längst åt båda håll
    const handleSlideButtons = () => {
      slideButtons[0].style.display =
        imageListRef.current!.scrollLeft <= 0 ? 'none' : 'inline-block';
      slideButtons[1].style.display =
        imageListRef.current!.scrollLeft >= maxScrollLeft
          ? 'none'
          : 'inline-block';
    };
    // uppdatera scrollthumbens position efter bild-scroll
    const updateScrollThumbPosition = () => {
      const scrollPosition = imageListRef.current!.scrollLeft;
      const thumbPosition =
        (scrollPosition / maxScrollLeft) *
        (sliderScrollbarRef.current!.clientWidth -
          scrollbarThumbRef.current!.offsetWidth);
      scrollbarThumbRef.current!.style.left = `${thumbPosition}px`;
    };
    // kalla på dessa två när vi scrollar för att uppdatera.
    imageListRef.current!.addEventListener('scroll', () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });
  };

  return (
    <div className='megabody-t'>
      <div className='container-t'>
        <div className='slider-wrapper-t'>
          <button
            id='prev-slide'
            className='slide-button-t material-symbols-rounded'
          >
            chevron_left
          </button>
          <div className='image-list-t' ref={imageListRef}>
            {isNotTrendingComp.map((movie: MovieData, index: number) => {
              return (
                <div className='rec-card' key={movie.title}>
                  <div className='blur-container'></div>
                  <img
                    className='favoritePNG'
                    onClick={() =>
                      favoriteClickHandler(movie.title, favorites, dispatch)
                    }
                    src={
                      favorites.includes(movie.title)
                        ? isFavoritePNG
                        : isNotFavoritePNG
                    }
                  />
                  <img
                    onClick={() =>
                      getClickedMovieAndNavigate(
                        movie.title,
                        navigate,
                        dispatch
                      )
                    }
                    className='image-item-t'
                    key={index}
                    src={movie.thumbnail}
                    alt={`Movie ${index}`}
                  />
                </div>
              );
            })}
          </div>
          <button
            id='next-slide'
            className='slide-button-t material-symbols-rounded'
          >
            chevron_right
          </button>
        </div>
        <div className='slider-scrollbar-t' ref={sliderScrollbarRef}>
          <div className='scrollbar-track-t'>
            <div className='scrollbar-thumb-t' ref={scrollbarThumbRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
