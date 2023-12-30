
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Body = () => {
//   const [carouselData, setCarouselData] = useState(null);

  return (
    <div className="mt-5">
        <div className="row g-5 align-items-center flex-one-column-reverse " >
            <div className="col-lg-62 wow fadeInUp" data-wow-delay="0.3s" >
                <h6 className="section-title bg-white text-end text-primary ps-3">Architecture</h6>
                <p> &nbsp;&nbsp;&nbsp;
                Morocco's architectural allure is characterized by exquisite details such as "zellige" mosaic tiles, 
                adorning structures with mesmerizing geometric patterns. This ancient craft showcases the precision of Moroccan artisans and adds a vibrant 
                touch to the country's buildings and courtyards.
                </p>
                <p> &nbsp;&nbsp;&nbsp;
                  Step inside a traditional Moroccan home to discover the inviting "salon," a central space adorned with plush cushions and traditional lamps,
                  offering a perfect blend of comfort and aesthetics. Meanwhile, the tranquil "taarija" courtyard, with its lush greenery and intricately carved arches,
                  serves as a peaceful sanctuary within the bustling medinas. These architectural elements, from zellige to the welcoming salon and serene taarija, 
                  collectively define the elegance and timeless beauty of Moroccan design.
                </p>
            </div>  
            <div className="coll col-lg-61 "  >
                <Carousel data-bs-theme="dark">
                    <Carousel.Item className='carousel-item'>
                        <div className="">
                            <img
                                className="d-block mx-auto w-100 h-75"
                                src='../../img/moroccanArch.jpg'
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
                                src='../../img/moroccanSalon.jpg'
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
                                    src='../../img/taarija.jpg'
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
                                src='../../img/moroccanTin.jpg'
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
        </div>
 
    </div>
  );
};

export default Body;
