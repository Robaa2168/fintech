import React, { useRef } from 'react';

const Contact = () => {
  return (
    <div>
      <div className="sub-banner">
        <section className="banner-section">
          <figure className="mb-0 bgshape">
            <img src="assets/images/homebanner-bgshape.png" alt="Background shape" className="img-fluid" />
          </figure>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_content">
                  <h1>Start Your Digital Transformation</h1>
                  <p>Connect with our technology experts to discuss custom solutions that drive business growth and operational efficiency.</p>
                </div>
              </div>
            </div>
          </div>    
        </section>
        <div className="box">
          <span className="mb-0 text-size-16">Home</span><span className="mb-0 text-size-16 dash">-</span><span className="mb-0 text-size-16 box_span">Contact</span>
        </div>
      </div>

      {/* Contact Section */}
      <section className="message-section text">
        <div className="container">
          <figure className="element1 mb-0">
            <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="Decorative element" />
          </figure>
          <div className="row position-relative">
            <div className="col-12">
              <div className="content">
                <h6>Technology Consultation</h6>
                <h2>Transform Your Business Digitally</h2>
                <figure className="element3 mb-0">
                  <img src="assets/images/what-we-do-element.png" alt="Decorative element" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="message_content" data-aos="fade-up">
                <form id="techConsultation" method="POST" action="https://api.ravelintellitech.com/contact">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group mb-0"> 
                        <h4>Your Name:</h4>
                        <input type="text" className="form_style" placeholder="John Doe" name="name" required /> 
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-0">
                        <h4>Business Email:</h4>
                        <input type="email" className="form_style" placeholder="contact@yourcompany.com" name="email" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-0">
                        <h4>Contact Number:</h4>
                        <input type="tel" className="form_style" placeholder="+1 234 567 890" name="phone" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-0">
                        <h4>Service Interest:</h4>
                        <select className="form_style" name="service" required>
                          <option value="">Select Service</option>
                          <option value="web-dev">Web Development</option>
                          <option value="ecommerce">E-Commerce Solutions</option>
                          <option value="software">Custom Software</option>
                          <option value="cloud">Cloud Solutions</option>
                          <option value="consulting">IT Consulting</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-0"> 
                        <h4>Project Details:</h4>   
                        <textarea className="form_style" placeholder="Describe your technology needs..." rows={5} name="message" required defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="manage-button text-center">
                    <button type="submit" className="submit">Schedule Free Consultation</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contact-info" data-aos="fade-left">
                <div className="info-card">
                  <h3>Global Headquarters</h3>
                  <p className="text-size-18">
                    RAVEL GLOBAL INTELLITECH<br />
                    Registered Number: BN-ZMCVPR5K<br />
                    Nairobi, Kenya<br />
                    Email: <a href="mailto:solutions@ravelintellitech.com">solutions@ravelintellitech.com</a><br />
                    Phone: <a href="tel:+254700000000">+254 700 000 000</a>
                  </p>
                </div>
                <div className="operation-hours">
                  <h4>Operation Hours</h4>
                  <p className="text-size-16">
                    Mon-Fri: 8:00 AM - 6:00 PM EAT<br />
                    Sat: 9:00 AM - 2:00 PM EAT<br />
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="need-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content" data-aos="fade-right">
                <h6>ADDITIONAL SUPPORT</h6>
                <h2>Comprehensive Technology Support</h2>
                <p className="text-size-18">Access 24/7 technical assistance, implementation guidance, and strategic IT consulting through our expert channels.</p>
              </div>
            </div>
          </div>
          <div className="row position-relative">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="service1">
                <figure className="img img1">
                  <img src="assets/images/need-sales-icon.png" alt="Solutions Inquiry" className="img-fluid" />
                </figure>
                <h3>Solutions Inquiry</h3>
                <p className="text-size-18">Discuss custom software development and digital transformation strategies.</p>
                <a href="/solutions" className="btn">Explore Solutions</a>
              </div>
            </div>
            <figure className="arrow1 mb-0" data-aos="fade-down">
              <img src="assets/images/need-arrow1.png" className="img-fluid" alt="Decorative arrow" />
            </figure>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="service1 service2">
                <figure className="img img2">
                  <img src="assets/images/need-more-icon2.png" alt="Technical Support" className="img-fluid" />
                </figure>
                <h3>Technical Support</h3>
                <p className="text-size-18">24/7 system maintenance and emergency technical assistance.</p>
                <a href="/support" className="btn">Get Immediate Help</a>
              </div>
            </div>
            <figure className="arrow2 mb-0" data-aos="fade-up">
              <img src="assets/images/need-arrow-2.png" className="img-fluid" alt="Decorative arrow" />
            </figure>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="service1">
                <figure className="img img3">
                  <img src="assets/images/need-more-icon-3.png" alt="Tech Insights" className="img-fluid" />
                </figure>
                <h3>Tech Insights</h3>
                <p className="text-size-18">Latest trends in web development, cloud solutions, and digital innovation.</p>
                <a href="/insights" className="btn">Read Articles</a>
              </div>
            </div>
          </div>
        </div>
        <figure className="mb-0 need-layer">
          <img src="assets/images/need-layer.png" alt="Support background" className="img-fluid" />
        </figure>
      </section>
    </div>
  );
}

export default Contact;