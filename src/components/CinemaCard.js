import React from 'react';

const CinemaCard = ({ cinema, onClick }) => {
  return (
    <div >
      <div
        className="service-item rounded pt-3 "
        style={{ height: 'auto' }} /* Hauteur maximale à partir de laquelle le défilement commencera */
        onClick={() => onClick(cinema)}
      >
        <div className="p-4">
        <img className="img-fluid rounded-3 mb-4 " src={cinema.image} alt="" />
          <h5>{cinema.title}</h5>
          <p>{cinema.address}</p>
          <p className="card-text"><b>Phone:</b> {cinema.phone}</p>
          <a
            href={cinema.url}
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

export default CinemaCard;