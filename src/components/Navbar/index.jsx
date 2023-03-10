import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GET_COLLECTIONS_NAMES } from '../../constants/apiEndPoints';
import { COLLECTION_ROUTE, CONTENT_ROUTE } from '../../constants/routes';
import makeRequest from '../../utils/makeRequest';
import './Navbar.css';

function Navbar() {
  const { collectionName } = useParams();
  const [collections, setCollections] = useState([]);
  const [highlightedCollection, setHighlightedCollection] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_COLLECTIONS_NAMES).then((response) => {
      setCollections(response);
    });
    setHighlightedCollection(collectionName);
  }, [collectionName]);

  return (
    <div className='collection-wrapper'>
      <h1>CMS+</h1>
      <div className='collection'>
        <header>
          <p>
            <strong>COLLECTION TYPES</strong>
          </p>
          <i className='fa-solid fa-magnifying-glass'></i>
        </header>
        <div className='collection-list'>
          <ul>
            {collections.map((collection) => (
              <li
                className={
                  highlightedCollection === collection.name
                    ? 'highlight'
                    : 'normal'
                }
                onClick={(event) =>
                  navigate(`${COLLECTION_ROUTE}/${event.target.innerText}`)
                }
                key={collection.id}
              >
                {collection.name}
              </li>
            ))}
          </ul>
        </div>
        <footer>
          <p
            onClick={() => navigate(CONTENT_ROUTE)}
            className={highlightedCollection ? 'normal' : 'highlight'}
          >
            <strong>CONTENT TYPE BUILDER</strong>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Navbar;
