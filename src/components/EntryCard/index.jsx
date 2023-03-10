import React from 'react';
import './EntryCard.css';

function EntryCard() {
  return (
    <div className='entry-card'>
      <p>1</p>
      <p>Name</p>
      <p>Text</p>
      <p>Text</p>
      <div className='actions'>
        <i className='fa-regular fa-pen-to-square' />
        <i className='fa-regular fa-trash-can' />
      </div>
    </div>
  );
}

export default EntryCard;
