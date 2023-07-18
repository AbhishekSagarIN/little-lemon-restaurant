import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from '../assets/footer logo.png'
import "./Footer.css"
import { HashLink } from 'react-router-hash-link'

export const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-container'>
          <div className='footerLogo'>
            <img src={FooterLogo} />
          </div>
          <div className='first-nav footer-nav-div'>
            <h4 className='footer-nav-heading'>Doormat Navigation</h4>
            <nav>
              <ul>
                <li><Link to='/' className='footer-nav-item'>Home</Link></li>
                <li><HashLink to='/#about' className='footer-nav-item'>About</HashLink></li>
                <li><HashLink to='/#menu' className='footer-nav-item'>Menu</HashLink></li>
                <li><Link to='/reservation' className='footer-nav-item'>Reservation</Link></li>
                <li><HashLink to='/#orderonline' className='footer-nav-item'>Order Online</HashLink></li>
                <li><HashLink to='/#login' className='footer-nav-item'>Login</HashLink></li>
              </ul>
            </nav>
          </div>
          <div className='second-nav footer-nav-div'>
          <h4 className='footer-nav-heading'>Contact</h4>
          <div className='footer-nav-items'>
            <ul>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </div>
          </div>
          <div className='third-nav footer-nav-div'>
          <h4 className='footer-nav-heading'>Social Media Links</h4>
          <div className='footer-nav-items'>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <small>2023 &copy; Little Lemon Restaurant. All rights reserved. Made By <a href='https://epikdeveloper.com'>Abhishek Sagar</a></small>
        </div>
      </div>
    </footer>
  )
}
