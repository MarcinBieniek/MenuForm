import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {

  return (
    <Link to={props.link}>
      <button className={styles.button}>
        {props.label}
      </button>
    </Link>
  )
}

export default Button
