import { GET_COLORS, LOADING, ERROR } from '../../types/colorTypes';

const INITIAL_STATE = {
  colors: [],
  loading: false,
  error: ''
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COLORS:
      return {
        ...state,
        colors: action.payload,
        loading: false,
        error: ''
      };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default: return state;
  }
};
