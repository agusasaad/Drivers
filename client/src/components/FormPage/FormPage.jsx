import { useState, useEffect } from 'react';
import './FormPage.css';
import validation from './validationForm/validation.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeams } from '../../Redux/actions';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const navigate = useNavigate()

  const [error, SetError] = useState({})
  const [driverData, setDriverData] = useState({
    name: "",
    lastName: "",
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teamId: ""
  })

  const handleChange = (event) => {
    setDriverData({
      ...driverData,
      [event.target.name]: event.target.value
    })
    SetError(validation({
      ...driverData,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validation(driverData);
    SetError(validationErrors);

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



    } catch (error) {
      console.error('Error al enviar la solicitud:', error.message);
    }

  }

  const dispatch = useDispatch();
  const teamsReducer = useSelector((state) => state.allTeams);

  useEffect(() => {
    dispatch(getAllTeams());
  }, [dispatch]);



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={driverData.name}
          onChange={handleChange}
          className={error.name && 'warning'}
        />
      </div>
      <p className='danger'>{error.name}</p>
      <div>
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={driverData.lastName}
          onChange={handleChange}
          className={error.lastName && 'warning'}
        />
      </div>
      <p className='danger'>{error.lastName}</p>
      <div>
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={driverData.description}
          onChange={handleChange}
          className={error.description && 'warning'}
        />
      </div>
      <p className='danger'>{error.description}</p>
      <div>
        <label htmlFor="image">Imagen (URL):</label>
        <input
          type="text"
          id="image"
          name="image"
          value={driverData.image}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="nationality">Nacionalidad:</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={driverData.nationality}
          onChange={handleChange}
          className={error.nationality && 'warning'}
        />
      </div>
      <p className='danger'>{error.nationality}</p>
      <div>
        <label htmlFor="dob">Fecha de nacimiento:</label>
        <input
          type="text"
          id="dob"
          name="dob"
          value={driverData.dob}
          onChange={handleChange}
          className={error.dob && 'warning'}
        />
      </div>
      <p className='danger'>{error.dob}</p>
      <div>
        <label htmlFor="cars">Teams:</label>
        <select
          id="cars"
          name="teamId"
          value={driverData.teamId}
          onChange={handleChange}
        >
          <option value="" disabled>
            Seleccione un equipo
          </option>
          {teamsReducer.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormPage