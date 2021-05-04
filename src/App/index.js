import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from '../components/Navbar';
import Routes from '../helper/routes';
import { getAuthors } from '../helper/data/authorData';

function App() {
  const [authors, setAuthors] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <Router>
        <NavBar user={user}/>
        <Routes authors={authors} setAuthors={setAuthors}/>
      </Router>
    </>
  );
}

export default App;
