import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/product/:id' component={ProductDetail} />
          <Route path='/cart/:id?' component={Cart} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
