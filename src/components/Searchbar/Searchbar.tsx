import './Searchbar.scss';
import { FaSearch } from 'react-icons/fa';
import data from '../../assets/movies.json';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { getClickedMovieAndNavigate } from '../../utils/getClickedMovieAndNavigate';
import missing from '../../assets/images/missing.png';

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

  const handleInputBlur = () => {
    setTimeout(() => {
      setSearchTerm('');
      setFilteredData([]);
    }, 100);
  };

  return (
    <div className='Searchbar'>
      <div className='input-wrapper'>
        <FaSearch id='SearchIcon' />
        <input
          placeholder='Search movie on title'
          value={searchTerm}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>
      <div className='searchResults'>
        <ul>
          {filteredData.map((item) => (
            <li
            data-testid='searchResultLi'
              key={item.title}
              onMouseDown={() =>
                getClickedMovieAndNavigate(item.title, navigate, dispatch)
              }
            >
              <img
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = missing;
                }}
                src={item.thumbnail}
                height='100rem'
              />

              <div>
                <h3>{item.title}</h3>
                <p>
                  {item.year} | {item.rating}{' '}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Searchbar;
