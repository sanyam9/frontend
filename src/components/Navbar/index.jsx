import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <div className='collection-wrapper'>
      <h1>CMS+</h1>
      <div className='collection'>
        <header>
          <p>
            <strong>COLLECTION TYPES</strong>
          </p>
          <i className='fa-solid fa-magnifying-glass'></i>
        </header>
        <div className='collection-list'>
          <ul>
            <li>Company_Profile</li>
            <li>ldv_functionals</li>
            <li>Payment_functionals</li>
          </ul>
        </div>
        <footer>
          <p>
            <strong>CONTENT TYPE BUILDER</strong>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Navbar;
