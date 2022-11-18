import styles from './User.module.scss';

const User = (props) => {
  const { id, title, firstName, lastName, picture } = props.user;

  const titles = {
    mr: 'sr.',
    mrs: 'sra.',
    ms: 'srta.',
    miss: 'srta.',
  }

  const name = `${titles[title]} ${firstName} ${lastName}`;

  return (
    <article>
      <strong>{id}</strong>
      <p>{name}</p>
      <img src={picture} alt={`Foto de ${name}`} className={styles.center} />
      <div className={`${styles.actions} ${styles.center}`}>
        <i className="fa-regular fa-trash-can"></i>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-eye"></i>
      </div>
    </article>
  )
}

export default User;
