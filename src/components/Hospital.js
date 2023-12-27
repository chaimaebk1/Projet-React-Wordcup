import React from 'react';

const Hospital = ({ hospital, onClick }) => {
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp " data-wow-delay="0.1s">
      <div className="service-item rounded pt-3 " onClick={() => onClick(hospital)}>
        <div className="p-4">
          <i className="fa fa-3x fa-hospital text-primary mb-4"></i>
          <h5>{hospital.amenity}</h5>
          <p>{hospital.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
