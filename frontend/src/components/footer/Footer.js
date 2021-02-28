import React from 'react';
import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='container'>
        <ul className='nav_links'>
          <li className='links_item'>
            <div href='#'>About</div>
          </li>
          <li className='links_item'>
            <div href='#'>Help</div>
          </li>
          <li className='links_item'>
            <div href='#'>Terms</div>
          </li>
          <li className='links_item'>
            <div href='#'>Contact us</div>
          </li>
        </ul>
        <div className='copyright'>
          <p>&copy; {currentYear} Book Daily by Edgar</p>
        </div>
        <ul className='social_links'>
          <li className='links_item social_item'>
            <a
              href='https://www.facebook.com/wuzhengjie1007'
              rel='noreferrer'
              target='_blank'>
              <i className='fab fa-facebook-f' />
            </a>
          </li>
          <li className='links_item social-_tem'>
            <a
              href='https://twitter.com/Edgarwu1007'
              rel='noreferrer'
              target='_blank'>
              <i className='fab fa-twitter' />
            </a>
          </li>
          <li className='links_item social_item'>
            <a
              href='https://www.instagram.com/edgarwu1007/'
              rel='noreferrer'
              target='_blank'>
              <i className='fab fa-instagram' />
            </a>
          </li>
          <li className='links_item social_item'>
            <a
              href='https://www.linkedin.com/in/edgarwu1007/'
              rel='noreferrer'
              target='_blank'>
              <i className='fab fa-linkedin-in' />
            </a>
          </li>
          <li className='links_item social_item'>
            <a
              href='https://www.artstation.com/edgarwu/albums/all'
              rel='noreferrer'
              target='_blank'>
              <i className='fab fa-artstation' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
