import { FETCH_USD_FOREX } from '../action-types';

const initialState = {
  data: [],
};

export const forexReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USD_FOREX:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}