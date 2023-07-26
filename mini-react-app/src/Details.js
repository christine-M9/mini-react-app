// src/Details.js
import React, { useEffect, useState } from 'react';

const Details = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setDetails(data.details))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Details</h1>
      <ul>
        {details.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
