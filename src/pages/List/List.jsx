import styles from './List.module.scss';
import { useState, useEffect } from 'react';
import User from './User/User';

const List = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    getUsers(1);
  }, [])

  const getUsers = async (page) => {
    const url = `https://dummyapi.io/data/v1/user?page=${page}&limit=10`;
    const response = await fetch(url, { headers: { 'app-id': '63473330c1927d386ca6a3a5' } });
    const json = await response.json();
    setUsers(json);
  }

  const pagesNumber = (users.total) ? Math.ceil(users.total / users.limit) : null;
  const pages = [];
  for (let i = 1; i <= pagesNumber; i++) pages.push(i);

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
          {(users.data) ? users.data.map((i) => <User user={i} key={i.id} />): null}
        </div>
        <div className={styles.pages}>
          <button className={styles.page}>{`<`}</button>
          {pages.map((i) => <a href="/a" className={styles.page}>{i}</a>)}
          <button className={styles.page} onClick={() => getUsers(users.page + 1)}>{`>`}</button>
        </div>
      </div>
    </main>
  )
}

export default List;
