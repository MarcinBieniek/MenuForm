// actions
const createActionName = actionName => `app/dishes/${actionName}`;
const ADD_DISH = createActionName('ADD_DISH');

// action creators
export const addDish = payload => ({ payload, type: ADD_DISH });

const dishesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_DISH: 
      return [...statePart, action.payload]   
    default:
      return statePart;
  };
};

export default dishesReducer;