import React, { useState } from 'react';
import EntryCard from '../../components/EntryCard';
import Navbar from '../../components/Navbar';
import SideModal from '../../components/SideModal';
import './CollectionPage.css';

function CollectionPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='page-wrapper'>
      {openModal && <SideModal closeModal={setOpenModal} />}
      <Navbar />
      <div className='content-wrapper'>
        <h1>Company_Profile</h1>
        <div className='content-body'>
          <header>
            <h1>13 Entries Found</h1>
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
