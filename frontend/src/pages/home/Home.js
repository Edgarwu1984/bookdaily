import React from 'react';
import './Home.scss';
import '../../styles/layout_module.scss';
import Slider from '../../components/slider/Slider';
import products from '../../products';
import Product from '../../components/product/Product';

function Home() {
  return (
    <>
      <Slider />
      <div className='container'>
        <h5 className='section_title'>Latest books</h5>
        <div className='grid'>
          {products &&
            products.map(product => (
              <Product key={product._id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
