/* eslint-disable react/prop-types */
import React from 'react';
import './Modal.css';

function Modal(props) {
  return (
    <div className='modal-bg'>
      <div className='modal-container'>
        <header>
          <h3>Create a new content type</h3>
        </header>
        <article>
          <label>Name of the content type</label>
          <input type='text' />
        </article>
        <footer>
          <button
            className='cancel-btn'
            onClick={() => props.closeModal(false)}
          >
            Cancel
          </button>
          <button className='create-btn'>Create</button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
