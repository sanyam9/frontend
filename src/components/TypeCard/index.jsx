/* eslint-disable react/prop-types */
import React from 'react';
import './TypeCard.css';

function TypeCard(props) {
  const typeCardClickHandler = () => {
    props.setIsContentSelected(true);
    props.selectedContent(props.collection);
  };

  return (
    <button onClick={typeCardClickHandler} className='type-card'>
      <p>{props.collection.name}</p>
      <p>{props.collection.fields.length}</p>
    </button>
  );
}

export default TypeCard;
