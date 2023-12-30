import React from 'react';

const MallCard = ({ mall, onClick }) => {
  return (
    <div >
      <div
        className="service-item rounded pt-3 "
        style={{ height: 'auto' }} /* Hauteur maximale à partir de laquelle le défilement commencera */
        onClick={() => onClick(mall)}
      >
        <div className="p-4">
          <i className="fa fa-3x fa-shopping-bag text-primary mb-4"></i>
          <h5>{mall.title}</h5>
          <p>{mall.address}</p>
          <p className="card-text"><b>Phone:</b> {mall.phone}</p>
          <a
            href={mall.url}
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

export default MallCard;