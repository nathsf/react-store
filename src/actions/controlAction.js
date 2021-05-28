import {
    SET_PRICE_ONE,
    SET_PRICE_TWO,
    SET_PRICE_THREE,
    CHANGE_FEATURED,
    CHANGE_ON_SALE,
    SET_PRICE_NULL
} from "./types";

//action functions go here.
export const setPriceNull = () => dispatch => {
    dispatch({
        type: SET_PRICE_NULL
    });
}

export const setPriceOne = () => dispatch => {
    ///whatever
    //console.log("button clicked.")
    dispatch({
        type: SET_PRICE_ONE,
        payload: [0, 100]
    });
}

export const setPriceTwo = () => dispatch => {
    ///whatever
    dispatch({
        type: SET_PRICE_TWO,
        payload: [100, 1000]
    });
}

export const setPriceThree = () => dispatch => {
    ///whatever
    dispatch({
        type: SET_PRICE_THREE,
        payload: [1000, 3000]
    });
}

export const changeFeatured = () => dispatch => {
    ///whatever
    dispatch({
        type: CHANGE_FEATURED
    });
}
export const changeOnSale = () => dispatch => {
    ///whatever
    dispatch({
        type: CHANGE_ON_SALE
    });
}