import { useState, useEffect } from 'react';
import './FormPage.css';
import validation from './validationForm/validation.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeams } from '../../Redux/actions';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx';

const FormPage = () => {
  const navigate = useNavigate()

  const [error, setError] = useState({})
  const [driverData, setDriverData] = useState({
    name: "",
    lastName: "",
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teamIds: []
  })

  const handleChange = (event) => {
    const { name, value, type, options } = event.target;
    if (options) {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setDriverData({
        ...driverData,
        [name]: type === 'select-multiple' ? selectedOptions.map(Number) : value,
      });
    } else {
      setDriverData({
        ...driverData,
        [name]: type === 'select-multiple' ? [] : value,
      });
    }

    setError({
      ...error,
      [name]: validation(name, value),
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validation(driverData);
    setError(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:3001/drivers', driverData)

      setDriverData({
        name: "",
        lastName: "",
        description: "",
        image: "",
        nationality: "",
        dob: ""
      })


      navigate('/home')

      window.alert(`Respuesta del servidor: ${data.message}`);



    } catch (data) {
      window.alert(`Error al enviar la solicitud: ${data.message}`);
    }

  }

  const dispatch = useDispatch();
  const teamsReducer = useSelector((state) => state.allTeams);

  useEffect(() => {
    dispatch(getAllTeams());
  }, [dispatch]);

  const todosCamposLlenos = Object.values(driverData).every((valor) => valor !== '')

  const backToHome = () => {
    navigate('/home')
  }

  return (
    <div className='conteiner-form'>
      <div className="navbar-nav">
        <NavBar />
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <div className="esc">
          <button onClick={backToHome} className='button-esc'>X</button>
        </div>
        <h2 className="title-create-driver">Create Driver</h2>
        {/* Nombre y Apellido */}
        <div className="name-lastName">
          <div className='FormGroup'>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={driverData.name}
              onChange={handleChange}
              autocomplete="off"
              className={error.name && 'warning'}
            />
            <p className='danger'>{error.name}</p>
          </div>
          <div className='FormGroup'>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={driverData.lastName}
              onChange={handleChange}
              autocomplete="off"
              className={error.lastName && 'warning'}
            />
            <p className='danger'>{error.lastName}</p>
          </div>
        </div>
        {/* Description AND URL */}
        <div className="description-url">
          <div className='textArea'>
            <label htmlFor="description">Description:</label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={driverData.description}
              onChange={handleChange}
              autocomplete="off"
              className={error.description && 'warning'}
            />
          </div>
          <p className='danger'>{error.description}</p>
          <div className='FormGroup'>
            <label htmlFor="image">Image (URL):</label>
            <input
              type="text"
              id="image"
              name="image"
              value={driverData.image}
              autocomplete="off"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Nationality AND birthdate */}
        <div className="nationality-birthdate">
          <div className='FormGroup'>
            <label htmlFor="nationality">Nationality:</label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={driverData.nationality}
              onChange={handleChange}
              autocomplete="off"
              className={error.nationality && 'warning'}
            />
            <p className='danger'>{error.nationality}</p>
          </div>
          <div className='FormGroup'>
            <label htmlFor="dob">Date Of Birth:</label>
            <input
              type="text"
              id="dob"
              name="dob"
              value={driverData.dob}
              onChange={handleChange}
              autocomplete="off"
              className={error.dob && 'warning'}
            />
            <p className='danger'>{error.dob}</p>
          </div>
        </div>
        {/* Teams AND selected */}
        <div className="teams-selected">
          <div className='selectGroup'>
            <label htmlFor="cars">Teams:</label>
            <select
              id="team"
              name="teamIds"
              value={driverData.teamIds}
              onChange={handleChange}
              multiple
              className={error.teamIds && 'warning'}>
              <option className='option-team' value="" disabled>
                Seleccione un equipo
              </option>
              {teamsReducer.map((team) => (
                <option className='option-team' key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
            <div className="selectedAndLine">
              <label>Teams selected:</label>
              <div className='selected'>
                {driverData.teamIds.map(select => {
                  const selected = teamsReducer.find(element => element.id === select);
                  if (selected) {
                    return <span className='span-selected' key={select}>{selected.name}</span>;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        <button className='form-submit' type="submit" disabled={!todosCamposLlenos}>Create</button>
      </form>
    </div>
  )
}

export default FormPage