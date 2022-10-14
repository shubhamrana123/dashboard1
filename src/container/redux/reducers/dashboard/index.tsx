import { DECREASE_COUNTER_1, DECREASE_COUNTER_2, INCREASE_COUNTER_1, INCREASE_COUNTER_2 } from "../../action-types";

const initialState = {
  counter1: 0,
  counter2: 0,
};

export const counterReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case INCREASE_COUNTER_1: {
      return {
        ...state,
        counter1: state.counter1 + 1,
      };
    }
    case DECREASE_COUNTER_1: {
      return {
        ...state,
        counter1: state.counter1 - 1,
      };
    }
    case INCREASE_COUNTER_2: {
      return {
        ...state,
        counter2: state.counter2 + 1,
      };
    }
    case DECREASE_COUNTER_2: {
        return {
          ...state,
          counter2: state.counter2 - 1,
        };
      }
    default : {
        return state
    }  
  }
};
