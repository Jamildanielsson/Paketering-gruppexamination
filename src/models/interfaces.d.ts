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

// Props Interface
interface IHamburgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface INavigationProps {
  isOpen: boolean;
}

interface ILatestMovie {
  latestMovie: string;
}
