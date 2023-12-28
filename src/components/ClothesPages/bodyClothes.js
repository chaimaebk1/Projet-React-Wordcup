// Body.js

import React from 'react';

const Body = () => {
  return (
   
    <div>
      <div class="container-fluid bg-primary py-5 mb-5 clothes-header">
        <div class="container py-5">
          <div class="row justify-content-center py-5">
            <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 class="text-white display-5 mb-3 animated slideInDown ">Moroccan clothes!</h1>
              <p class="fs-5 text-white mb-4 animated slideInDown">Moroccan traditional clothing, like the djellaba and kaftan for women,
                                                                  and the jellabiya for men, features vibrant colors, intricate details, 
                                                                  and a blend of Berber and Arab influences,
                                                                  reflecting the rich cultural heritage of the country.
              </p>
        
            </div>
          </div>
              
        </div>
        </div>
        <div className="container ">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">Discover our cultural attire</h6>
              <h1 className="">Find Authentic Styles Near You!</h1>
              {/* <h5 className="">
              Explore by city to unveil a variety of Moroccan traditional clothing stores. From vibrant markets to boutique shops, our platform has your cultural wardrobe needs covered. Discover the richness of Moroccan fashion right in your city!"        </h5> */}
            </div>
      </div>
      
    </div>
  );
};

export default Body;
