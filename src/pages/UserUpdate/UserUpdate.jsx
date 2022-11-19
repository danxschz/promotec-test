import styles from './UserUpdate.module.scss';
import useDocTitle from '../../hooks/useDocTitle';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const UserUpdate = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line

  useEffect(() => {
    console.log(user);
  }, [user]); // eslint-disable-line

  const getUser = async () => {
    const url = `https://dummyapi.io/data/v1/user/${id}`;
    const response = await fetch(url, { headers: { 'app-id': '63473330c1927d386ca6a3a5' } });
    const json = await response.json();
    setUser(json);
  }

  const updateUser = async (e) => {
    e.preventDefault();
  
    const body = JSON.stringify({
      id,
      title: document.querySelector('#title').value,
      firstName: document.querySelector('#firstName').value,
      lastName: document.querySelector('#lastName').value,
      picture: document.querySelector('#picture').value,
      gender: document.querySelector('#gender').value,
      email: document.querySelector('#email').value,
      dateOfBirth: document.querySelector('#dateOfBirth').value,
      phone: document.querySelector('#phone').value,
      registerDate: user.registerDate,
      updatedDate: user.updatedDate,
    });
  
    const url = `https://dummyapi.io/data/v1/user/${id}`;
  
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'app-id': '63473330c1927d386ca6a3a5', 'Content-Type': 'application/json' },
      body
    })
  
    const json = await response.json();
    if (json.id) {
      alert(`Usuario ${json.id} actualizado`);
      window.location.href = '/';
  
    } else {
      const message = Object.entries(json.data).map(([key, value]) => `${key.charAt(0).toUpperCase()}${key.slice(1)} - ${value}`);
      alert(`Error: ${message}`);
    }
  }

  useDocTitle('Actualizar Usuario');

  const { title, firstName, lastName, picture, gender, email, dateOfBirth, phone } = user || {};

  if (title) return (
    <main>
      <div className={styles.content}>
        <h2>Actualizar Usuario</h2>
        <form onSubmit={updateUser}>
          <Input field="title" label="Título" select options={['mr', 'ms', 'mrs', 'miss', 'dr']} defaultValue={title} />
          <Input field="firstName" label="Nombres" defaultValue={firstName} />
          <Input field="lastName" label="Apellidos" defaultValue={lastName} />
          <Input field="picture" label="Imagen" defaultValue={picture} />
          <Input field="gender" label="Género" select options={['male', 'female', 'other']} defaultValue={gender} />
          <Input field="email" label="Correo electrónico" type="email" defaultValue={email} />
          <Input field="dateOfBirth" label="Fecha de nacimiento" type="date" defaultValue={dateOfBirth.split('T')[0]} />
          <Input field="phone" label="Teléfono" type="tel" defaultValue={phone} />
          <div className={styles.buttons}>
            <Button text="Guardar" />
            <Button text="Cancelar" to="/" />
          </div>
        </form>
      </div>
    </main>
  )

  else return <main></main>
}

export default UserUpdate;
