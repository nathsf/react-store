import axios from "axios";
import {
  GET_ITEMS,
  SET_LOADING,
  GET_ITEM,
} from "./types";

export const getItem = id => async dispatch => {
  try {
    setLoading();
    const res = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );
    dispatch({
      type: GET_ITEM,
      payload: res.data
    });
  } catch (err) {
    alert(err);
  }
};

export const getItems = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get(
      "https://fakestoreapi.com/products"
    );
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  } catch (err) {
    alert(err);
  }
};

//set loading to true
const setLoading = () => {
  // console.log("set loading to true");
  return {
    type: SET_LOADING
  };
};

export const searchItem = itemWanted => async dispatch => {
  //event.preventDefault();
  setLoading();
};
