import styles from './Input.module.scss';

const Input = (props) => {
  const { field, label, type, value, read } = props;

  return (
    <div className={styles.input}>
      <label htmlFor={field}>{label}</label>
      <input type={(type) ? type : 'text'} name={field} id={field} value={value} readOnly={read} />
    </div>
  )
}

export default Input;
