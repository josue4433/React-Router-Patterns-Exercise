import React from 'react';
import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
  return (
    <div>
      <h1>Dog List</h1>
      {dogs.map(dog => (
        <div key={dog.name}>
          <img src={dog.src} alt={dog.name} />
          <h3>
            <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default DogList;
