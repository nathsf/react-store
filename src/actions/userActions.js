import axios from "axios";
import {
  GET_CART,
  SET_LOADING,
} from "./types";

export const getCart = () => async dispatch => {
  try {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/carts/"
      );
      dispatch({ type: GET_CART, payload: res.data });
    } catch (err) {
      alert("get cart got error", err);
    }
  } catch (err) {
    alert("get cart got error", err);
  }
};

const setLoading = () => async dispatch => {
  dispatch({ type: SET_LOADING });
};

