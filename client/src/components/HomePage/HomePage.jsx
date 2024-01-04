import './HomePage.css';
import Cards from '../Cards/Cards';
import Filters from '../Filters/Filters';
import ButtonCreateDriver from '../ButtonCreateDriver/ButtonCreateDriver';
import { useState } from 'react';

const HomePage = () => {

  const [inputListener, setInputListener] = useState('')

  const handleChange = (event) => {
    setInputListener(event.target.value)
  }

  return (
    <div>
      <h2>HOME</h2>
      <div className="searchBar">
        <input placeholder="Search..." type="text" onChange={handleChange}/>
      </div>
      <Filters/>
      <ButtonCreateDriver/>
      <Cards inputListener={inputListener}/>
    </div>
  )
}

export default HomePage