import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EntryCard from '../../components/EntryCard';
import Navbar from '../../components/Navbar';
import SideModal from '../../components/SideModal';
import makeRequest from '../../utils/makeRequest';
import {
  GET_COLLECTIONS,
  GET_ENTRIES_BY_ID,
} from '../../constants/apiEndPoints';
import './CollectionPage.css';

function CollectionPage() {
  const [openModal, setOpenModal] = useState(false);
  const [collectionId, setCollectionId] = useState('');
  const [collections, setCollections] = useState('');
  const { collectionName } = useParams();

  useEffect(() => {
    makeRequest(GET_COLLECTIONS).then((response) => {
      const filteredResponse = response.filter(
        (item) => item.name === collectionName,
      );
      setCollectionId(filteredResponse[0].id);
      makeRequest(GET_ENTRIES_BY_ID(collectionId)).then((response) => {
        setCollections(response);
      });
    });
  }, [collectionName]);

  return (
    <div className='page-wrapper'>
      {openModal && <SideModal closeModal={setOpenModal} />}
      <Navbar />
      <div className='content-wrapper'>
        <h1>{collectionName}</h1>
        <div className='content-body'>
          <header>
            <h1>{collections.length} Entries Found</h1>
            <div onClick={() => setOpenModal(true)}>Add a new entry</div>
          </header>
          <div className='entry-columns'>
            <p>ID</p>
            <p>Name</p>
            <p>Website</p>
            <p>Contact</p>
            <p>Actions</p>
          </div>
          <div className='entry-cards'>
            <EntryCard />
            <EntryCard />
            <EntryCard />
            <EntryCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
