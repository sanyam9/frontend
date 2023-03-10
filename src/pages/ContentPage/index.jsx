import React, { useState } from 'react';
import FieldCard from '../../components/FieldCard';
import Navbar from '../../components/Navbar';
import TypeCard from '../../components/TypeCard';
import Modal from '../../components/Modal';
import './ContentPage.css';

function ContentPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='page-wrapper'>
      {openModal && <Modal closeModal={setOpenModal} />}
      <Navbar />
      <div className='content-wrapper'>
        <h1>Content Types</h1>
        <div className='content-page-body'>
          <div className='content-left'>
            <header>
              <p>7 Types</p>
              <i className='fa-solid fa-magnifying-glass'></i>
            </header>
            <button onClick={() => setOpenModal(true)} className='new-button'>
              + New Type
            </button>
            <div className='type-cards'>
              <TypeCard />
              <TypeCard />
            </div>
          </div>
          <div className='content-right'>
            <header>
              <div className='content-title'>
                <h1>Company_Profile</h1>
                <i className='fa fa-pencil'></i>
              </div>
              <p>13 Fields</p>
            </header>
            <button className='new-button'>Add another field</button>
            <div className='field-cards'>
              <FieldCard />
              <FieldCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
