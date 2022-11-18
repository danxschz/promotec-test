import styles from './List.module.scss';
import { useState, useEffect } from 'react';
import User from './User/User';

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    const url = 'https://dummyapi.io/data/v1/user?page=1&limit=6';
    const response = await fetch(url, { headers: { 'app-id': '63473330c1927d386ca6a3a5' } });
    const json = await response.json();
    setUsers(json.data);
  }

  return (
    <main>
      <div className={styles.content}>
        <div className={styles.search}>
          <label htmlFor="search">Buscar por ID</label>
          <input type="search" id="search" placeholder="Id a buscar" />
          <button>Crear usuario</button>
        </div>
        <div className={styles.table}>
          <div className={styles.headings}>
            <div>Id</div>
            <div>Nombres y apellidos</div>
            <div className={styles.center}>Foto</div>
            <div className={styles.center}>Acciones</div>
          </div>
          {users.map((i) => <User user={i} key={i.id} />)}
        </div>
      </div>
    </main>
  )
}

export default List;
