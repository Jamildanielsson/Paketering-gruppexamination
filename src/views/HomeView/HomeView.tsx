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
      <Trending />
      <Recommended />
    </div>
  );
}

export default HomeView;
