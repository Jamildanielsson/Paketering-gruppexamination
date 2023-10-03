import './HomeView.scss';
import Header from '../../components/Header/Header';
import Trending from '../../components/Trending/Trending';
import Recommended from '../../components/Recommended/Recommended';

function HomeView() {
  return (
    <div>
      <Header />
      <Trending />
      <Recommended />
    </div>
  );
}

export default HomeView;
