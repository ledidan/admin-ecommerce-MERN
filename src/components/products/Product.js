import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productDeleteAction } from "../../redux/actions/ProductAction";
const Product = (props) => {
  const dispatch = useDispatch();
  const { product } = props;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete this one")) {
      dispatch(productDeleteAction(id));
    }
    return;
  };
  return (
    <>
      <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
        <div className="card card-product-grid shadow-sm">
          <Link to="#" className="img-wrap">
            <img src={product.image} alt="Product" />
          </Link>
          <div className="info-wrap">
            <Link
              to={`/products/${product._id}`}
              className="title text-truncate"
            >
              {product.name}
            </Link>
            <div className="price mb-2">${product.price}</div>

            <div className="row d-flex justify-content-evenly">
              <Link
                to={`/product/${product._id}/edit`}
                className="btn btn-sm btn-outline-success p-2 col-md-5"
              >
                <i className="fas fa-pen"></i>
              </Link>
              <Link
                onClick={() => deleteHandler(product._id)}
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-5"
              >
                <i className="fas fa-trash-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
