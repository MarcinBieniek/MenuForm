import styles from './Hero.module.scss'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img
        className={styles.image}
        alt="Background photo"
        src={`${process.env.PUBLIC_URL}/images/bg2.jpg`} 
      />
      <div className={styles.quote}>
        <FormatQuoteIcon className={styles.icon}/>
        <span>People who love to eat are always the best people.</span>
        <span>Julia Child</span>
      </div>
    </div>
  )
}

export default Hero
