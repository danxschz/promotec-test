import styles from './Input.module.scss';

const Input = (props) => {
  const { field, label, type, value, defaultValue, read, select, options } = props;

  if (select) return (
    <div className={styles.input}>
      <label htmlFor={field}>{label}</label>
      <select name={field} id={field} value={value} defaultValue={defaultValue}>
        {options.map((i) => <option value={i} key={i}>{i}</option>)}
      </select>
    </div>
  )

  else return (
    <div className={styles.input}>
      <label htmlFor={field}>{label}</label>
      <input type={(type) ? type : 'text'} name={field} id={field} value={value} defaultValue={defaultValue} readOnly={read} required minLength={(type === 'tel' ? 5 : null)} />
    </div>
  )
}

export default Input;
