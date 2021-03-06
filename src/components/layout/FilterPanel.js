import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  setPriceNull,
  setPriceOne,
  setPriceThree,
  setPriceTwo,
  changeFeatured,
  changeOnSale
} from "../../actions/controlAction";
import "../../style/controlPanel.css";

const FilterPanel = props => {
  return (
    <Fragment>
      <div className="container text-left">
        <form className="control-form">
          {/* <fieldset class="form-group"> */}
          <div className="form-check-control">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="optionsRadios"
                id="optionsRadios1"
                value="option1"
                onClick={props.setPriceNull}
              />
              None
            </label>
          </div>
          <div className="form-check-control">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="optionsRadios"
                id="optionsRadios1"
                value="option1"
                onClick={props.setPriceOne}
              />
              $ 0 - 100
            </label>
          </div>
          <div className="form-check-control">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="optionsRadios"
                id="optionsRadios2"
                value="option2"
                onClick={props.setPriceTwo}
              />
              $ 100 - 1000
            </label>
          </div>
          <div className="form-check-control">
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name="optionsRadios"
                id="optionsRadios2"
                value="option2"
                onClick={props.setPriceThree}
              />
              $ 1000 a m??s
            </label>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  cart: state.cart,
  control: state.control
});
export default connect(mapStateToProps, {
  setPriceNull,
  setPriceOne,
  setPriceThree,
  setPriceTwo,
  changeFeatured,
  changeOnSale
})(FilterPanel);
