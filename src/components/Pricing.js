import React, { useRef } from 'react';

const Pricing = () => {
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
                  <h1>Solution Packages</h1>
                  <p>Transparent, SME-friendly pricing for digital transformation. Choose from flexible packages or request custom enterprise solutions tailored to your business needs.</p>
                </div>
              </div>
            </div>
          </div>    
        </section>
        <div className="box">
          <span className="mb-0 text-size-16">Home</span><span className="mb-0 text-size-16 dash">-</span><span className="mb-0 text-size-16 box_span">Solutions</span>
        </div>
      </div>

      {/* Solution Packages */}
      <section className="plan">
        <div className="container">
          <figure className="element1 mb-0">
            <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="" />
          </figure>
          <div className="row position-relative">
            <div className="col-12">
              <div className="content" data-aos="fade-right">
                <h6>SOLUTION TIERS</h6>
                <h2>Strategic Pricing for Digital Growth</h2>
                <figure className="element3 mb-0">
                  <img src="assets/images/what-we-do-element.png" alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="pricing">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h3>Startup Package</h3>
                    <p className="mb-0 text1 text">Ideal for new businesses</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h4 className="online-payment">Basic Website</h4>
                    <p className="mb-0 text1 text">From $1,999</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h4 className="payout">E-Commerce Setup</h4>
                    <p className="mb-0 text">From $3,999</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <figure className="mb-0 icon">
                      <img src="assets/images/price-payment-icon.png" alt="" className="img-fluid" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="pricing">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h3>Growth Package</h3>
                    <p className="mb-0 text1 text">For scaling businesses</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h4 className="online-payment">Custom Software</h4>
                    <p className="mb-0 text1 text">From $9,999</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h4 className="payout">Mobile Apps</h4>
                    <p className="mb-0 text">From $14,999</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <figure className="mb-0 icon">
                      <img src="assets/images/price-payment-icon.png" alt="" className="img-fluid" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="pricing">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h3>Enterprise Package</h3>
                    <p className="mb-0 text1 text">Custom solutions</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h4 className="online-payment">ERP Systems</h4>
                    <p className="mb-0 text1 text">Custom Quote</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h4 className="payout">Cloud Solutions</h4>
                    <p className="mb-0 text">Custom Quote</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <figure className="mb-0 icon">
                      <img src="assets/images/price-payment-icon.png" alt="" className="img-fluid" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="pricing box">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h3>Custom Solutions</h3>
                    <p className="mb-0 text1 text">Tailored to your needs</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h4 className="online-payment">AI Integration</h4>
                    <p className="mb-0 text1 text">Custom Quote</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <h4 className="payout">IoT Systems</h4>
                    <p className="mb-0 text">Custom Quote</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <figure className="mb-0 icon">
                      <img src="assets/images/price-payment-icon.png" alt="" className="img-fluid" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row position-relative">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="facility" data-aos="fade-up">
                <ul className="mb-0 list-unstyled">
                  <li>
                    <i className="fa-regular fa-circle-check font1" />
                    <p className="mb-0 text-size-16">Free Consultation</p>
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check font1" />
                    <p className="mb-0 text-size-16">Flexible Payment Plans</p>
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check font1" />
                    <p className="mb-0 text-size-16">Post-Launch Support</p>
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check font1" />
                    <p className="mb-0 text-size-16">SLA Agreements</p>
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check font1" />
                    <p className="mb-0 text-size-16">Scalable Architecture</p>
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check font1" />
                    <p className="mb-0 text-size-16">Dedicated Team</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <figure className="element2 mb-0">
            <img src="assets/images/what-we-do-icon-2.png" className="img-fluid" alt="" />
          </figure>
        </div>
      </section>

      {/*FAQ section*/}
      <section className="faq-section accordian-section manage-section pricing-faq">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="subheading">
                <h6>COMMON QUESTIONS</h6>
                <h2>Technology Solutions FAQ</h2>
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
                                <h4>What's included in your development process?</h4>
                              </a>
                            </div>
                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">Our agile process includes requirements analysis, UX design, development, testing, and deployment. We provide regular demos and maintain complete transparency throughout the project lifecycle.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-card">
                            <div className="card-header" id="headingTwo">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h4>Do you provide ongoing support?</h4>
                              </a>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">Yes, we offer tiered support packages including 24/7 monitoring, security updates, and feature enhancements. Our SLA guarantees 99.9% uptime and rapid response times.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-card">
                            <div className="card-header" id="headingThree">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h4>How do you ensure project security?</h4>
                              </a>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">We implement enterprise-grade security including SSL encryption, regular audits, and GDPR compliance. All code undergoes rigorous vulnerability testing before deployment.</p>
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
                            <div className="card-header" id="headingFour">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <h4>Can you work with existing systems?</h4>
                              </a>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">Absolutely. We specialize in system integration and legacy modernization. Our team will audit your current infrastructure and propose seamless integration solutions.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-card">
                            <div className="card-header" id="headingFive">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <h4>What about customization options?</h4>
                              </a>
                            </div>
                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">All our solutions are fully customizable. We begin each project with discovery workshops to ensure we meet your specific business requirements and workflow needs.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-card">
                            <div className="card-header" id="headingSix">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <h4>What's your typical project timeline?</h4>
                              </a>
                            </div>
                            <div id="collapseSix" className="collapse" aria-labelledby="headingSix">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">Basic websites: 2-4 weeks. Custom software: 8-12 weeks. Enterprise solutions: 16+ weeks. We provide detailed timelines after requirements analysis.</p>
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
        <figure className="mb-0 manage-layer">
          <img src="assets/images/mange-layer.png" alt="" className="img-fluid" />
        </figure>
      </section>
    </div>
  );
}

export default Pricing;