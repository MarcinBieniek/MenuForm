import styles from './MenuForm.module.scss';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { options } from '../../../simpleData/data';
import Button from '../../common/Button/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { addDishAsync } from '../../../redux/thunks';
import { getActualStatus } from '../../../redux/statusRedux';

import {  } from 'react-redux';

const MenuForm = () => {

  const status = useSelector(getActualStatus)
  console.log('status is', status)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [dishType, setDishType] = useState('');
  const [time, setTime] = useState('00:10:00');
  const [slices, setSlices] = useState('4');
  const [diameter, setDiameter] = useState('15');
  const [spiciness, setSpiciness] = useState('5');
  const [breadSlices, setBreadSlices] = useState('1');

  const handleTime = (event) => {
    setTime('')
    setTime(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    const newDish = {
      name,
      type: dishType,
      preparation_time: time,
      ...(dishType === 'pizza' && { no_of_slices: slices, diameter }),
      ...(dishType === 'soup' && { spiciness_scale: spiciness }),
      ...(dishType === 'sandwich' && { slices_of_bread: breadSlices }),
    };

    console.log(newDish)
    dispatch(addDishAsync(newDish));
  }

  useEffect(() => {
      if (status == 'success') {
        setTimeout(() => {
          navigate('/')
        }, 1000);
      }
  }, [status]);

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>

        <div className={styles.field}>
          <label htmlFor="name">Add dish name:</label>
          
          <input 
            type="text" 
            id="name" 
            placeholder="Type here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="dishTtype">Select dish</label>
          <select 
            id="dishType" 
            value={dishType} 
            onChange={(e) => setDishType(e.target.value)}
            required
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
              />
            </div>
          </>
        )}

        {dishType === 'soup' && (
          <>
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
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="spiciness">
                Choose spiciness from 1 to 10:
              </label>
              <input
                type="range"
                id="spiciness"
                min="1"
                max="10"
                value={spiciness}
                onChange={(e) => setSpiciness(parseInt(e.target.value))}
                required
              />
              Actual value: {spiciness}
            </div>
          </>
        )}

        {dishType === 'sandwich' && (
          <>
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
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="bread-slices">Slices of bread</label>
              <input 
                type="number" 
                id="bread-slices" 
                step="1"
                min="1"
                max="10"
                value={breadSlices}
                onChange={(e) => setBreadSlices(e.target.value)}
                required 
              />
            </div>
          </>
        )}

        <Button label="Submit form" type="submit"/>

        <div className={styles.alert}>
          { status == "success" &&
            <p className={styles.success}>Success! You'll be redirected to main page.</p>
          }
          { status == "error" &&
            <p className={styles.failure}>Something went wrong. Try again.</p>
          }
        </div>

        { status == "loading" &&
          <Box className={styles.spinner}>
            <CircularProgress />
          </Box>
        }

      </form>
      
    </section>
  )
}

export default MenuForm