/* eslint-disable react/prop-types */
import React from 'react';
import './SideModal.css';

function SideModal(props) {
  return (
    <div className='sidemodal-bg'>
      <div className='sidemodal-container'>
        <header>
          <h3>New Company_Profile</h3>
        </header>
        <div className='sidemodal-input'>
          <label>Name</label>
          <input type='text' />
        </div>
        <div className='sidemodal-input'>
          <label>Name</label>
          <input type='text' />
        </div>
        <div className='sidemodal-input'>
          <label>Name</label>
          <input type='text' />
        </div>
        <div className='sidemodal-input'>
          <label>Name</label>
          <input type='text' />
        </div>
        <div className='sidemodal-input'>
          <label>Name</label>
          <input type='text' />
        </div>
        <footer>
          <button
            className='cancel-btn'
            onClick={() => props.closeModal(false)}
          >
            Cancel
          </button>
          <button className='create-btn'>Add</button>
        </footer>
      </div>
    </div>
  );
}

export default SideModal;
