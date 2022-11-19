import styles from './User.module.scss';
import titles from '../../../data/translations';
import { Link } from 'react-router-dom';

const User = (props) => {
  const { id, title, firstName, lastName, picture } = props.user;

  const name = titles[title] ? `${titles[title]} ${firstName} ${lastName}` : `${firstName} ${lastName}`;

  return (
    <article>
      <strong>{id}</strong>
      <p>{name}</p>
      <img src={picture} alt={`Foto de ${firstName} ${lastName}`} className={styles.center} />
      <div className={`${styles.actions} ${styles.center}`}>
        <Link to={`/user/${id}/delete`} aria-label="Eliminar usuario"><i className="fa-regular fa-trash-can"></i></Link>
        <Link to={`/user/${id}/update`}><i className="fa-solid fa-pen-to-square"></i></Link>
        <Link to={`/user/${id}`} aria-label="Ver detalle de usuario"><i className="fa-solid fa-eye"></i></Link>
      </div>
    </article>
  )
}

export default User;
