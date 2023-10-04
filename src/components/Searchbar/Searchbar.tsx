import './Searchbar.scss'
import { FaSearch } from "react-icons/fa"
import data from '../../assets/movies.json'
import { useState } from 'react';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<any>([]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
    if (value === '') {
      setFilteredData([])
    }
  };


  const filterData = (searchTerm) => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <div className='Searchbar'>
      <div className="input-wrapper">
        <FaSearch id="SearchIcon" />
        <input placeholder="Sök" value={searchTerm} onChange={handleInputChange} />
      </div>
      <div className='searchResults'>
        <ul>
          {filteredData.map((item) => (
            <li key={item.title} onClick={() => {console.log(item.title)}}>{item.title}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Searchbar