import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getSingleAuthor } from '../helper/data/authorData';

export default function singleAuthor() {
  const [author, setAuthor] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleAuthor(firebaseKey)
      .then(setAuthor);
  });

  return (
    <div>
      <h1>Single Author</h1>
      <h2>{author.firstName}</h2>
      <h3>{author.lastName}</h3>
    </div>
  );
}
