import { GET_COLORS, LOADING, ERROR } from '../../types/colorTypes';

const INITIAL_STATE = {
  usuarios: [],
  cargando: false,
  error: ''
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COLORS:
      return {
        ...state,
        usuarios: action.payload,
        cargando: false,
        error: ''
      };

    case LOADING:
      return { ...state, cargando: true };

    case ERROR:
      return { ...state, error: action.payload, cargando: false };

    default: return state;
  }
};
