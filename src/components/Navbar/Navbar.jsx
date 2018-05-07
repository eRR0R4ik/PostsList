import React from 'react';
import {
  Link
} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="site-nav">
      <ul>
        <li className="active"><Link to="/posts">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contacts">Contact us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;