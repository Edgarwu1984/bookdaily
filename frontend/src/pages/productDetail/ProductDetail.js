import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductDetail.scss';
import '../../styles/styles_module.scss';
import Rating from '../../components/rating/Rating';
import Button from '../../components/button/Button';
import { listProductDetails } from '../../actions/productActions';
import { addToCart } from '../../actions/cartActions';
import Loader from '../../components/loader/Loader';
import Message from '../../components/message/Message';

function ProductDetail({ match, history }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(match.params.id, quantity));
    history.push(`/cart/${match.params.id}?qty=${quantity}`);
  };

  return (
    <div className='container'>
      <button className='btn_back' onClick={() => history.goBack()}>
        <i className='fas fa-chevron-left' />
        Back
      </button>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type='alert' />
      ) : (
        <div className='row'>
          <div className='product_detail'>
            <img
              className='product_image'
              src={product.image}
              alt={product.name}
            />
            <div className='product_info'>
              <h5 className='name'>{product.name}</h5>
              <h5 className='author'>by {product.author}</h5>
              <div className='rating_reviews'>
                <Rating
                  value={product.rating}
                  numReviews={product.numReviews}
                />
              </div>
              <h5 className='price'>
                Price: <span>$ {Number(product.price).toFixed(2)}</span>
              </h5>
              <div className='description'>
                <h5>Book Description</h5>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
          <div className='cart_detail card'>
            <h5 className='price'>
              Price: <span>$ {Number(product.price).toFixed(2)}</span>
            </h5>
            <div className='status'>
              <strong>Status:</strong>
              {product.countInStock > 0 ? (
                <span>In Stock</span>
              ) : (
                <span>Out of Stock</span>
              )}
            </div>
            {product.countInStock > 0 && (
              <div className='quantity'>
                <strong>Qty:</strong>
                <select
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map(q => (
                    <option key={q + 1} value={q + 1}>
                      {q + 1}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {product.countInStock === 0 ? (
              <Button styles='btn_disabled' title='Out of Stock' />
            ) : (
              <Button
                styles='btn_primary'
                title='Add to Cart'
                onClick={addToCartHandler}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
