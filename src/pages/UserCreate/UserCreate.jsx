import styles from './UserCreate.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import useDocTitle from '../../hooks/useDocTitle';

const createUser = async (e) => {
  e.preventDefault();

  const body = JSON.stringify({
    title: document.querySelector('#title').value,
    firstName: document.querySelector('#firstName').value,
    lastName: document.querySelector('#lastName').value,
    picture: document.querySelector('#picture').value,
    gender: document.querySelector('#gender').value,
    email: document.querySelector('#email').value,
    dateOfBirth: document.querySelector('#dateOfBirth').value,
    phone: document.querySelector('#phone').value,
  });

  const url = 'https://dummyapi.io/data/v1/user/create';

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'app-id': '63473330c1927d386ca6a3a5', 'Content-Type': 'application/json' },
    body
  })

  const json = await response.json();
  if (json.id) {
    alert(`Usuario ${json.id} creado`);
    window.location.href = '/';

  } else {
    const message = Object.entries(json.data).map(([key, value]) => `${key.charAt(0).toUpperCase()}${key.slice(1)} - ${value}`);
    alert(`Error: ${message}`);
  }
}

const UserCreate = () => {
  useDocTitle('Crear Usuario');

  return (
    <main>
      <div className={styles.content}>
        <h2>Crear Usuario</h2>
        <form onSubmit={createUser}>
          <Input field="title" label="Título" select options={['mr', 'ms', 'mrs', 'miss', 'dr']} />
          <Input field="firstName" label="Nombres" />
          <Input field="lastName" label="Apellidos" />
          <Input field="picture" label="Imagen" />
          <Input field="gender" label="Género" select options={['male', 'female', 'other']} />
          <Input field="email" label="Correo electrónico" type="email" />
          <Input field="dateOfBirth" label="Fecha de nacimiento" type="date" />
          <Input field="phone" label="Teléfono" type="tel" />
          <div className={styles.buttons}>
            <Button text="Guardar" />
            <Button text="Cancelar" to="/" />
          </div>
        </form>
      </div>
    </main>
  )
}

export default UserCreate;
