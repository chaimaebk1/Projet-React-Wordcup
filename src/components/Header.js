import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);

  const toggleNavbar = () => {
    setNavbarCollapsed(!isNavbarCollapsed);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
     
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+212 66 66 66 66</small>
              <small className="text-light"><i className="fa fa-envelope-open me-2"></i>info@example.com</small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i className="fab fa-youtube fw-normal"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
      <div className={`container-fluid position-fixed z-10000 p-0 ${isSticky ? 'sticky-top shadow-sm' : ''}`}>
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" class="navbar-brand p-0">
                <h1 class="text-primary m-0">
                <NavLink to="/" className="nav-link " activeClassName="active" exact>
                  <i class="fa fa-map-marker-alt me-3"></i>AtlasExplore
                </NavLink></h1>
                {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
            </a>
          <button
            type="button"
            className={`navbar-toggler  me-0 ${isNavbarCollapsed ? '' : 'collapsed'}`}
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded={!isNavbarCollapsed}
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active" exact>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/map" className="nav-link" activeClassName="active">
                  Map
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/clothes" className="nav-link" activeClassName="active">
                  Clothes
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/food" className="nav-link" activeClassName="active">
                  Food
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink to="/needs" className="nav-link" activeClassName="active">
                  Facilities
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" activeClassName="active">
                  Contact Us
                </NavLink>
              </li>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;