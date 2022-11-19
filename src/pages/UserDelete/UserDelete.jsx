import styles from './UserDelete.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';

const UserDelete = () => {
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

  const { title, firstName, lastName } = user || {};

  const navigate = useNavigate();

  const deleteUser = async () => {
    const url = `https://dummyapi.io/data/v1/user/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'app-id': '63473330c1927d386ca6a3a5' }
    })
    const json = await response.json();
    alert(`Usuario ${json.id} eliminado`);
    window.location.href = '/';
  }

  if (title) return (
    <main>
      <div className={styles.content}>
        <h2>Eliminar Usuario</h2>
        <p>{`¿Estás seguro que deseas eliminar el usuario ${firstName} ${lastName}? `}<strong>{`(Id: ${id})`}</strong></p>
        <div className={styles.buttons}>
          <Button text="Eliminar" onClick={deleteUser} red />
          <Button text="Regresar a lista" onClick={() => navigate(-1)} />
        </div>
      </div>
    </main>
  )

  else return null
}

export default UserDelete;
