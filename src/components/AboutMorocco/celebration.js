
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Body = () => {
//   const [carouselData, setCarouselData] = useState(null);

  return (
    <div className="mt-5">
        <div className="row g-5 align-items-center flex-one-column-reverse " >
              
            <div className="coll col-lg-61 "  >
                <Carousel data-bs-theme="dark">
                    <Carousel.Item className='carousel-item'>
                        <div className="">
                            <img
                                className="d-block mx-auto w-100 h-75"
                                src='../../img/tbourida.jpg'
                                alt="First slide"
                                style={{maxHeight : "450px", borderRadius : '10px'}}
                            />
                        </div>
                    <Carousel.Caption>
                        <p className=''></p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item'>
                        <div className="">
                            <img
                                className="d-block mx-auto w-100 h-75"
                                src='../../img/Gnaoua.jpg'
                                alt="First slide"
                                style={{maxHeight : "450px", borderRadius : '10px'}}
                            />
                        </div>
                        <Carousel.Caption>
                            <p className=''></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carousel-item'>
                            <div className="">
                                <img
                                    className="d-block mx-auto w-100 h-75"
                                    src='../../img/oud.jpg'
                                    alt="First slide"
                                    style={{maxHeight : "450px", borderRadius : '10px'}}
                                />
                            </div>
                        <Carousel.Caption>
                            <p className=''></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="col-lg-62 wow fadeInUp" data-wow-delay="0.3s" >
                <h6 className="section-title bg-white text-start pe-3 text-primary "> Festivals and Celebrations </h6>
                <p> &nbsp;&nbsp;&nbsp;
                    Morocco's cultural tapestry comes alive through vibrant festivals. At the "Gnaoua Festival" in Essaouira,
                    the mystical beats of Gnaoua music create a rhythmic harmony of African, Berber, and Arab influences.
                </p>
                <p> &nbsp;&nbsp;&nbsp;
                    For an equestrian spectacle, witness "Tbourida" or Fantasia, where mounted horsemen in resplendent attire perform synchronized charges,
                    embodying Morocco's rich equestrian heritage.
                </p>
                <p> &nbsp;&nbsp;&nbsp;
                    The "Tarab Andalusi" festival transports audiences with Andalusian music's intricate melodies and poetic lyrics, 
                    evoking a sense of cultural nostalgia.
                </p>
                <p> &nbsp;&nbsp;&nbsp;
                    In Sale, the "Eid Al-Bidaoui" or Ebidat Rma festival marks the end of Ramadan with traditional dance, music,
                    and vibrant processions, uniting locals and visitors in joyous celebrations. Morocco's festivals offer a kaleidoscope of experiences, 
                    immersing visitors in the heart and soul of this captivating nation.
                </p>
            </div>                        
        </div>
 
    </div>
  );
};

export default Body;
