import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../helper/data/authorData';
import AuthorForm from '../AuthorForm';

const AuthorCard = ({
  firebaseKey,
  firstName,
  lastName,
  setAuthors
}) => {
  const [updating, setUpdating] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthor(firebaseKey)
          .then((authorArray) => setAuthors(authorArray));
        break;
      case 'update':
        setUpdating((prevState) => !prevState);
        break;
      case 'view':
        history.pushState(`/authors/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card body>
      <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
      <CardText>Description: insert text</CardText>
      <Button color="secondary" onClick={() => handleClick('view')}>View Author</Button>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Author</Button>
      <Button color="info" onClick={() => handleClick('update')}>
        {updating ? 'Close Form' : 'Update Author'}
      </Button>
      {
        updating && <AuthorForm
          formTitle='Update Author'
          setAuthors={setAuthors}
          firebaseKey={firebaseKey}
          firstName={firstName}
          lastName={lastName}
        />
      }
    </Card>
  );
};

AuthorCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  setAuthors: PropTypes.func
};

export default AuthorCard;
