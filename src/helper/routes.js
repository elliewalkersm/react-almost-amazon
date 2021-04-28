import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddAuthor from '../view/AddAuthor';
import Home from '../view/Home';
import Authors from '../view/authors';

export default function Routes({ authors, setAuthors }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/authors'
          component={() => <Authors authors={authors} setAuthors={setAuthors} />}
        />
        <Route
          path='/add-authors'
          component={() => <AddAuthor setAuthors={setAuthors} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};
