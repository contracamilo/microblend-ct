import axios from 'axios';
import { GET_COLORS, LOADING, ERROR } from '../../types/colorTypes';
import { ServiceUrl, CompanyKey } from '../../api';


export const getColors = (color) => async (dispatch) => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await axios.get(`${ServiceUrl}/service/color/bestmatches/${color}/?X-COMPANY-KEY=${CompanyKey}`);
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
