import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const history = useHistory();
  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    history.push('/dogs');
    return null;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} />
      <h2>Age: {dog.age}</h2>
      <h3>Facts:</h3>
      <ul>
        {dog.factsz}
