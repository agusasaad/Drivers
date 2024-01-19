import './LandingPage.css';
import { useNavigate } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import tituloF1 from '../../../public/img/tituloF1.png';
import Spinner from '../Spinner/Spinner'
import { useState } from 'react';

const LandingPage = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const navigateToHome = () => {
    setLoading(true);

    navigate('/spinner')

    setTimeout(() => {
      setLoading(false);
      navigate('/home');
    }, 2000);
  }


  return (
    <div className='Landing_page'>
      <NavBar />
      <div className='conteiner-title'>
        <img src={tituloF1} className='img_title' alt="" />
        <p className='descriptionPage'>
          Explore the exciting world of F1 drivers with our platform.
          From iconic legends to rising stars, access exclusive career info,
          key stats, and standout achievements for each driver.
        </p>
        <button className='button-landing-page' onClick={navigateToHome}>Get Started</button>
      </div>
    </div>
  )
}

export default LandingPage