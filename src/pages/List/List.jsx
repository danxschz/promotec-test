import styles from './List.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import User from './User/User';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const List = () => {
  const { page } = useParams();
  const [users, setUsers] = useState({});

  useEffect(() => {
    const pageNumber = (page) ? page : 1;
    getUsers(pageNumber);
  }, [page]) // eslint-disable-line

  const getUsers = async (page) => {
    const url = `https://dummyapi.io/data/v1/user?page=${page - 1}&limit=10`;
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
          <Button text="Crear usuario" />
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
          <Link to={`/${(page > 1) ? page - 1 : page}`} className={styles.page}>{`<`}</Link>
          {pages.map((i) => <Link to={`/${i}`} className={styles.page} key={i}>{i}</Link>)}
          <Link to={`/${(page < 10) ? +page + 1 : page}`} className={styles.page}>{`>`}</Link>
        </div>
      </div>
    </main>
  )
}

export default List;
