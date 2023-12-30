
import React from 'react';
import Header from '../Header2';
import Architect from './Architecture';
import Celebrations from './celebration';
import Cities from './Cities';

const Body = () => {
  return (
    <div>
      <Header/>
        <div className="container " style={{marginTop : '10%'}}>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h2 className=""><span className='text-primary'>Explore Morocco:</span> Immerse in Culture and Tradition</h2>
            </div>
            <div className="row g-5 align-items-center flex-one-column-reverse mt-4" >
              <div className="coll col-lg-61"  >
                {/* <img src='../../img/MarruecosMap.jpg' /> */}
                <img
                  className="img-fluid rounded-7"
                  src="../../img/MarruecosMap.jpg"
                  alt=""
                  style={{ width: '400px', height: '500px', objectFit: 'cover', borderRadius: '100%' }}
                />
              </div>
              <div className="col-lg-62 wow fadeInUp" data-wow-delay="0.3s" >
                <h6 className="section-title bg-white text-start pe-3 text-primary ">Geography and Landscape</h6>
                <br/> <br/>
                <p> &nbsp;&nbsp;&nbsp;
                  Welcome to Morocco, a country where nature's artistry unfolds across a canvas of diverse geography. Explore the majestic Atlas Mountains, 
                  carving through the heart of the land, offering breathtaking vistas and a peek into Berber traditions.
                </p>
                <p> &nbsp;&nbsp;&nbsp;
                  Venture south to encounter the enchanting Sahara Desert, a sea of golden dunes that stretch into the horizon. Experience the timeless allure of this vast expanse,
                  where starlit nights and the warmth of Berber hospitality create unforgettable memories.
                </p>
                <p> &nbsp;&nbsp;&nbsp;
                  Along the coastline, where the Atlantic Ocean meets the Mediterranean Sea, discover the charm of historic ports and picturesque beaches.
                  Feel the coastal breeze and immerse yourself in the maritime history that has shaped Morocco's identity.
                </p>  
                <p> &nbsp;&nbsp;&nbsp;
                  This is a country where every turn reveals a new facet of nature's beauty, from fertile plains to rolling hills, creating a mosaic of environments waiting to be explored. Let the Moroccan map guide your journey,
                  unveiling the remarkable landscapes that make Morocco a truly captivating destination.
                </p>  
              </div>         
            </div>
            <Architect/>
            <Celebrations/>
            <Cities/>
      </div>
      
    </div>
  );
};

export default Body;
