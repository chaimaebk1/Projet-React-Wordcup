import React from 'react';

const Foods = () => {
  return (
    <div>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 ">
            <div className="rounded overflow-hidden h-100 " style={{ minHeight: '400px'}}>
              <img
                className="img-fluid rounded-7"
                src="../../img/food.jpeg"
                alt=""
                style={{ width: '400px', height: '500px', objectFit: 'cover', borderRadius: '100%' }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s" >
              <h6 className="section-title bg-white text-start pe-3 text-primary ">FOOD</h6>
              <br/> <br/>
              <p className="mb-4"> &nbsp;&nbsp;&nbsp;
                Embark on a culinary odyssey with Moroccan cuisine, celebrated as one of the world's culinary treasures.
                Our site unravels the secrets of this gastronomic journey, from the hearty tagines to the delicate sweetness 
                of pastries, inviting you to savor a symphony of tastes. Immerse yourself in the authentic tales behind each dish,
                a perfect fusion of heritage and modernity. Join us in celebrating the richness of Moroccan food,
                a globally recognized culinary experience that captivates the senses.
                From aromatic spices like cumin and coriander to iconic dishes like couscous and street food delights such as bissara and msemen,
                every bite tells a story. Conclude your culinary adventure with traditional mint tea, a symbol of Moroccan hospitality, 
                and experience the timeless allure of this vibrant and diverse culinary landscape.
              </p>    <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Explore More</a>
          </div>
         
       
        </div>
      </div>
    </div>
    <div>
    
    </div>
    </div>
  );
};

export default Foods;