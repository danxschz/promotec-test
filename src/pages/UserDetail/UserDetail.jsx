import styles from './UserDetail.module.scss';
import titles, { genders } from '../../data/translations';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useDocTitle from '../../hooks/useDocTitle';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line

  const getUser = async () => {
    const url = `https://dummyapi.io/data/v1/user/${id}`;
    const response = await fetch(url, { headers: { 'app-id': '63473330c1927d386ca6a3a5' } });
    const json = await response.json();
    setUser(json);
  }

  const { title, firstName, lastName, picture, gender, email, dateOfBirth, phone } = user || {};

  const navigate = useNavigate();

  useDocTitle((title) ? `${firstName} ${lastName}` : 'Cargando');

  if (user.firstName) return (
    <main>
      <div className={styles.content}>
        <h2>Detalle del Usuario</h2>
        <form>
          <Input field="id" label="Id" value={id} read />
          <Input field="title" label="Título" value={titles[title]} read />
          <Input field="firstName" label="Nombres" value={firstName} read />
          <Input field="lastName" label="Apellidos" value={lastName} read />
          <Input field="picture" label="Imagen" value={picture} read />
          <Input field="gender" label="Género" value={genders[gender]} read />
          <Input field="email" label="Correo electrónico" value={email} read type="email" />
          <Input field="dateOfBirth" label="Fecha de nacimiento" value={new Date(dateOfBirth).toLocaleDateString("es-LA")} read />
          <Input field="phone" label="Teléfono" value={phone} read type="tel" />
        </form>
        <Button text="Regresar a lista" onClick={() => navigate(-1)} />
      </div>
    </main>
  )

  else return null;
}

export default UserDetail;
