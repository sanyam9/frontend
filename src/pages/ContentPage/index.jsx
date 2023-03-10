import React, { useEffect, useState } from 'react';
import FieldCard from '../../components/FieldCard';
import Navbar from '../../components/Navbar';
import TypeCard from '../../components/TypeCard';
import Modal from '../../components/Modal';
import './ContentPage.css';
import { GET_COLLECTIONS } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

function ContentPage() {
  const [openModalForType, setOpenModalForType] = useState(false);
  const [openModalForField, setOpenModalForField] = useState(false);
  const [openModalForName, setOpenModalForName] = useState(false);
  const [openModalForEditField, setOpenModalForEditField] = useState(false);
  const [collections, setCollections] = useState([]);
  const [isContentSelected, setIsContentSelected] = useState(false);
  const [selectedContent, setSelectedContent] = useState({});
  const [currentField, setCurrentField] = useState({});

  useEffect(() => {
    makeRequest(GET_COLLECTIONS).then((response) => {
      setCollections(response);
    });
  }, [openModalForField, openModalForType, selectedContent]);

  return (
    <div className='page-wrapper'>
      {openModalForType && (
        <Modal label='content type' closeModal={setOpenModalForType}></Modal>
      )}
      {openModalForField && (
        <Modal
          label='field'
          closeModal={setOpenModalForField}
          selectedContent={selectedContent}
          setSelectedContent={setSelectedContent}
        ></Modal>
      )}
      {openModalForName && (
        <Modal
          label='name'
          closeModal={setOpenModalForName}
          selectedContent={selectedContent}
          setSelectedContent={setSelectedContent}
        ></Modal>
      )}
      {openModalForEditField && (
        <Modal
          label='edit-field'
          closeModal={setOpenModalForEditField}
          selectedContent={selectedContent}
          setSelectedContent={setSelectedContent}
          currentField={currentField}
        ></Modal>
      )}
      <Navbar collections={collections} />
      <div className='content-wrapper'>
        <h1>Content Types</h1>
        <div className='content-page-body'>
          <div className='content-left'>
            <header>
              <p>{collections.length} Types</p>
              <i className='fa-solid fa-magnifying-glass'></i>
            </header>
            <button
              onClick={() => setOpenModalForType(true)}
              className='new-button'
            >
              + New Type
            </button>
            <div className='type-cards'>
              {collections.map((collection, index) => (
                <TypeCard
                  key={index}
                  collection={collection}
                  setIsContentSelected={setIsContentSelected}
                  selectedContent={setSelectedContent}
                />
              ))}
            </div>
          </div>
          <div className='content-right'>
            {isContentSelected && (
              <>
                <header>
                  <div className='content-title'>
                    <h1>{selectedContent.name}</h1>
                    <i
                      onClick={() => setOpenModalForName(true)}
                      className='fa fa-pencil'
                    ></i>
                  </div>
                  <p>{selectedContent.fields.length} Fields</p>
                </header>
                <button
                  onClick={() => setOpenModalForField(true)}
                  className='new-button'
                >
                  Add another field
                </button>
                <div className='field-cards'>
                  {selectedContent.fields.map((field, index) => (
                    <FieldCard
                      key={index}
                      field={field}
                      selectedContent={selectedContent}
                      setSelectedContent={setSelectedContent}
                      setCurrentField={setCurrentField}
                      setOpenModalForEditField={setOpenModalForEditField}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
