// selectors
export const getActualStatus = ({status}) => status;

// actions 
const createActionName = actionName => `app/status/${actionName}`;
const UPDATE_STATUS = createActionName('UPDATE_STATUS');
const CLEAR_STATUS = createActionName('CLEAR_STATUS');

// action creators
export const updateStatus = payload => ({ payload, type: UPDATE_STATUS });
export const clearStatus = () => ({ type: CLEAR_STATUS });

const statusReducer = (statePart = '', action = {}) => {
  switch (action.type) {
    case UPDATE_STATUS:
      return [...statePart, action.payload];
    case CLEAR_STATUS:
      return '';
    default:
      return statePart;
  }
}

export default statusReducer;