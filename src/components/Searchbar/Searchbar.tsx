import './Searchbar.scss'
import { FaSearch } from "react-icons/fa"
import data from '../../assets/movies.json'
import { useState } from 'react';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState<any>('');
  const [filteredData, setFilteredData] = useState<any>([]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
    if(searchTerm === null ){
      setFilteredData([])
    }
  };


  const filterData = (searchTerm: any) => {
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
      <ul>
        {filteredData.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Searchbar