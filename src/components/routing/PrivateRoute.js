import React from "react";
import { connect } from "react-redux";
import { getCart } from "../../actions/userActions";

const PrivateRoute = props => {
  return (
    <div>
      <p>{props.getCart}</p>
    </div>
  );
};

//map state to props
const mapStateToProps = state => ({
});
export default connect(mapStateToProps, { getCart })(PrivateRoute);
