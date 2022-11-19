import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { type, text, to, onClick, red } = props;

  const style = (red) ? { background: '#d11a2a' } : null;

  if (to) return (
    <Link to={to} className={styles.button} onClick={onClick} style={style}>{text}</Link>
  )

  else return (
    <button type={type} className={styles.button} onClick={onClick} style={style}>{text}</button>
  )
}

export default Button;
