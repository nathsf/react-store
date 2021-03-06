import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addItemToCart, addItemToCartServer } from "../../actions/cartAction";
import "../../style/item.css";

const Item = props => {
  const conbinedFunction = id => {    
      props.addItemToCart(id);
      //console.log(Redirect);
      props.addItemToCartServer(id);
    }
    
  const { title, price, image, id } = props;
  return (
    <Fragment>
      <div className="cards">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <div className="card-text">
          <h6>
            {" "}
            {id}
             {title}
          </h6>
          <p>$ {price}</p>
        </div>
        <div className="card-buttons">
          <a href={`/item/${id}`} className="btn btn-outline-primary">
            Detalles
           
          </a>
          <a
            href="#!"
            onClick={() => conbinedFunction(id)}
            className="btn btn-primary"
          >
            Añadir
          </a>
        </div>
      </div>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  items: state.items,
  cart: state.cart
});
export default connect(mapStateToProps, { addItemToCart, addItemToCartServer })(
  Item,
  addItemToCart,
);
