import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helper/data/apiKeys';
import AuthorForm from '../AuthorForm';
import './App.scss';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <div className='App'>
      <AuthorForm />
    </div>
  );
}

export default App;
