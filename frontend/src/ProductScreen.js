import React from "react";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import Rating from "./Rating";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector(state => state.productDetails);
  const {loading, error, product} = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId] );
  
  return (
    <div>
    {loading? (<LoadingBox> </LoadingBox>
    ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      
     <div>
      <Link to="/">Back to result</Link>

      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>

        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>

            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>

            <li>Price = €{product.price}</li>

            <li>Description = {product.description}</li>
          </ul>
        </div>

        <div className="col-1">
          <div className=" card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price </div>
                  <div className="price"> {product.price} </div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div>Status </div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="succes">In Stock </span>
                    ) : (
                      <span className="danger"> Unavailable </span>
                    )}
                  </div>
                </div>
              </li>

              <li>
                <button className="primary block">Add to Cart </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    )}
    </div>
   
  );
}
