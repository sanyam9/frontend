import React from 'react';
import './FieldCard.css';

function FieldCard() {
  return (
    <div className='field-card'>
      <div>Ab</div>
      <div className='field-card-wrapper'>
        <div className='field-card-left'>
          <p>Name</p>
        </div>
        <div className='field-card-center'>Text</div>
        <div className='field-card-right'>
          <i className='fa-regular fa-pen-to-square' />
          <i className='fa-regular fa-trash-can' />
        </div>
      </div>
    </div>
  );
}

export default FieldCard;
