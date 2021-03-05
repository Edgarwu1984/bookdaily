import React from 'react';
import './Product.scss';
import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';

function Product({ product }) {
  return (
    <Link to={`/product/${product._id}`} className='product btn_card grid_item'>
      <img className='product_img' src={product.image} alt={product.name} />
      <h4 className='product_title'>{product.name}</h4>
      <h5 className='product_author'>{product.author}</h5>
      <div className='product_rating_reviews'>
        <Rating value={product.rating} numReviews={product.numReviews} />
      </div>

      {product.countInStock === 0 ? (
        <h4 className='product_warning'>Out of Stock</h4>
      ) : (
        <h4 className='product_price'>$ {Number(product.price.toFixed(2))}</h4>
      )}
    </Link>
  );
}

export default Product;
