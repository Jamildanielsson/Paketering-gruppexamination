import './Searchbar.scss';
import { FaSearch } from 'react-icons/fa';
import data from '../../assets/movies.json';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setLatestMovie } from '../../redux/latestMovieSlice';
import { AppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<MovieData[]>([]);

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
    if (value === '') {
      setFilteredData([]);
    }
  };

  const filterData = (searchTerm: string) => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  function handleMovieClick(movieTitle: string) {
    dispatch(setLatestMovie({ latestMovie: movieTitle }));
    navigate('/paketering-gruppexamination/movieview/');
  }

  return (
    <div className='Searchbar'>
      <div className='input-wrapper'>
        <FaSearch id='SearchIcon' />
        <input
          placeholder='Search movie on title?'
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className='searchResults'>
        <ul>
          {filteredData.map((item) => (
            <li key={item.title} onClick={() => handleMovieClick(item.title)}>
              <img src={item.thumbnail} height='100rem' />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Searchbar;
