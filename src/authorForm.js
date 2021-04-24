import React, { useState } from 'react';
import addAuthor from './helper/data/authorData';

export default function AuthorForm() {
  const [author, setAuthor] = useState({
    first_name: '',
    last_name: '',
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor();
  }

  return (
    <>
    <div className='author-form'>
      <form
      id='addAuthorForm'
      autoComplete='off'
      onSumbit={handleSubmit}
      >
        <h2>Author Form</h2>
        <label>First Name: </label>
        <input
          first_name='first_name'
          type='text'
          placeholder='First Name'
          value={author.first_name}
          onChange={handleInputChange}
        ></input>

        <label>Last Name: </label>
        <input
          last_name='last_name'
          type='text'
          placeholder='Last Name'
          value={author.last_name}
          onChange={handleInputChange}
        ></input>

        <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  )
}
