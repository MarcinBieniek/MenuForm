import { API_URL } from "../config";
import { addDish } from "./dishesRedux";
import { updateStatus, clearStatus } from "./statusRedux";

export const addDishAsync = (newDish) => {

  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDish)
    };

    dispatch(clearStatus())
    dispatch(updateStatus('loading'));
    fetch(`${API_URL}`, options)
      .then(res => {
        if (res.status === 200) {
          dispatch(clearStatus())
          dispatch(addDish(newDish));
          dispatch(updateStatus('success'));
          setTimeout(() => {
            dispatch(clearStatus());
          }, 2000)
        } else if (res.status === 400) {
          dispatch(clearStatus())
          dispatch(updateStatus('error'));
        } else {
          dispatch(clearStatus())
          dispatch(updateStatus('error'));
        }
      })
      .catch(err => {
        dispatch(clearStatus())
        dispatch(updateStatus('error'));
      });
  };
};
