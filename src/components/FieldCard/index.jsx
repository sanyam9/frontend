/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  GET_ENTRIES_BY_ID,
  UPDATE_FIELD_BY_ID,
} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './FieldCard.css';

function FieldCard(props) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    makeRequest(GET_ENTRIES_BY_ID(props.selectedContent.id)).then(
      (response) => {
        setEntries(response);
      },
    );
  }, []);

  const editFieldHandler = () => {
    if (entries.length === 0) {
      props.setCurrentField(props.field);
      props.setOpenModalForEditField(true);
    }
  };

  const deleteFieldHandler = async () => {
    const request = {
      data: {
        oldField: props.field,
      },
    };
    const response = await makeRequest(
      UPDATE_FIELD_BY_ID(props.selectedContent.id),
      request,
    );
    const newObject = {
      ...props.selectedContent,
      fields: response[0].fields,
    };
    props.setSelectedContent(newObject);
  };

  return (
    <div className='field-card'>
      <div>Ab</div>
      <div className='field-card-wrapper'>
        <div className='field-card-left'>
          <p>{props.field}</p>
        </div>
        <div className='field-card-center'>Text</div>
        <div className='field-card-right'>
          <i
            onClick={editFieldHandler}
            className='fa-regular fa-pen-to-square'
          />
          <i onClick={deleteFieldHandler} className='fa-regular fa-trash-can' />
        </div>
      </div>
    </div>
  );
}

export default FieldCard;
