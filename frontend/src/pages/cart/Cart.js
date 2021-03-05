import React, { useEffect } from 'react';
import '../../styles/styles_module.scss';
import './Cart.scss';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import Button from '../../components/button/Button';
import Message from '../../components/message/Message';

function Cart({ match, location, history }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 0;
  const totalItems = Number(cartItems.reduce((acc, item) => acc + item.qty, 0));
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);
  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <div className='container'>
      <h3 className='page_title title'>shopping cart</h3>
      <div className='row'>
        <div className='cart_list'>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty,{' '}
              <Link style={{ marginLeft: '8px', color: '#3e466a' }} to='/'>
                Go Back
              </Link>
            </Message>
          ) : (
            cartItems.map(item => (
              <li className='cart_list_item' key={item.product}>
                <img className='item_img' src={item.image} alt={item.name} />
                <div className='item_info'>
                  <Link className='name' to={`/product/${item.product}`}>
                    {item.name}
                  </Link>
                  <h5 className='author'>{item.author}</h5>
                </div>
                <select
                  className='item_qty'
                  onChange={e =>
                    dispatch(addToCart(item.product, Number(e.target.value)))
                  }>
                  {[...Array(item.countInStock).keys()].map(q => (
                    <option value={q + 1} key={q + 1}>
                      {q + 1}
                    </option>
                  ))}
                </select>
                <h4 className='item_price'>$ {item.price.toFixed(2)}</h4>
                <button
                  className='btn_remove'
                  onClick={() => removeFromCartHandler(item.product)}>
                  <i className='fas fa-trash' />
                </button>
              </li>
            ))
          )}
        </div>
        <div className='checkout_list card'>
          <h3 className='total_items'>SUBTOTAL ( {totalItems} ) ITEMS</h3>
          <ul className='item_list'>
            {cartItems.length === 0 ? (
              <p style={{ textAlign: 'center', paddingTop: '40px' }}>
                Empty Cart
              </p>
            ) : (
              cartItems.map(item => (
                <li className='item_list_item' key={item.product}>
                  <h4 className='name'>{item.name}</h4>
                  <h4 className='qty'>{item.qty}</h4>
                  <h4 className='price'>
                    $ {(item.price * item.qty).toFixed(2)}
                  </h4>
                </li>
              ))
            )}
          </ul>
          <h4 className='total'>
            Total Price:
            <span>$ {totalPrice}</span>
          </h4>
          <Button
            styles='btn_primary'
            title='PROCEED TO CHECKOUT'
            onClick={checkoutHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
