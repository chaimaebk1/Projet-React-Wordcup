import React, { useState } from 'react';
import HospitalsRabat from '../pages/HospitalsRabat'; 
import HospitalsCasablanca from '../pages/HospitalsCasablanca';
import HospitalsMarrakech from '../pages/HospitalsMarrakech';
import HospitalsTanger from '../pages/HospitalsTanger';


const SearchBar = () => {
  
  const [selectedType, setSelectedType] = useState('Hospitals');
  const [selectedCity, setSelectedCity] = useState('Rabat');
  const [showResults, setShowResults] = useState(false);

  const handleTypeChange = (event) => {
    const newType = event.target.value;
    console.log('New Type:', newType);
    setSelectedType(newType);
  };

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    console.log('New City:', newCity);
    setSelectedCity(newCity);
  };

  const handleSearch = () => {
    console.log('Selected Type:', selectedType);
    console.log('Selected City:', selectedCity);

    // Use navigate to navigate to the desired page
    setShowResults(true); 
  };
  const components = {
    HospitalsRabat: HospitalsRabat,
    HospitalsCasablanca: HospitalsCasablanca,
    HospitalsMarrakech: HospitalsMarrakech,
    HospitalsTanger: HospitalsTanger,

    
    // Ajoutez d'autres associations de composants selon les sélections possibles
  };

  const SelectedComponent = components[`${selectedType}${selectedCity}`];

  return (
    <div className="container-xxl py-5">
      <div className="container pb-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Explore Your Needs</h6>
          <h1 className="mb-5">Find Everything You Need!</h1>
          <h5 className="mb-4">
            Search by city to discover a range of services including hospitalsand other essential needs. We've got you covered!
          </h5>
        </div>
        <div className="mt-4 position-relative w-75 mx-auto animated slideInDown d-flex align-items-center">
          {/* Dropdown for selecting type */}
          <select
            className="form-select border-1 rounded-pill py-3 ps-4 pe-5 me-2"
            value={selectedType}
            onChange={handleTypeChange}
          >
            <option value="Hospitals">Hospitals</option>
           
           
            {/* Add more options as needed */}
          </select>

          {/* Dropdown for selecting city */}
          <select
            className="form-select border1 rounded-pill py-3 ps-4 pe-5 me-2"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="Rabat">Rabat</option>
            <option value="Tanger">Tanger</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Marrakech">Marrakech</option>
            {/* Add more options as needed */}
          </select>
          <button
            type="button"
            className="btn btn-primary rounded-pill py-2 px-4"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        
      </div><div>
        {showResults && SelectedComponent && <SelectedComponent />}
      </div>
    </div>
  );
};

export default SearchBar;
