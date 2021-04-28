import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helper/data/apiKeys';
import AuthorForm from '../AuthorForm';
// import './App.scss';
import { getAuthors } from '../helper/data/authorData';
import AuthorCard from '../components/authorCard';

firebase.initializeApp(firebaseConfig);

function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  return (
    <div className='App'>
      <AuthorForm
      formTitle='Author Form'
      setAuthors={setAuthors}
      />
      <hr/>
      {authors.map((authorInfo) => (
        <AuthorCard
          key={authorInfo.firebaseKey}
          firstName={authorInfo.name}
          lastName={authorInfo.name}
          setAuthors={setAuthors}
        />
      ))}
    </div>
  );
}

export default Authors;
