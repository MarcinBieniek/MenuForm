import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <img
          className={styles.image}
          alt="User photo"
          src={`${process.env.PUBLIC_URL}/images/cook.png`} 
        />
        <div className={styles.text}>
          <h1>Hello Gordon</h1>
          <p>Welcome to your personal <span>menu app.</span></p>
          <p>Start to create <span>new</span> dishes!</p>
        </div>
      </div>  
    </section>
  )
}

export default Hero
