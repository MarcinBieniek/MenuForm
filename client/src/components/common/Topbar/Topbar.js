import { Link } from 'react-router-dom'
import styles from './Topbar.module.scss'

const Topbar = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>
          Menu
          <span className={styles.dot}>.</span>
        </div>
      </Link>
      <div className={styles.user}>
        <img
          className={styles.image}
          alt="User photo"
          src={`${process.env.PUBLIC_URL}/images/gordon.png`} 
        />
        <div className={styles.username}>
          <p>Gordon R.</p>
          <p>Chef</p>
        </div>
      </div>
    </header>
  )
}

export default Topbar
