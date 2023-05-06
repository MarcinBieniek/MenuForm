import styles from './Home.module.scss';
import Button from '../../common/Button/Button';
import Topbar from '../../common/Topbar/Topbar';
import Hero from '../../common/Hero/Hero';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <Topbar />
        <div className={styles.greetings}>
          <h1>Hi, Gordon!</h1>
          <p>Welcome to our new menu app.</p>
          <p>Start to create dishesh!</p>
          <Button 
            label={'+ Add new dish'} 
            link={'/form'}
          />
        </div>
      </div>
      <div className={styles.right}>
        <Hero />
      </div>
    </div>
  )
}

export default Home
