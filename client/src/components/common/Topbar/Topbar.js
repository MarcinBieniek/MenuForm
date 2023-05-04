import styles from './Topbar.module.scss'

const Topbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Menu
        <span className={styles.dot}>.</span>
      </div>
      <div className={styles.user}>
        <img
        className={styles.image}
        alt="User photo"
        src={`${process.env.PUBLIC_URL}/images/gordon.png`} />
        <div className={styles.username}>
          <p>Hi, Gordon</p>
          <p>Chef</p>
        </div>
      </div>
    </header>
  )
}

export default Topbar
