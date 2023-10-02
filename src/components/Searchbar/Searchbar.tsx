import './Searchbar.scss'
import { FaSearch } from "react-icons/fa"

function Searchbar() {
  return (
    <div>
        <div className="input-wrapper">
                <FaSearch id="SearchIcon" />
                <input placeholder="Sök..." />
            </div>
    </div>
  )
}

export default Searchbar