import React, { useEffect, useState } from 'react';

const Details = () => {
  const [details, setDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setDetails(data.details))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDetails = details.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Details</h1>
      <input
        type="text"
        placeholder="Search by name or description"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredDetails.map((item) => (
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
