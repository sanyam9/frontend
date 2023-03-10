/* eslint-disable react/prop-types */
import React from 'react';
import {
  CREATE_COLLECTION,
  UPDATE_FIELD_BY_ID,
} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './Modal.css';

function Modal(props) {
  const [name, setName] = React.useState('');

  const createButtonHandler = async () => {
    let request =
      props.label === 'content type'
        ? {
            data: {
              name: name,
              fields: [],
            },
          }
        : props.label === 'field'
        ? {
            data: {
              newField: name,
            },
          }
        : {
            data: {
              name: name,
            },
          };
    if (props.label === 'edit-field') {
      request = {
        data: {
          oldField: props.currentField,
          newField: name,
        },
      };
    }
    const apiEndPoint =
      props.label === 'content type'
        ? CREATE_COLLECTION
        : UPDATE_FIELD_BY_ID(props.selectedContent.id);
    const response = await makeRequest(apiEndPoint, request);
    if (props.label === 'field') {
      const newObject = {
        ...props.selectedContent,
        fields: response[0].fields,
      };
      props.setSelectedContent(newObject);
    } else if (props.label === 'name' || props.label === 'edit-field') {
      const newObject = {
        ...props.selectedContent,
        name: response[0].name,
      };
      props.setSelectedContent(newObject);
    }
    props.closeModal(false);
  };

  return (
    <div className='modal-bg'>
      <div className='modal-container'>
        <header>
          {props.label !== 'edit-field' && <h3>Create a new {props.label}</h3>}
          {props.label === 'edit-field' && <h3>Edit field</h3>}
        </header>
        <article>
          {props.label !== 'name' && props.label !== 'edit-field' && (
            <label>Name of the {props.label}</label>
          )}
          <input
            onChange={(event) => setName(event.target.value)}
            type='text'
            placeholder={
              props.label === 'name' ? props.selectedContent.name : ''
            }
          />
        </article>
        <footer>
          <button
            className='cancel-btn'
            onClick={() => props.closeModal(false)}
          >
            Cancel
          </button>
          <button onClick={createButtonHandler} className='create-btn'>
            Create
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
