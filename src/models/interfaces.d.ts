interface MovieData {
  actors: string[];
  genre: string;
  rating: string;
  synopsis: string;
  thumbnail: string;
  title: string;
  year: number;
  isTrending?: boolean;
}

interface IHamburgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IGenreCarouselProps {
  genre: string;
}

interface INavigationProps {
  isOpen: boolean;
}

interface ILatestMovie {
  latestMovie: string;
}

interface IMovieCardProps {
  title: string;
  year: number;
  rating: string;
  thumbnail: string;
}
