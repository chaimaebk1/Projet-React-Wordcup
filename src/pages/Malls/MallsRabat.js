import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import MallCard from '../../components/mallCard';


const containerStyle = {
  margin: '30px',
  width: '100%',
  height: '600px',
};

const center = {
    lat: 34.01679609999999, // Default center latitude
    lng: -6.828217476618221, // Default center longitude
};

const MallsCasablanca = () => {
  const [mallData, setmallData] = useState([]);
  const [selectedmall, setSelectedmall] = useState(null);

  useEffect(() => {
    const fetchmallData = async () => {
      try {
        const url = 'https://q918z.wiremockapi.cloud/mallsRabat';
        const response = await fetch(url);
        const result = await response.json(); // Parse JSON
        setmallData(result); // Set state with the correct data https://q918z.wiremockapi.cloud/mallsCasa

        console.log('API Response:', result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchmallData();
  }, []);

  const handleCardClick = (mall) => {
    setSelectedmall(mall);
  };

  return (
   
       
     
    <div className="row">
  
      <div className="col-lg-3 ml-20 mr-20 mt-20 overflow-auto" style={{ maxHeight: '600px' }} >
        {mallData.map((mall, index) => (
          <MallCard key={index} mall={mall} onClick={handleCardClick} />
        ))}
      </div>
  <div className='col-lg-9'>
      <LoadScript googleMapsApiKey="AIzaSyA39oxS9elclB4YICCWNNRTQkIDIltxk3U">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {selectedmall && (
            <Marker
              position={{
                lat: parseFloat(selectedmall.latitude),
                lng: parseFloat(selectedmall.longitude),
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
</div>
    </div>
  );
};

export default MallsCasablanca;
