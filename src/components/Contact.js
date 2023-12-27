import React from 'react';


const Contact = () => {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
      <div class="text-center mx-auto wow fadeInUp pb-2" >
                {/* <p className="section-title bg-white text-center text-primary px-3">Contact Us</p> */}
                <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
            </div>
        <div className="booking p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
            <h1 className="text-primary mb-4">Get In Touch</h1>
              <p className="mb-4">
              Whether you have questions, suggestions, or just want to say hello, we'd love to hear from you.  Your feedback is invaluable, and we're here to assist you in any way we can.
              </p>
              <div className="d-flex align-items-center mb-4">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: '50px', height: '50px' }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Mobile</h5>
                  <p className="mb-0">+212 66 66 66 66</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: '50px', height: '50px' }}>
                  <i className="fa fa-envelope-open text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Email</h5>
                  <p className="mb-0">info@example.com</p>
                </div>
              </div>
           
            </div>
            <div className="col-md-6">
              <h1 className="text-white mb-4">Contact For Any Query</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating " id="subject" data-target-input="nearest">
                      <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Subject" data-target="#date3" data-toggle="datetimepicker" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating " id="phone" data-target-input="nearest">
                      <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Subject" data-target="#date3" data-toggle="datetimepicker" />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>
                 
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: '100px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-outline-light w-100 py-3" type="submit">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
