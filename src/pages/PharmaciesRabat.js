import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import PharmacyCard from '../components/Pharmacy';
import Body from "../components/bodyNeeds";
import Contact from '../components/ContactPages/Contact';

const containerStyle = {
  margin: '30px',
  width: '95%',
  height: '600px',
};

const center = {
  lat: 34.01679609999999, // Default center latitude
  lng: -6.828217476618221, // Default center longitude
};

const PharmaciesRabat = () => {
  const [pharmacyData, setPharmacyData] = useState([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  useEffect(() => {
    const fetchPharmacyData = async () => {
      try {
        const url = 'https://658480a94d1ee97c6bcfe0fe.mockapi.io/PharmaciesRabat';
        const response = await fetch(url);
        const result = await response.json(); // Parse JSON
        setPharmacyData(result); // Set state with the correct data

        console.log('API Response:', result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPharmacyData();
  }, []);

  const handleCardClick = (pharmacy) => {
    setSelectedPharmacy(pharmacy);
  };

  return (
   
       
    <div>
       <Body/>
      <div className="row g-4 ml-10 mr-10">
        {pharmacyData.map((pharmacy, index) => (
          <PharmacyCard key={index} pharmacy={pharmacy} onClick={handleCardClick} />
        ))}
      </div>

      <LoadScript googleMapsApiKey="AIzaSyA39oxS9elclB4YICCWNNRTQkIDIltxk3U">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {selectedPharmacy && (
            <Marker
              position={{
                lat: parseFloat(selectedPharmacy.latitude),
                lng: parseFloat(selectedPharmacy.longitude),
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
     
        <Contact/>
    </div>
  );
};

export default PharmaciesRabat;
