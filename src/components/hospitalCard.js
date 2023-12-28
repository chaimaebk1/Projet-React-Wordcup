import React from 'react';

const HospitalCard = ({ hospital, onClick }) => {
  return (
    <div >
      <div
        className="service-item rounded pt-3 "
        style={{ height: 'auto' }} /* Hauteur maximale à partir de laquelle le défilement commencera */
        onClick={() => onClick(hospital)}
      >
        <div className="p-4">
          <i className="fa fa-3x fa-hospital text-primary mb-4"></i>
          <h5>{hospital.amenity}</h5>
          <p>{hospital.address}</p>
          <p className="card-text"><b>Phone:</b> {hospital.phone}</p>
          <a
            href={hospital.website}
            target="_blank"
            rel="noopener noreferrer"
            className= "d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"> 
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;