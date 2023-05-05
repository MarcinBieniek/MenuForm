import styles from './Home.module.scss';
import Hero from '../../common/Hero/Hero';
import Button from '../../common/Button/Button';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Button 
        label={'+ Add new dish'} 
        link={'/form'}
      />
    </div>
  )
}

export default Home
