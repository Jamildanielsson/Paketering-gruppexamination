import './HomeView.scss';
import Header from '../../components/Header/Header';
import Trending from '../../components/Trending/Trending'
import Searchbar from '../../components/Searchbar/Searchbar';

function HomeView() {
  return (
    <div>
      <Header />
      <Trending />
      <Searchbar/>
    </div>
  )
}

export default HomeView;
