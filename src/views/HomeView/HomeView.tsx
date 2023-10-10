import './HomeView.scss';
import Header from '../../components/Header/Header';
import Trending from '../../components/Trending/Trending';
import Searchbar from '../../components/Searchbar/Searchbar';
import Recommended from '../../components/Recommended/Recommended';

function HomeView() {
  return (
    <div className='homeview'>
      <Header />
      <Searchbar />
      <div className='homeview__gradient-bg'>
        <h1 className='homeview__trending-text'>Trending</h1>
      </div>
      <Trending />
      <div className='homeview__gradient-bg'>
        <h1 className='homeview__recommended-text'>Recommended</h1>
      </div>
      <Recommended />
    </div>
  );
}

export default HomeView;
