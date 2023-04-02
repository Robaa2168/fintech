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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                                  <h4>Where Can I Find More Information?</h4>
                                </a>
                              </div>
                              <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingTwo">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  <h4>What Are Your Terms and Conditions?</h4>
                                </a>
                              </div>
                              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingThree">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  <h4>What Kinds of Payment Do You Accept?</h4>
                                </a>
                              </div>
                              <div id="collapseThree" className="collapse" aria-labelledby="headingThree">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingFour">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                  <h4>What Are Your Terms and Conditions?</h4>
                                </a>
                              </div>
                              <div id="collapseFour" className="collapse" aria-labelledby="headingFour">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
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
                                  <h4>Where Can I Find More Information?</h4>
                                </a>
                              </div>
                              <div id="collapseFive" className="collapse" aria-labelledby="headingFive">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingSix">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                  <h4>What Are Your Terms and Conditions?</h4>
                                </a>
                              </div>
                              <div id="collapseSix" className="collapse" aria-labelledby="headingSix">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingSeven">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                  <h4>What Kinds of Payment Do You Accept?</h4>
                                </a>
                              </div>
                              <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingEight">
                                <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                  <h4>What Are Your Terms and Conditions?</h4>
                                </a>
                              </div>
                              <div id="collapseEight" className="collapse" aria-labelledby="headingEight">
                                <div className="card-body">
                                  <p className="text-size-16 text-left mb-0 p-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
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
                  <p className="text-size-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntabore et dolore aliquaQuis ipsum suspe.</p>
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
                  <p className="text-size-18">Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed</p>
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
                  <p className="text-size-18">Labore et dolore magna aliqua quis ipsum suspendisse ultrices</p>
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
                  <p className="text-size-18">viverra maecenas accumsan lacus vel facili sis consectetur adipiscing</p>
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
