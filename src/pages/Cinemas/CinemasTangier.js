import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import CinemaCard from '../../components/CinemaCard';


const containerStyle = {
  margin: '30px',
  width: '100%',
  height: '600px',
};

const center = {
  lat: 35.7734573855575,   // Default center latitude
  lng: -5.840757051144302, // Default center longitude
};

const CinemasCasablanca = () => {
  const [cinemaData, setcinemaData] = useState([]);
  const [selectedcinema, setSelectedcinema] = useState(null);

  useEffect(() => {
    const fetchcinemaData = async () => {
      try {
        const url = 'https://q918z.wiremockapi.cloud/cinemasTanger';
        const response = await fetch(url);
        const result = await response.json(); // Parse JSON
        setcinemaData(result); // Set state with the correct data https://q918z.wiremockapi.cloud/cinemasCasa

        console.log('API Response:', result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchcinemaData();
  }, []);

  const handleCardClick = (cinema) => {
    setSelectedcinema(cinema);
  };

  return (
   
       
     
    <div className="row">
  
      <div className="col-lg-3 ml-20 mr-20 mt-20 overflow-auto" style={{ maxHeight: '600px' }} >
        {cinemaData.map((cinema, index) => (
          <CinemaCard key={index} cinema={cinema} onClick={handleCardClick} />
        ))}
      </div>
  <div className='col-lg-9'>
      <LoadScript googleMapsApiKey="AIzaSyA39oxS9elclB4YICCWNNRTQkIDIltxk3U">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {selectedcinema && (
            <Marker
              position={{
                lat: parseFloat(selectedcinema.latitude),
                lng: parseFloat(selectedcinema.longitude),
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
</div>
    </div>
  );
};

export default CinemasCasablanca;
