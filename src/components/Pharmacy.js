import React from 'react';

const Pharmacy = ({ pharmacy, onClick }) => {
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp " data-wow-delay="0.1s">
      <div className="service-item rounded pt-3 " onClick={() => onClick(pharmacy)}>
        <div className="p-4">
          <i className="fa fa-3x fa-clinic-medical text-primary mb-4"></i>
          <h5>{pharmacy.amenity}</h5>
          <p>{pharmacy.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
