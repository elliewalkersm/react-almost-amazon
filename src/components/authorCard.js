import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../helper/data/authorData';

const AuthorCard = ({
  firebasekey,
  firstName,
  lastName,
  setAuthors
}) => {
  const handleClick = () => {
    deleteAuthor(firebasekey)
      .then((authorArray) => setAuthors(authorArray));
  };

  return (
    <Card body>
      <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
      <CardText>Description: insert text</CardText>
      <Button color="danger" onClick={handleClick}>Delete Author</Button>
    </Card>
  );
};

AuthorCard.propTypes = {
  firebasekey: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  setAuthors: PropTypes.func
};

export default AuthorCard;
