import React, { useRef } from 'react';

const Contact = () => {
  return (
    <div>
    <div className="sub-banner">
      <section className="banner-section">
        <figure className="mb-0 bgshape">
          <img src="assets/images/homebanner-bgshape.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="banner_content">
                <h1>Contact Us</h1>
                <p>Experience the power of a large and thriving fintech ecosystem, connecting you with the resources and people you need to achieve your financial goals.</p>
              </div>
            </div>
          </div>
        </div>    
      </section>
      <div className="box">
        <span className="mb-0 text-size-16">Home</span><span className="mb-0 text-size-16 dash">-</span><span className="mb-0 text-size-16 box_span">Contact</span>
      </div>
    </div>
    {/*Contact*/}
    <section className="message-section text">
      <div className="container">
        <figure className="element1 mb-0">
          <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="" />
        </figure>
        <div className="row position-relative">
          <div className="col-12">
            <div className="content">
              <h6>Let's Contact</h6>
              <h2>Get in Touch with Us</h2>
              <figure className="element3 mb-0">
                <img src="assets/images/what-we-do-element.png" alt="" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="message_content" data-aos="fade-up">
              <form id="contactpage" method="POST" action="https://html.designingmedia.com/repay/contact-form.php">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group mb-0"> 
                      <h4>Name:</h4>
                      <input type="text" className="form_style" placeholder="Enter Your Name" name="name" /> 
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-0">
                      <h4>Email:</h4>
                      <input type="email" className="form_style" placeholder="Enter Your Email Address" name="emailid" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-0">
                      <h4>Phone:</h4>
                      <input type="tel" className="form_style" placeholder="Enter Your Phone Number" name="phone" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-0"> 
                      <h4>Message:</h4>   
                      <textarea className="form_style" placeholder="Add Your Comment" rows={3} name="msg" defaultValue={""} />
                    </div>
                  </div>
                </div>
                <div className="manage-button text-center">
                  <button type="submit" className="submit" disabled>Submit</button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    {/* need more help? */}
    <section className="need-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content" data-aos="fade-right">
              <h6>NEED MORE HELP?</h6>
              <h2>Leading, Trusted. Enabling growth.</h2>
              <p className="text-size-18">Join a global network of investors and businesses 
              and take advantage of the opportunities that come with being part of a large community.</p>
            </div>
          </div>
        </div>
        <div className="row position-relative">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="service1">
              <figure className="img img1">
                <img src="assets/images/need-sales-icon.png" alt="" className="img-fluid" />
              </figure>
              <h3>Sales</h3>
              <p className="text-size-18">Maximize your sales potential with our fintech platform. </p>
              <a href="/contact" className="btn">Contact Sales</a>
            </div>
          </div>
          <figure className="arrow1 mb-0" data-aos="fade-down">
            <img src="assets/images/need-arrow1.png" className="img-fluid" alt="" />
          </figure>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="service1 service2">
              <figure className="img img2">
                <img src="assets/images/need-more-icon2.png" alt="" className="img-fluid" />
              </figure>
              <h3>Help &amp; Support</h3>
              <p className="text-size-18">We're available around the clock to answer your questions </p>
              <a href="/contact" className="btn">Get Support</a>
            </div>
          </div>
          <figure className="arrow2 mb-0" data-aos="fade-up">
            <img src="assets/images/need-arrow-2.png" className="img-fluid" alt="" />
          </figure>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="service1">
              <figure className="img img3">
                <img src="assets/images/need-more-icon-3.png" alt="" className="img-fluid" />
              </figure>
              <h3>Article &amp; News</h3>
              <p className="text-size-18">Stay informed about the latest news and trends in finance with our curated articles </p>
              <a href="/contact" className="btn">Read Article</a>
            </div>
          </div>
        </div>
      </div>
      <figure className="mb-0 need-layer">
        <img src="assets/images/need-layer.png" alt="" className="img-fluid" />
      </figure>
    </section>
    {/* Partner */}
  </div>

  );
}

export default Contact;
