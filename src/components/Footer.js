import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Company</h4>
            {/* eslint-disable-next-line */}
            <a className="btn btn-link" href="">About Us</a>
            {/* eslint-disable-next-line */}
            <a className="btn btn-link" href="">Contact Us</a>
            {/* eslint-disable-next-line */}
            <a className="btn btn-link" href="">Privacy Policy</a>
            {/* eslint-disable-next-line */}
            <a className="btn btn-link" href="">Terms & Condition</a>
            {/* eslint-disable-next-line */}
            <a className="btn btn-link" href="">FAQs & Help</a>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            {/* <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p> */}
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+212 66 66 66 66</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
            <div className="d-flex pt-2">
              {/* eslint-disable-next-line */}
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
              {/* eslint-disable-next-line */}
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
              {/* eslint-disable-next-line */}
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
              {/* eslint-disable-next-line */}
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Gallery</h4>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src="../../img/dress.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src="../../img/Culture.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src="../../img/riad.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src="../../img/moroccanWomen.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src="../../img/moroccanPottery.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid bg-light p-1" src="../../img/Leeban.jpg" alt="" />
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className=" col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>AtlasExplore</h1>
            </div>
            
            <div className="col-md-6 text-center text-md-end">
             <div className="footer-menu">
              {/* eslint-disable-next-line */}
                <a href="">Home</a>
                {/* eslint-disable-next-line */}
                <a href="">Foods</a>
                {/* eslint-disable-next-line */}
                <a href="">Clothes</a>
                {/* eslint-disable-next-line */}
                <a href="">Needs</a>
              </div>
            </div>
            <div className=" text-center mr-100">
            &copy; 
              World Cup2030© CopyrightSoftwareEngineersPartners 
            </div>
          </div>
        </div>
      </div>
      
    </div>

  );
};

export default Footer;
