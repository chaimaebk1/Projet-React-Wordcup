import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StoreComponent = () => {
  const [selectedCity, setSelectedCity] = useState('Rabat'); // Default city
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        // const url = `https://w7163.wiremockapi.cloud/Clothes/${selectedCity}`;
        const url = "https://657af274394ca9e4af132252.mockapi.io/hop/Clothes_Kech";
        const response = await fetch(url);
        const result = await response.json();
        setStoreData(result);

        console.log('API Response:', result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStoreData();
  }, [selectedCity]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <label htmlFor="citySelect">Select City:</label>
      <select id="citySelect" value={selectedCity} onChange={handleCityChange}>
        <option value="Rabat">Rabat</option>
        <option value="Casablanca">Casablanca</option>
        <option value="Marrakech">Marrakech</option>
        <option value="Tangier">Tangier</option>
        {/* Add more city options as needed */}
      </select>

      <h1>Stores in {selectedCity}</h1>

      <ul>
        {storeData.map(store => (
          <li key={store.id}>
            <Link to={`/store/${store.id}`}>{store.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreComponent;
