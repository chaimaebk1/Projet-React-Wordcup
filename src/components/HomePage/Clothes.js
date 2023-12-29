import React from 'react';
import { NavLink } from 'react-router-dom';

const Clothes = () => {
  return (
    <div>
     <div className="container-xxl py-5">
      <div className="container">
            
        <div className="row g-5 align-items-center flex-one-column-reverse " >
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-end text-primary ps-3">Clothes</h6>
            {/* <h1 className="mb-4">Embark on a journey through Morocco's rich heritage, from elaborate kaftans to flowing djellabas!</h1> */}
            <p className="mb-4"> &nbsp;&nbsp;&nbsp;
                Embark on a journey through Morocco's rich heritage,
                from elaborate kaftans to flowing djellabas. Our site guides you through traditional 
                clothing and reveals enchanting locations that define the beauty of Morocco.
                Experience the perfect blend of tradition and modernity, both in attire and the remarkable places
                that make Morocco truly unique.
            </p>
            <p className="mb-4"> &nbsp;&nbsp;&nbsp;
              Moroccan traditional clothing is a captivating blend of Arab, 
              Berber, and Andalusian influences, showcasing the country's rich history.
              The iconic djellaba, a loose robe with a pointed hood, is a pervasive symbol,
              adorned with vibrant colors and intricate embroidery. Reflecting the diversity
              of Morocco's landscapes and artistic heritage, these garments are a timeless expression of 
              cultural pride and craftsmanship.
            </p>
            {/* <p className="mb-4">Our site guides you through traditional clothing and reveals enchanting locations that define the beauty of Morocco. Experience the perfect blend of tradition and modernity, both in attire and the remarkable places that make Morocco truly unique.</p> */}
            <NavLink to="/clothes" className="nav-link" activeClassName="active">
              {/* eslint-disable-next-line */}
              <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" >Explore More</a>
            </NavLink>
          </div>
          <div className="col-lg-6 ">
          
          <div
            className="rounded overflow-hidden h-100 wow fadeInUp "
            data-wow-delay="0.1s"
            style={{ minHeight: '400px', '@media (max-width: 990px)': { paddingLeft: '60px' }}}
          >
              <img
                className="img-fluid rounded-7"
                src="../../img/caftann.jpg"
                alt=""
                style={{ width: '400px', height: '500px', objectFit: 'cover', borderRadius: '100%', marginLeft : '120px' }}
              />
            </div>
            </div>
       
        </div>
      </div>
    </div>
    <div>
    
    </div>
    </div>
  );
};

export default Clothes;