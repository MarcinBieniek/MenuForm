import styles from './Form.module.scss';
import MenuForm from '../../features/MenuForm/MenuForm'

const Form = () => {
  return (
    <section className={styles.form}>
      <MenuForm />
    </section>
  )
}

export default Form
