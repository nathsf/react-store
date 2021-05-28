import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItemToCart,
  addItemToCartServer,
  removeOneItemFromCart
  // removeOneItemFromCartServer
} from "../../actions/cartAction";

import "../../style/itemInCart.css";
const ItemInCart = props => {
  const [itemNumber, setItemNumber] = useState(0);

  useEffect(
    () =>
      setItemNumber(
        props.cart.items.reduce(
          (count, ele) => count + (ele.id === item.id),
          0
        )
      ),
    //eslint-disable-next-line
    []
  );
  const addOneItem = itemId => {
    setItemNumber(itemNumber + 1);
    // console.log("add item button clicked", itemId);
    props.addItemToCart(itemId);
    props.addItemToCartServer(itemId);
  };

  const removeItem = itemId => {
    //setItemNumber(itemNumber - 1);
    props.removeItemFromCart(itemId);
    // removeItemFromCartServer(itemId);
  };

  const removeOneItem = itemId => {
    if (itemNumber === 1) {
      return alert("Only One Item. Button disabled.");
    } else {
      setItemNumber(itemNumber - 1);
      // console.log("minus item button clicked", itemId);
      props.removeOneItemFromCart(itemId);
      //props.removeOneItemFromCartServer(itemId);
    }
  };

  const { item } = props;
  return (
    <Fragment>
      <div className="container ">
        <p>
          {item.title} {item.model}
        </p>
        <div className="content">
          <div className="itemImage">
            <img src={item.image} alt="" />
          </div>
          <div className="price-control">
            <p>${item.price}</p>
            <div className="controller">
              <button onClick={() => removeOneItem(item.id)}>-</button>
              <p>{itemNumber}</p>
              <button onClick={() => addOneItem(item.id)}>+</button>
            </div>
          </div>
        </div>
        <button
          className="btn-remove-mine btn btn-warning"
          onClick={() => removeItem(item.id)}
        >
          Borrar
        </button>
        <br />
        <br />
        <div className="bottom">
          <div className="bottom-left">
            <p>Product Total</p>
          </div>
          <div className="bottom-right">
            <p>{(item.price * itemNumber).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  cart: state.cart,
});
//console.log("in mapping state is: ", state)

export default connect(mapStateToProps, {
  addItemToCart,
  addItemToCartServer,
  removeItemFromCart,
  removeOneItemFromCart
  // removeOneItemFromCartServer
})(ItemInCart);
// export default ItemInCart;
