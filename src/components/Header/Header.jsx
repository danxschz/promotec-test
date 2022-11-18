import styles from './Header.module.scss';
import imgWEBP from '../../assets/img/user.webp';
import imgPNG from '../../assets/img/user.png';
import icon from '../../assets/grid-icon.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Módulo de Consulta y Registro de Usuarios al Sistema</h1>
        <div className={styles.user}>
          <img src={icon} alt="Grid" className={styles.white} />
          <picture>
            <source srcset={imgWEBP} />
            <img src={imgPNG} alt="User Avatar" />
          </picture>
        </div>
      </div>
    </header>
  )
}

export default Header;
