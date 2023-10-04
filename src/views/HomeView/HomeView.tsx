import './HomeView.scss';
import Header from '../../components/Header/Header';
import Trending from '../../components/Trending/Trending';
import Searchbar from '../../components/Searchbar/Searchbar';
import Recommended from '../../components/Recommended/Recommended';

function HomeView() {
  return (
    <div>
      <Header />
      <Searchbar/>
      <h1 className='home-heading'>Trending:</h1>
      <Trending />
      <h1 className='home-heading'>Recommended:</h1>
      <Recommended />
    </div>
  );
}

export default HomeView;
