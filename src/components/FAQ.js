import React, { useRef } from 'react';

const Questions = () => {
  return (
    <div>
        {/* Sub-Banner */}
        <div className="sub-banner">
          <section className="banner-section">
            <figure className="mb-0 bgshape">
              <img src="assets/images/homebanner-bgshape.png" alt="" className="img-fluid" />
            </figure>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="banner_content">
                    <h1>Faq</h1>
                    <p>Get access to the most comprehensive suite of financial tools, used by millions of people worldwide.</p>
                  </div>
                </div>
              </div>
            </div>    
          </section>
          <div className="box">
            <span className="mb-0 text-size-16">Home</span><span className="mb-0 text-size-16 dash">-</span><span className="mb-0 text-size-16 box_span">Faq</span>
          </div>
        </div>
        {/*FAQ section*/}
        <section className="faq-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="subheading">
                  <h6>General Questions</h6>
                  <h2>Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="faq" data-aos="fade-up">
                  <div className="row">
                    <div className="col-12">
                      <div className="accordian-section-inner position-relative">
                        <div className="accordian-inner">
                          <div id="accordion1">
                            <div className="accordion-card">
                              <div className="card-header" id="headingOne">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                  <h4>What is Ravelmobile?</h4>
                                </a>
                              </div>
                              <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Ravelmobile is a comprehensive fintech platform that provides a range of financial tools and resources to help you manage your finances, grow your wealth, and achieve your financial goals.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingTwo">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  <h4>Is Ravelmobile secure?</h4>
                                </a>
                              </div>
                              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Yes, Ravelmobile is committed to providing advanced security features and encryption to keep your data safe from fraud and theft. 
                                  We use the latest technology and best practices to ensure that your finances are always secure.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingThree">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  <h4>What types of payments can I make with Ravelmobile?</h4>
                                </a>
                              </div>
                              <div id="collapseThree" className="collapse" aria-labelledby="headingThree">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">With Ravelmobile, you can make a wide range of payments, including bill payments, international payments, and person-to-person transfers.
                                   Our payment management tools make it easy for you to manage your payments from one centralized platform.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingFour">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                  <h4> How do I sign up for Ravelmobile?</h4>
                                </a>
                              </div>
                              <div id="collapseFour" className="collapse" aria-labelledby="headingFour">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0"> You can sign up for Ravelmobile on our website or through our mobile app.
                                   Simply provide your basic information, and you'll be ready to start managing your finances in no time</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="faq-content" data-aos="fade-up">
                  <div className="row">
                    <div className="col-12">
                      <div className="accordian-section-inner position-relative">
                        <div className="accordian-inner">
                          <div id="accordion2">
                            <div className="accordion-card">
                              <div className="card-header" id="headingFive">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                  <h4>Does Ravelmobile offer investment services?</h4>
                                </a>
                              </div>
                              <div id="collapseFive" className="collapse" aria-labelledby="headingFive">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Yes, Ravelmobile offers a range of investment services, including personalized investment strategies, market insights, and expert advice from our team of financial experts.
                                   We're committed to helping you grow your wealth and achieve your financial goals.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingSix">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                  <h4>What type of customer support does Ravelmobile offer?</h4>
                                </a>
                              </div>
                              <div id="collapseSix" className="collapse" aria-labelledby="headingSix">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Ravelmobile offers expert customer support through a variety of channels, including phone, email, and chat. Our support team is available 24/7 to answer
                                   your questions and provide guidance, ensuring that you have a smooth experience using our platform.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingSeven">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                  <h4>What types of rewards can I earn with Ravelmobile's credit and debit cards?</h4>
                                </a>
                              </div>
                              <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Ravelmobile offers a range of rewards programs, including cashback, airline miles, and points. You can choose the rewards
                                   program that best fits your needs and earn valuable rewards for every purchase you make.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingEight">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                  <h4> Is there a fee for using Ravelmobile?</h4>
                                </a>
                              </div>
                              <div id="collapseEight" className="collapse" aria-labelledby="headingEight">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Ravelmobile offers a range of pricing options, including a free basic plan and premium plans with additional features and benefits. Our pricing is transparent and affordable, and we're committed to providing you with the best value for your money.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <p className="text-size-18">Join a global network of investors and businesses and take advantage of the opportunities that come with being part of a large community.</p>
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
                  <p className="text-size-18">Maximize your sales potential with our fintech platform.</p>
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
                  <p className="text-size-18">We're available around the clock to answer your questions</p>
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
                  <p className="text-size-18">Stay informed about the latest news and trends in finance with our curated articles</p>
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

export default Questions;
