import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import HospitalCard from '../components/Hospital';
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

const HospitalsCasablanca = () => {
  const [hospitalData, setHospitalData] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const url = 'https://q918z.wiremockapi.cloud/HospitalsCasa';
        const response = await fetch(url);
        const result = await response.json(); // Parse JSON
        setHospitalData(result); // Set state with the correct data https://q918z.wiremockapi.cloud/HospitalsCasa

        console.log('API Response:', result);
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
      <div className="row g-4 ml-10 mr-10">
        {hospitalData.map((hospital, index) => (
          <HospitalCard key={index} hospital={hospital} onClick={handleCardClick} />
        ))}
      </div>

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

export default HospitalsCasablanca;
