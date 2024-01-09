import './LandingPage.css';
import { useNavigate } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import tituloF1 from '../../../public/img/tituloF1.png';
import infoExtra from '../../../public/img/INFO_EXTRA.png';

const LandingPage = () => {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/home');
  }
  return (
    <div className='Landing_page'>
      <NavBar />
      <div className='conteiner-title'>
        <img src={tituloF1} className='img_title' alt="" />
        <button className='button-landing-page' onClick={navigateToHome}>Get Started</button>
      </div>
    </div>
  )
}

export default LandingPage