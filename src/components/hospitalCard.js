import React from 'react';

const HospitalCard = ({ hospital }) => {
  return (
    <div className="card">
      <h5 className="card-header">{hospital.title}</h5>
      <div className="card-body">
        <p className="card-text">{hospital.address}</p>
        <p className="card-text">Phone: {hospital.phone}</p>
        <a href={hospital.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default HospitalCard;
