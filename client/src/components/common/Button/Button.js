import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {

  return (
    <>
      {props.link ? (
        <Link to={props.link}>
          <button className={styles.button}>
            {props.label}
          </button>
        </Link>
      ) : (
        <button className={styles.button} type={props.type}>
          {props.label}
        </button>
      )}
    </>
  )
}

export default Button
