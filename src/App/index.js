import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from '../components/Navbar';
import Routes from '../helper/routes';
import { getAuthors } from '../helper/data/authorData';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes authors={authors} setAuthors={setAuthors}/>
      </Router>
    </>
  );
}

export default App;
