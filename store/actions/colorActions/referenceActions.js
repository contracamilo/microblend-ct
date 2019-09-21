import axios from 'axios';
import { GET_COLORS, LOADING, ERROR } from '../../types/colorTypes';

export const getColors = () => async (dispatch) => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
      type: GET_COLORS,
      payload: response.data
    });
  } catch (error) {
    // console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'Información de usuario no disponible.'
    });
  }
};
