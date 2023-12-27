import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import axios from 'axios';
import HospitalCard from '../components/hospitalCard';
import Body from "../components/bodyNeeds";
import Contact from '../components/Contact';

const containerStyle = {
  margin: '30px',
  width: '95%',
  height: '600px',
};

const center = {
  lat: 34.01679609999999, // Default center latitude
  lng: -6.828217476618221, // Default center longitude
};

const PharmaciesCasablanca = () => {
  const [hospitalData, setHospitalData] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const options = {
          method: 'POST',
          url: 'https://google-api31.p.rapidapi.com/map',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '067d986cffmshe91e183975a1289p1e0d3djsnb73769da8460', // Replace with your RapidAPI key
            'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
          },
          data: {
            text: 'hospital', // Search for hospitals
            place: 'Casablanca', // Specify the city or location here
            street: '',
            city: '',
            country: '',
            state: '',
            postalcode: '',
            latitude: '',
            longitude: '',
            radius: ''
          }
        };

        const response = await axios.request(options);
        setHospitalData(response.data.hours);
        console.log('API Response:', response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHospitalData();
  }, []);

  const handleCardClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  return (
    <div>
      <Body/>
      {hospitalData && hospitalData.length > 0 && (
  <div className="row g-4 ml-10 mr-10">
    {hospitalData.map((hospital, index) => (
      <HospitalCard key={index} hospital={hospital} onClick={handleCardClick} />
    ))}
  </div>
)}

      <LoadScript googleMapsApiKey="AIzaSyA39oxS9elclB4YICCWNNRTQkIDIltxk3U">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {selectedHospital && (
            <Marker
              position={{
                lat: parseFloat(selectedHospital.latitude),
                lng: parseFloat(selectedHospital.longitude),
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>

      <Contact/>
    </div>
  );
};

export default PharmaciesCasablanca;
