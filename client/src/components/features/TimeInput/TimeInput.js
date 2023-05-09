import styles from './TimeInput.module.scss'

const TimeInput = ({ time, onTimeChange }) => {
  return (
    <div className={styles.field}>
      <label htmlFor="time">
        Preparation time
      </label>
      <input
        type="time"
        id="time"
        step="1"
        pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
        value={time}
        onChange={onTimeChange}
        required 
      />
    </div>  
  )
}

export default TimeInput
