import React, { useRef } from 'react';

const Service = () => {
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
                          <h1>Our Services</h1>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </div>
                  </div>    
                </section>
                <div className="box">
                  <span className="mb-0 text-size-16">Home</span><span className="mb-0 text-size-16 dash">-</span><span className="mb-0 text-size-16 box_span">Service</span>
                </div>
              </div>
              {/*Services section*/}
              <section className="service-section service position-relative">
                <div className="container">
                  <figure className="mb-0 services-icon">
                    <img src="assets/images/services-our-services-icon-1.png" className="img-fluid" alt="" />
                  </figure>
                  <div className="services-data">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="service-box">
                          <figure className="img img1">
                            <img src="assets/images/services-payment-management-icon.png" alt="" className="img-fluid" />
                          </figure>
                          <div className="content">
                            <h3>Payment Management</h3>
                            <p className="text-size-18">Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed do eiusmod tempor in cididod temunt.</p>
                            <a href="/pricing" className="more">More</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="service-box">
                          <figure className="img img2">
                            <img src="assets/images/services-dashboard-icon.png" alt="" className="img-fluid" />
                          </figure>
                          <div className="content">
                            <h3>Personal Dashboard</h3>
                            <p className="text-size-18">Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed do eiusmod tempor in cididod temunt.</p>
                            <a href="/pricing" className="more">More</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="service-box">
                          <figure className="img img3">
                            <img src="assets/images/services-integrated-payment-icon.png" alt="" className="img-fluid" />
                          </figure>
                          <div className="content">
                            <h3>Integrated Payments</h3>
                            <p className="text-size-18">Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed do eiusmod tempor in cididod temunt.</p>
                            <a href="/pricing" className="more">More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="service-box">
                          <figure className="img img4">
                            <img src="assets/images/services-friendly.png" alt="" className="img-fluid" />
                          </figure>
                          <div className="content">
                            <h3>Business Tracking</h3>
                            <p className="text-size-18">Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed do eiusmod tempor in cididod temunt.</p>
                            <a href="/pricing" className="more">More</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="service-box">
                          <figure className="img img5">
                            <img src="assets/images/services-credit-debit-icon.png" alt="" className="img-fluid" />
                          </figure>
                          <div className="content">
                            <h3>Credit &amp; Debit Card</h3>
                            <p className="text-size-18">Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed do eiusmod tempor in cididod temunt.</p>
                            <a href="/pricing" className="more">More</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="service-box">
                          <figure className="img img6">
                            <img src="assets/images/secure.png" alt="" className="img-fluid" />
                          </figure>
                          <div className="content">
                            <h3>Secure Payments</h3>
                            <p className="text-size-18">Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed do eiusmod tempor in cididod temunt.</p>
                            <a href="/pricing" className="more">More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure className="element1 mb-0">
                    <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="" />
                  </figure>
                </div>
              </section>
              {/* Payment */}
              <section className="payment-section">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="content">
                        <h6>Payment Gateway</h6>
                        <h2>The Best Solution for Accepting Online Payments</h2>
                        <p className="text-size-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaQuis ipsum suspendisse ultrices gravida.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <figure className="mb-0 need-layer">
                  <img src="assets/images/need-layer.png" alt="" className="img-fluid" />
                </figure>
              </section>
              {/* Payment video */}
              <div className="videosection">
                <div className="container">
                  <div className="row position-relative">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="position-relative" data-aos="fade-up">
                        <a className="popup-vimeo" href="https://video-previews.elements.envatousercontent.com/h264-video-previews/d1c81f1e-849f-4d45-ae57-b61c2f5db34a/25628048.mp4">
                          <figure className="mb-0 vediosession">
                            <img className="thumb img-fluid" style={{cursor: 'pointer'}} src="assets/images/image-videosession.png" alt="" />
                          </figure>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Benefits*/}
              <section className="benefit-section position-relative">
                <div className="container">
                  <figure className="element1 mb-0">
                    <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="" />
                  </figure>
                  <div className="row">
                    <div className="col-12">
                      <div className="subheading">
                        <h6>Benefits</h6>
                        <h2>Benefits Using E-Wallet Repay for You</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="benefit-wrapper">
                        <figure className="circle mb-0">
                          <img src="assets/images/image-2-bg.png" alt="" />
                        </figure>
                        <figure className="benefit-image mb-0">
                          <img src="assets/images/benefit-image.png" alt="" className="img-fluid" />
                        </figure>
                        <figure className="homeelement mb-0">
                          <img src="assets/images/homeelement.png" alt="" className="img-fluid" />
                        </figure>
                        <figure className="homeelement1 mb-0">
                          <img src="assets/images/homeelement.png" alt="" className="img-fluid" />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="benefit-content" data-aos="fade-right">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="content">
                              <figure className="icon icon1">
                                <img src="assets/images/happy-customer-icon.png" alt="" className="img-fluid" />
                              </figure> 
                              <h4>Pay Bill</h4>
                              <p className="text-size-16 mb-0">Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed.</p>
                            </div>   
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="content-box">
                              <figure className="icon icon2">
                                <img src="assets/images/total-customers-icon.png" alt="" className="img-fluid" />
                              </figure>
                              <h4>Membership</h4>
                              <p className="text-size-16">Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed.</p>
                            </div>
                          </div>
                        </div>
                        <div className="feature-downcontent">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="content">
                                <figure className="icon icon1">
                                  <img src="assets/images/happy-customer-icon.png" alt="" className="img-fluid" />
                                </figure> 
                                <h4>Withdraw</h4>
                                <p className="text-size-16 mb-0">Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed.</p>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="content">
                                <figure className="icon icon2">
                                  <img src="assets/images/total-customers-icon.png" alt="" className="img-fluid" />
                                </figure> 
                                <h4>Investment</h4>
                                <p className="text-size-16 mb-0">Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed.</p> 
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <figure className="element2 mb-0">
                    <img src="assets/images/what-we-do-icon-2.png" className="img-fluid" alt="" />
                  </figure>
                </div>
              </section>
              {/*Testimonial*/}
              <section className="testimonial-section">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="content" data-aos="fade-right">
                        <figure className="quote-icon">
                          <img src="assets/images/quote-icon.png" alt="" className="img-fluid" />
                        </figure>
                        <h6>TESTIMONIAL</h6>
                        <h2>What Our Clients Said</h2>
                        <p className="text-size-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div className="button"><a className="button-text text-size-16 text-decoration-none" href="single-post.html">More Testimonial</a></div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="testimonial-wrapper">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <div className="review_content">
                                <img src="assets/images/team4.png" alt="" />
                                <p className="text-size-18">Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labor et doloremagna aliquaquis.</p>
                                <h4 className="mb-0">Rebekah Gislason</h4>
                                <span className="text-size-16">company.com</span>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="review_content">
                                <img src="assets/images/team5.png" alt="" />         
                                <p className="text-size-18">Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labor et doloremagna aliquaquis.</p>
                                <h4 className="mb-0">Kevin Andred</h4>
                                <span className="text-size-16">company.com</span>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="review_content">
                                <img src="assets/images/team6.png" alt="" />         
                                <p className="text-size-18">Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labor et doloremagna aliquaquis.</p>
                                <h4 className="mb-0">Even White</h4>
                                <span className="text-size-16">company.com</span>
                              </div>
                            </div>
                            <div className="pagination-outer">
                              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <i className="fa-solid fa-arrow-left" />
                                <span className="sr-only">Previous</span>
                              </a>
                              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <i className="fa-solid fa-arrow-right" />
                                <span className="sr-only">Next</span>
                              </a>
                            </div>
                          </div>
                        </div> 
                        <figure className="mb-0 testimonial-circle">
                          <img src="assets/images/testimonial-backimage.png" alt="" />
                        </figure>
                        <figure className="homeelement mb-0">
                          <img src="assets/images/homeelement.png" alt="" className="img-fluid" />
                        </figure>
                        <figure className="homeelement1 mb-0">
                          <img src="assets/images/homeelement.png" alt="" className="img-fluid" />
                        </figure>
                      </div> 
                    </div>
                  </div>
                </div>
                <figure className="mb-0 manage-layer">
                  <img src="assets/images/mange-layer.png" alt="" className="img-fluid" />
                </figure>
              </section>
              {/* Partner */}
            </div>
     
  );
}

export default Service;
