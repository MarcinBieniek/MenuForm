import styles from './MenuForm.module.scss';
import {useState} from 'react';
import { options } from '../../../simpleData/data';
import Button from '../../common/Button/Button';

const MenuForm = () => {

  const [name, setName] = useState('');
  const [dishType, setDishType] = useState('')
  const [time, setTime] = useState('00:10:00');
  const [slices, setSlices] = useState('4')
  const [diameter, setDiameter] = useState('15')
  const [spiciness, setSpiciness] = useState('5')
  const [breadSlices, setBreadSlices] = useState('1')

  console.log('name:', name)
  console.log('dishType:', dishType)
  console.log('time:', time)
  console.log('slices:', slices)
  console.log('diameter:', diameter)
  console.log('spiciness:', spiciness)
  console.log('breadSlices:', breadSlices)

  const handleTime = (event) => {
    setTime('')
    setTime(event.target.value);
  }

  return (
    <section className={styles.container}>
      <h1>Step 1</h1>
      <p>Choose fancy name and select type of dish</p>
      <form className={styles.form}>
        
        <div className={styles.field}>
          <label htmlFor="name">Add dish name:</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Type here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
            name="name_input"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="dishTtype">Select dish</label>
          <select 
            id="dishType" 
            value={dishType} 
            onChange={(e) => setDishType(e.target.value)}
            required
            name="dish_type_input"
          >
            <option disabled value="">
              Wybierz danie
            </option>
            {options.map((option, id) => (
              <option 
                value={option.value} 
                key={id}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {dishType === 'pizza' && (
          <>
            <h1>Step 2</h1>
            <p>Add details</p>
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
                onChange={handleTime}
                required 
                name="time_input"
              />
            </div>  
            
            <div className={styles.field}>
              <label htmlFor="slices">Add number of slices</label>
              <input 
                type="number" 
                id="slices" 
                min="1"
                max="8"
                placeholder="Type here..."
                value={slices}
                onChange={(e) => setSlices(e.target.value)}
                required 
                name="slices_input"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="diameter">Set diameter</label>
              <input 
                type="number" 
                id="diameter" 
                step="0.1"
                min="15"
                max="45"
                value={diameter}
                onChange={(e) => setDiameter(e.target.value)}
                required 
                name="diameter_input"
              />
            </div>
          </>
        )}

        {dishType === 'soup' && (
          <>
            <h1>Step 2</h1>
            <p>Add details</p>
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
                onChange={handleTime}
                name="time_input"
                required 
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="spiciness">
                Choose spiciness scale from 1 to 10:
              </label>
              <input
                type="range"
                id="spiciness"
                min="1"
                max="10"
                value={spiciness}
                onChange={(e) => setSpiciness(parseInt(e.target.value))}
                name="spiciness_input"
                required
              />
              {spiciness}
            </div>
          </>
        )}

        {dishType === 'sandwich' && (
          <>
            <h1>Step 2</h1>
            <p>Add details</p>
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
                onChange={handleTime}
                required 
                name="time_input"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="bread-slices">Set diameter</label>
              <input 
                type="number" 
                id="bread-slices" 
                step="1"
                min="1"
                max="10"
                value={breadSlices}
                onChange={(e) => setBreadSlices(e.target.value)}
                required 
                name="bread_slices_input"
              />
            </div>
          </>
        )}

      </form>
      <Button label="Submit form" />
    </section>
  )
}

export default MenuForm
