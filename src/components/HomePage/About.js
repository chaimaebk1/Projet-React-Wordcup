import React from 'react';

const About = () => {

return (
  <div>
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
         <div className="col-lg-6">
              <div className="row g-2">
                <div className="col-6 position-relative wow fadeIn" data-wow-delay="0.7s" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeIn' }}>
                  <div className="about-experience bg-primary rounded-7">
                    <h1 className="display-1 mb-0">25</h1>
                    <small className="fs-5 fw-bold">Years Experience</small>
                  </div>
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn' }}>
                  <img className="img-fluids rounded-7" src="../img/aboutsmall.jpg" alt="Service 1" />
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn' }}>
                  <img className="img-fluids rounded-7" src="../img/couple.jpg" alt="Service 2" />
                </div>
                <div className="col-6 wow fadeIn" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn' }}>
                  <img className="img-fluids rounded-7" src="../img/chefchaoune.jpg" alt="Service 3" />
                </div>
              </div>
            </div>
              

        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
            <h1 className="mb-4">
              Welcome to <span className="text-primary">AtlasExplore</span>
            </h1>
            <p className="mb-4">
            Your ultimate companion for exploring the vibrant culture of Morocco during the World Cup festivities.
            </p>
            <p className="mb-4">
            Our passion lies in bringing you a virtual journey that transcends boundaries, allowing you to immerse yourself in the enchanting world of Moroccan traditions.  </p>
            <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>mapping
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>Fashion Exploration
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>Culinary Delights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>Hospitals
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>pharmacies
                  </p>
                </div>
              </div>
              <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Explore More</a>
            </div>
    
          </div>
    </div>
  </div>
  <div>
  
  </div>
   
  </div>
);
};


export default About;
