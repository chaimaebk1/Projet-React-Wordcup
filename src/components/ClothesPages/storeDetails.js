// StoreDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


const StoreDetails = () => {
  // const { storeId } = useParams();
  // const { selectedCity } = useParams();
  const { selectedCity, storeId } = useParams();
  const [storeData, setStoreData] = useState(null);
  const [carouselData, setCarouselData] = useState(null);

  const containerStyle = {
    margin: '30px',
    width: '60%',
    height: '600px',
  };
  
  const center = storeData
  ? {
      lat: storeData.latitude ? parseFloat(storeData.latitude) : 34.01679609999999,
      lng: storeData.longitude ? parseFloat(storeData.longitude) : -6.828217476618221,
    }
  : {
      lat: 34.01679609999999,
      lng: -6.828217476618221,
    };


  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        let url;
        if (selectedCity === 'Casablanca' || selectedCity === 'Marrakech') {
          url = `https://657af274394ca9e4af132252.mockapi.io/Clothes/${selectedCity}/${storeId}`;
        } else {
          url = `https://658defad7c48dce94739dd6a.mockapi.io/Clothes/${selectedCity}/${storeId}`;
        }
        //  url = `https://657af274394ca9e4af132252.mockapi.io/Clothes/Casablanca/${storeId}`;
        const response = await fetch(url);
        const result = await response.json();
        setStoreData(result);

        console.log('Store Details API Response:', result);

        if (result && result.pics) {
            setCarouselData(result.pics);
          }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStoreDetails();
  }, [storeId, selectedCity]);


  if (!storeData) {
    return <div>Loading...</div>;
  }

  return (
    <div >
        <div className="container-xxl py-5">
            <div className="container">
            
                <div className="row g-5 align-items-center flex-one-column-reverse " >
                        {/* <h1>{storeData.city || 'Store Name Unavailable'}</h1> */}

                        <div className="coll col-lg-61"  style={{maxHeight : "450px", marginTop : "10%"}}>
                            <Carousel data-bs-theme="dark">
                                {carouselData && carouselData.map((item, index) => (
                                <Carousel.Item className='carousel-item'>
                                    <div className="">
                                        <img
                                            className="d-block mx-auto w-100 h-75"
                                            src={item.url}
                                            alt="First slide"
                                            style={{maxHeight : "450px"}}
                                        />
                                    </div>
                                <Carousel.Caption>
                                    <p className=''>{item.caption}</p>
                                </Carousel.Caption>
                                </Carousel.Item>

                                ))}
                            </Carousel>
                        </div>
                        <div className="col-lg-62 wow fadeInUp" data-wow-delay="0.3s" >
                          <h3 className="bg-white pe-3 text-primary ">{storeData.name}</h3>
                          <p ><span className='fw-bolder'>Adress : </span> {storeData.adress} , {storeData.city}</p>
                          <p ><span className='fw-bolder'>Phone number : </span> {storeData.number}</p> 
                          <p className="mb-4"> <span className='fw-bolder'>Description : </span> 
                            {storeData.description}
                          </p>   
                      </div>  
                      {storeData && (
                        <LoadScript googleMapsApiKey="AIzaSyA39oxS9elclB4YICCWNNRTQkIDIltxk3U">
                          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                            {storeData.latitude && storeData.longitude && (
                              <Marker
                                position={{
                                  lat: parseFloat(storeData.latitude),
                                  lng: parseFloat(storeData.longitude),
                                }}
                              />
                            )}
                          </GoogleMap>
                        </LoadScript>
                      )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default StoreDetails;
