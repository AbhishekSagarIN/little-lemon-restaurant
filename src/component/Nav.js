import React from 'react'
import './Nav.css'
import { Link, Route, Routes } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import Homepage from '../Home';
import Reservation from '../Reservation';

export const Nav = () => {
  return (
    <>
    <nav>
        <ul>
            <li><Link to="/" className='nav-item'>Home</Link></li>
            <li><HashLink smooth to="/#about" className='nav-item'>About</HashLink></li>
            <li><HashLink smooth to="/#menu" className='nav-item'>Menu</HashLink></li>
            <li><Link to="/reservation" className='nav-item'>Reservation</Link></li>
            <li><HashLink smooth to="/#order-online" className='nav-item'>Order Online</HashLink></li>
            <li><HashLink to="/#login" className='nav-item'>Login</HashLink></li>
        </ul>
    </nav>
    </>
  )
}
