import './HomePage.css';
import Cards from '../Cards/Cards';
import Filters from '../Filters/Filters';
import ButtonCreateDriver from '../ButtonCreateDriver/ButtonCreateDriver';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {

  const driversReducer = useSelector((state) => state.allDrivers);
  const driversFilterReducer = useSelector((state) => state.filterDrivers);
  const [inputListener, setInputListener] = useState('')
  const [filteredDrivers, setFilteredDrivers] = useState(driversReducer);

  const handleChange = (event) => {
    setInputListener(event.target.value)
  }

  return (
    <div>
      <h2>HOME</h2>
      <div className="searchBar">
        <input placeholder="Search..." type="text" onChange={handleChange} />
      </div>
      <Filters />
      <ButtonCreateDriver />
      <Cards
        inputListener={inputListener}
        driversFilterReducer={driversFilterReducer}
        filteredDrivers={filteredDrivers}
        setFilteredDrivers={setFilteredDrivers}
        driversReducer={driversReducer} 
      />
    </div>
  )
}

export default HomePage