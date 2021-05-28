import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  clearCart
} from "../../actions/cartAction";

const Navbar = props => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <i className="fas fa-shopping-cart"></i>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Products <span className="sr-only">(current)</span>
            </a>
          </li>

          
        </ul>
     
        <ul className="navbar-nav mr-right">
         
          
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <button className="btn btn-outline-primary">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </Link>
            </li>
          
      
         
        </ul>
      </div>
    </nav>
  );
};

//map state to props
const mapStateToProps = state => ({
  cart: state.cart,
  items: state.items
});
export default connect(mapStateToProps, {
  addItemToCart,
  removeItemFromCart,
  clearCart,
})(Navbar);

