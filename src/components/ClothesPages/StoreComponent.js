import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StoreComponent = () => {
  const [selectedCity, setSelectedCity] = useState('Rabat'); // Default city
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        let url;
        if (selectedCity === 'Casablanca' || selectedCity === 'Marrakech') {
          url = `https://657af274394ca9e4af132252.mockapi.io/Clothes/${selectedCity}`;
        } else {
          url = `https://658defad7c48dce94739dd6a.mockapi.io/Clothes/${selectedCity}`;
        }
        // const url = `https://w7163.wiremockapi.cloud/Clothes/${selectedCity}`;

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
      <div className="mt-4 position-relative w-75 mx-auto animated slideInDown d-flex align-items-center">
        <h5 htmlFor="citySelect" className="text-primary col-md-2">
          Select City:
        </h5>
        <select
          id="citySelect"
          className="form-select border-1 rounded-pill py-3 ps-4 pe-5 me-2"
          value={selectedCity}
          onChange={handleCityChange}
        >
          <option value="Rabat">Rabat</option>
          <option value="Casablanca">Casablanca</option>
          <option value="Marrakech">Marrakech</option>
          <option value="Tangier">Tangier</option>
          {/* Add more city options as needed */}
        </select>
      </div>

      <h1 className="text-center my-4">Stores in {selectedCity}</h1>
      <div className="row g-4">
        {storeData.map((store) => (
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={store.id}>
            <div className="team-item rounded-3 p-4">
              <Link to={`/Clothes/${selectedCity}/${store.id}`}>
                <img className="img-fluid rounded-3 mb-4 " src={store.pics[2].url} alt="" />
              </Link>
              <h5>{store.name}</h5>
              <p className="text-primary">
                {store.adress}, {store.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreComponent;
