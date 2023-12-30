import React from 'react';

const Cities = () => {
  return (
        <div className="container mt-5">
        <div class="text-center mx-auto wow fadeInUp pb-2" >
        <h6 className="section-title bg-white text-center text-primary px-3">Cities of Morocco</h6><br/>
        <ps>
Morocco is home to a diverse array of cities, each with its own unique charm and character. Here are some of the key cities in Morocco</ps>
        </div>
        
        <div className="row gy-5 gx-4">
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="product-item">
                            <div className="position-relative">
                                {/* <img className="img-fluid" src="img/product-1.jpg" alt=""> */}
                                <img className="img-fluid " src="../../img/Casablanca.jpg" alt="" />
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5" href="">Casablanca</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="product-item">
                            <div className="position-relative">
                                {/* <img className="img-fluid" src="img/product-1.jpg" alt=""> */}
                                <img className="img-fluid " src="../../img/Rabat.jpg" alt="" />
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5" href="">Rabat</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="product-item">
                            <div className="position-relative">
                                {/* <img className="img-fluid" src="img/product-1.jpg" alt=""> */}
                                <img className="img-fluid " src="../../img/Fes.jpg" alt="" />
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5" href="">Fes</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="product-item">
                            <div className="position-relative">
                                {/* <img className="img-fluid" src="img/product-1.jpg" alt=""> */}
                                <img className="img-fluid " src="../../img/Chefchaouen.jpg" alt="" />
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5" href="">Chefchaouen</a>
                            </div>
                        </div>
                    </div>
    </div>
    </div>

    
  );
};

export default Cities;
