import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import HospitalCard from '../../components/hospitalCard';


const containerStyle = {
  margin: '30px',
  width: '100%',
  height: '600px',
};

const center = {
  lat: 35.7734573855575,   // Default center latitude
  lng: -5.840757051144302, // Default center longitude
};

const HospitalsTanger = () => {
  const [hospitalData, setHospitalData] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const url = 'https://q918z.wiremockapi.cloud/HospitalsTanger';
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
   
       
     
    <div className="row">
  
      <div className="col-lg-3 ml-20 mr-20 mt-20 overflow-auto" style={{ maxHeight: '600px' }} >
        {hospitalData.map((hospital, index) => (
          <HospitalCard key={index} hospital={hospital} onClick={handleCardClick} />
        ))}
      </div>
  <div className='col-lg-9'>
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
</div>
    </div>
  );
};

export default HospitalsTanger;
