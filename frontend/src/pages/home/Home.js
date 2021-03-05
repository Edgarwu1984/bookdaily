import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/styles_module.scss';
import Slider from '../../components/slider/Slider';
import Product from '../../components/product/Product';
import { listProducts } from '../../actions/productActions';
import Loader from '../../components/loader/Loader';
import Message from '../../components/message/Message';

function Home() {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Slider />
      <div className='container'>
        <h5 className='page_title'>Latest books</h5>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message type='alert'>{error}</Message>
        ) : (
          <div className='grid'>
            {products.map(product => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
