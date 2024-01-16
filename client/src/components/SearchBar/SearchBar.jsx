import React from 'react'
import './SearchBar.css'

const SearchBar = ({handleChange}) => {
    return (
        <div className="searchBar">
            <input className='input-serach'
                title='Search Driver By Name'
                placeholder="Search Drivers..."
                type="text"
                onChange={handleChange} />
        </div>
    )
}

export default SearchBar