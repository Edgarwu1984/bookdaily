import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './ProductDetail.scss';
import Rating from '../../components/rating/Rating';
import Button from '../../components/button/Button';
import { listProductDetails } from '../../actions/productActions';
import Loader from '../../components/loader/Loader';
import Message from '../../components/message/Message';

function ProductDetail({ match }) {
  let history = useHistory();
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;
  const priceFormat = new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(product.price);

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

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
                <strong>Price:</strong> {priceFormat}
              </h5>
              <div className='description'>
                <h5>Book Description</h5>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
          <div className='cart_detail'>
            <div className='price'>
              <strong>Price:</strong> <span>{priceFormat}</span>
            </div>
            <div className='status'>
              <strong>Status:</strong>
              {product.countInStock > 0 ? (
                <span>In Stock</span>
              ) : (
                <span>Out of Stock</span>
              )}
            </div>
            <div className='quantity'>
              <strong>Qty:</strong>
              <select name='1'>
                <option value='1'>1</option>
              </select>
            </div>
            {product.countInStock === 0 ? (
              <Button styles='btn_disabled' title='Out of Stock' />
            ) : (
              <Button styles='btn_primary' title='Add to Cart' />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
