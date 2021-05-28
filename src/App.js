import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Items from "./components/items/Items";
import ItemDetails from "./components/items/ItemDetails";

import Cart from "./components/cart/Cart";

import FilterPanel from "./components/layout/FilterPanel";

import "bootswatch/dist/cyborg/bootstrap.min.css"; //

import "./App.css";

const App = props => {
  return (
    <Provider store={store}>
      <Router>
        
        <Navbar {...props} />
       

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Fragment>

                <hr />

                <FilterPanel />
                <Items />
                <hr />
                <hr />
              </Fragment>
            )}
          />

         
          <Route exact path="/item/:id" component={ItemDetails} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </Provider>
  );
};

// export default App;
//map state to props
const mapStateToProps = state => ({
  items: state.items,
  cart: state.cart
});
export default connect(mapStateToProps,)(App);
