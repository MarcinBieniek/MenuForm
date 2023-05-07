import styles from './Hero.module.scss'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Hero = (props) => {
  return (
    <div className={styles.hero}>
      <img
        className={styles.image}
        alt="Background photo"
        src={`${process.env.PUBLIC_URL}/images/${props.image}`} 
      />
      <div className={styles.quote}>
        <FormatQuoteIcon className={styles.icon}/>
        <span>{props.quote}</span>
        <span>{props.author}</span>
      </div>
    </div>
  )
}

export default Hero
