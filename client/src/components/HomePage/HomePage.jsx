import './HomePage.css';
import NavBar from '../NavBar/NavBar';
import Cards from '../Cards/Cards';
import Filters from '../Filters/Filters';
import ButtonCreateDriver from '../ButtonCreateDriver/ButtonCreateDriver';
import Pagination from '../Pagination/Pagination';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllDrivers } from '../../Redux/actions';
import SearchBar from '../SearchBar/SearchBar';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDrivers());
  }, [dispatch]);

  const driversReducer = useSelector((state) => state.allDrivers);
  const driversFilterReducer = useSelector((state) => state.filterDrivers);

  const [inputListener, setInputListener] = useState('');
  const [filteredDrivers, setFilteredDrivers] = useState(driversReducer);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const driversToShow = filteredDrivers.slice(startIndex, endIndex);

  const handleChange = (event) => {
    setInputListener(event.target.value)
  }

  return (
      <div className='Home_Page'>
        <div className='controllers'>
          <NavBar />
          <Filters setCurrentPage={setCurrentPage} />
          <ButtonCreateDriver />
          <SearchBar handleChange={handleChange} />
        </div>
        <Cards
          inputListener={inputListener}
          driversFilterReducer={driversFilterReducer}
          driversToShow={driversToShow}
          setFilteredDrivers={setFilteredDrivers}
          driversReducer={driversReducer}
        />
        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          pageSize={pageSize}
          totalItems={filteredDrivers.length}
        />
      </div>
  )
}

export default HomePage