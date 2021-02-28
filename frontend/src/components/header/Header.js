import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  const currentYear = new Date().getFullYear();
  const [clicked, setClick] = useState(false);

  const hanldeClick = () => setClick(!clicked);
  const closeMenu = () => setClick(false);

  return (
    <header>
      <NavLink to='/' className='brand' onClick={closeMenu}>
        <img className='logo_icon' src='/logo192.png' alt='logo' />
        Book Daily
      </NavLink>
      <nav className={!clicked ? 'navbar' : 'navbar_mobile'}>
        <ul className='nav_links'>
          <li className='links_item'>
            <NavLink to='/cart' onClick={closeMenu}>
              <i className='fas fa-shopping-cart' />
              Cart
            </NavLink>
          </li>
          <li className='links_item'>
            <NavLink to='/login' onClick={closeMenu}>
              <i className='fas fa-user' />
              Sign in
            </NavLink>
          </li>
          <ul
            className={
              !clicked ? 'footer_links' : 'footer_links_mobile nav_links'
            }>
            <li className='links_item'>
              <NavLink to='/' onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li className='links_item'>
              <NavLink to='/' onClick={closeMenu}>
                Help
              </NavLink>
            </li>
            <li className='links_item'>
              <NavLink to='/' onClick={closeMenu}>
                Terms
              </NavLink>
            </li>
            <li className='links_item'>
              <NavLink to='/' onClick={closeMenu}>
                Contact us
              </NavLink>
            </li>
            <li className='links_item copyright'>
              <p>&copy; {currentYear} Book Daily by Edgar</p>
            </li>
          </ul>
        </ul>
      </nav>
      <button className='hamburger' onClick={hanldeClick}>
        <i className={!clicked ? 'fas fa-bars' : 'fas fa-times'} />
      </button>
    </header>
  );
}

export default Header;
