import styles from './Home.module.scss';
import Button from '../../common/Button/Button';
import Topbar from '../../common/Topbar/Topbar';
import Hero from '../../common/Hero/Hero';

const Home = () => {
  return (
    <main className={styles.home}>
      <section className={styles.left}>
        <Topbar />
        <div className={styles.greetings}>
          <h1>Hi, Gordon!</h1>
          <p>Welcome to our new menu app.</p>
          <p>Start to create dishesh!</p>
          <Button 
            label={'+ Add new dish'} 
            link={'/form'}
          />
          <a href="https://marcindev.netlify.app/" className={styles.link}>Marcin Bieniek @ 2023</a>
        </div>
      </section>
      <section className={styles.right}>
        <Hero 
          image={'bg-2.jpg'} 
          quote={'People who love to eat are always the best people'} 
          author={'Julia Child'} 
        />
      </section>
    </main>
  )
}

export default Home
