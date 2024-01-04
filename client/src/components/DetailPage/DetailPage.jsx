import './DetailPage.css';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailPage = () => {
  const defaultPhoto = 'https://cdn.motor1.com/images/mgl/O487B/s1/nuevo-logo-de-f1-2018.webp';

  const params = useParams();
  const [driverDetail, SetDriverDetail] = useState('')

  useEffect(() => {
    const detailId = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/drivers/${params.id}`)
        if (data.name) {
          SetDriverDetail(data)
        }
      } catch (error) {
        window.alert('No hay personajes con ese ID');
      }
    }
    detailId()
  }, [params.id])


  return (
    <div>
      <h1>DetailPage</h1>
      {typeof driverDetail.name === 'object' ? (
        <div>
          <img src={driverDetail.image.url} alt={`imagen de ${driverDetail.name.forename}`} />
          <p>ID: {params.id}</p>
          <p>Nombre: {driverDetail.name.forename}</p>
          <p>Apellido: {driverDetail.name.surname}</p>
          <p>Team: {driverDetail.teams}</p>
          <p>Nacionalidad: {driverDetail.nationality}</p>
          <p>Fecha de nacimiento: {driverDetail.dob}</p>
          <p>Descripcion: {driverDetail.description || 'Sin descripcion'}</p>
        </div>
      ) : (
        <div>
          <img src={driverDetail.image || defaultPhoto} alt={`imagen de ${driverDetail.name}`} />
          <p>ID:{params.id}</p>
          <p>Nombre:{driverDetail.name}</p>
          <p>Apellido:{driverDetail.lastName}</p>
          <p>Nacionalidad:{driverDetail.nationality}</p>
          <p>Fecha de nacimiento:{driverDetail.dob}</p>
          <p>Descripcion:{driverDetail.description}</p>
        </div>
      )}
    </div>
  );
}

export default DetailPage