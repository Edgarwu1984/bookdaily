import React, { useState, useEffect } from 'react';
import './Home.scss';
import '../../styles/layout_module.scss';
import Slider from '../../components/slider/Slider';
import Product from '../../components/product/Product';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Slider />
      <div className='container'>
        <h5 className='section_title'>Latest books</h5>
        <div className='grid'>
          {products.map(product => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
