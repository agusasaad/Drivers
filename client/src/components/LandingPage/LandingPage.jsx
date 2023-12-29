import './LandingPage.css';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/home');
  }
  return (
    <div>
        <h1>Landing Page</h1>
        <button onClick={navigateToHome}>Home</button>
    </div>
  )
}

export default LandingPage