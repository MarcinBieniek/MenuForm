import styles from './Form.module.scss';
import MenuForm from '../../features/MenuForm/MenuForm'
import Topbar from '../../common/Topbar/Topbar';
import Hero from '../../common/Hero/Hero';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <main className={styles.form}>
      <section className={styles.left}>
        <Link to="/">
          <ArrowCircleLeftIcon className={styles.icon}/>
        </Link>
        <MenuForm />
      </section>
      <section className={styles.right}>
        <Hero image={'bg4.jpg'} quote={'The way you make an omelet reveals your character.'} author={'Anthony Bourdain'} />
      </section>
    </main>
  )
}

export default Form
