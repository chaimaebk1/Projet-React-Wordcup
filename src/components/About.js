import React from 'react';

const About = () => {

return (
  <div>
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
      <div className="col-lg-6 ">
        
      <div className="rounded overflow-hidden h-100 " style={{ minHeight: '400px'}}>
              <img
                className="img-fluid rounded-7"
  src="../../img/about.jpg"
  alt=""
  style={{ width: '400px', height: '500px', objectFit: 'cover', borderRadius: '100%' }}
/>
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
