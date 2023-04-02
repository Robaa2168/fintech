import React, { useRef } from 'react';

const About = () => {
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
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>    
      </section>
      <div className="box">
        <span className="mb-0 text-size-16">Home</span><span className="mb-0 text-size-16 dash">-</span><span className="mb-0 text-size-16 box_span">About</span>
      </div>
    </div>
    {/*About*/}
    <section className="what-we-do about-section position-relative">
      <div className="container">
        <figure className="element1 mb-0">
          <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="" />
        </figure>
        <div className="row">
          <div className="col-12">
            <div className="subheading" data-aos="fade-right">
              <h6>About Company</h6>
              <h2>We Are The Best Online Payment Gateway Agency</h2>
            </div>
          </div>
        </div>
        <div className="row position-relative">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="service1">
              <figure className="img img1">
                <img src="assets/images/vision-icon.png" alt="" className="img-fluid" />
              </figure>
              <h3>Our Vision</h3>
              <p className="mb-0 text-size-18">Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed do eiusmod tempor in cididod temunt.</p>
            </div>
          </div>
          <figure className="arrow1 mb-0" data-aos="fade-down">
            <img src="assets/images/what-we-do-arrow-1.png" className="img-fluid" alt="" />
          </figure>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="service1 service2">
              <figure className="img img2">
                <img src="assets/images/mission-icon.png" alt="" className="img-fluid" />
              </figure>
              <h3>Our Mission</h3>
              <p className="mb-0 text-size-18">Labore et dolore magna aliqua quis ipsum suspendisse ultrices gravida risus commo ddolore magnao.</p>
            </div>
          </div>
          <figure className="arrow2 mb-0" data-aos="fade-up">
            <img src="assets/images/what-we-do-arrow-2.png" className="img-fluid" alt="" />
          </figure>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="service1">
              <figure className="img img3">
                <img src="assets/images/strategyicon.png" alt="" className="img-fluid" />
              </figure>
              <h3>Strategy</h3>
              <p className="mb-0 text-size-18">viverra maecenas accumsan lacus vel facili sis consectetur adipiscing mae-cenelit seiscingsd.</p>
            </div>
          </div>
          <figure className="element3 mb-0">
            <img src="assets/images/what-we-do-element.png" alt="" />
          </figure>
        </div>
        <figure className="element2 mb-0">
          <img src="assets/images/what-we-do-icon-2.png" className="img-fluid" alt="" />
        </figure>
      </div>
    </section>
    {/*About Repay*/}
    <section className="about-repay repay-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="about-wrapper">
              <figure className="circle mb-0">
                <img src="assets/images/image-2-bg.png" alt="" />
              </figure>
              <div className="position-relative">
                <a className="popup-vimeo" href="https://video-previews.elements.envatousercontent.com/h264-video-previews/d1c81f1e-849f-4d45-ae57-b61c2f5db34a/25628048.mp4">
                  <figure className="mb-0 videobutton">
                    <img className="thumb img-fluid" style={{cursor: 'pointer'}} src="assets/images/play-button.png" alt="" />
                  </figure>
                </a>
              </div>
              <figure className="image mb-0">
                <img src="assets/images/image-2.png" alt="" className="img-fluid" />
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
            <div className="about-content" data-aos="fade-up">
              <h6>ABOUT REPAY</h6>
              <h2>We Have The Most Users All Over The World</h2>
              <p className="text-size-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              <p className="text-size-18 text">magna aliquaQuis ipsum suspendisse ultrices gravida. Risus com- modo viverra maecenas.</p>
              <div className="right-lower">
                <figure className="mb-0 icon">
                  <img src="assets/images/happy-customer-icon.png" alt="" className="img-fluid" />
                </figure>
                <div className="content">
                  <span>55k+</span>
                  <h4 className="mb-0">Happy Customers</h4>
                </div>
                <figure className="mb-0 icon">
                  <img src="assets/images/total-customers-icon.png" alt="" className="img-fluid" />
                </figure>
                <div className="content content1">
                  <span>$249M+</span>
                  <h4 className="mb-0">Total Transections</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figure className="mb-0 about-repaylayer">
        <img src="assets/images/about-repaylayer.png" alt="" className="img-fluid" />
      </figure>
    </section>
    {/*How we Work*/}
    <section className="work-section position-relative">
      <div className="container">
        <figure className="element1 mb-0">
          <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="" />
        </figure>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="work-content" data-aos="fade-right">
              <h6>How we work</h6>
              <h2>Four Quick Steps To Use Our Services</h2>
              <p className="text-size-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="h4">Download App</li>
                  <li className="h4">Choose Payment</li>
                  <li className="h4">Make Payment</li>
                  <li className="for-space h4">Get Amazing Services</li>
                </ul>
              </div>
              <div className="image_wrapper">
                <a className="image_google" href="https://play.google.com/store/games">
                  <figure className="mb-0 image-google"> 
                    <img className="img-fluid" src="assets/images/image-google.png" alt="" />
                  </figure> 
                </a>
                <a className="image_apple" href="https://www.apple.com/app-store/">
                  <figure className="mb-0 image-apple">
                    <img className="img-fluid" src="assets/images/image-apple.png" alt="" />
                  </figure>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="work-wrapper">
              <figure className="mobile-image mb-0">
                <img src="assets/images/mobileimg.png" alt="" className="img-fluid" />
              </figure>
              <figure className="mobile-bg mb-0">
                <img src="assets/images/mobile-bg.png" alt="" />
              </figure>
              <figure className="work-element1 mb-0">
                <img src="assets/images/work-element.png" alt="" className="img-fluid" />
              </figure>
              <figure className="work-element mb-0">
                <img src="assets/images/work-element.png" alt="" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
        <figure className="element2 mb-0">
          <img src="assets/images/what-we-do-icon-2.png" className="img-fluid" alt="" />
        </figure>
      </div>
    </section>
    {/*FAQ section*/}
    <section className="accordian-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12 col-12">
            <div className="faq">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="accordian-section-inner position-relative" data-aos="fade-up">
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
                        <div className="accordion-card for-space">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 d-lg-block d-none">
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="accordion-content">
              <h6>frequently asked questions</h6>
              <h2>General Questions</h2>
              <p className="text-size-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              <h3>Tips &amp; Information</h3>
              <p className="text-size-16">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
              <div className="right-lower" data-aos="fade-right">
                <figure className="mb-0 icon">
                  <img src="assets/images/emailicon.png" alt="" className="img-fluid" />
                </figure>
                <div className="content">
                  <span className="text-size-18">Email Address</span>
                  <h4 className="mb-0">support@repay.com</h4>
                </div>
                <figure className="mb-0 icon">
                  <img src="assets/images/total-customers-icon.png" alt="" className="img-fluid" />
                </figure>
                <div className="content content1">
                  <span className="text-size-18">Phone Number</span>
                  <h4 className="mb-0">+1 234 567 89 00</h4>
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
    {/*Our Blog*/}
    <section className="blog-section position-relative">
      <div className="container">
        <figure className="element1 mb-0">
          <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="" />
        </figure>
        <div className="row">
          <div className="col-12">
            <div className="subheading">
              <h6>OUR BLOG</h6>
              <h2>Latest Blog &amp; Articles</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="blog-box">
              <figure>
                <img src="assets/images/firstblog.png" alt="" className="img-fluid" />
              </figure>
              <div className="content content1">
                <a className="button">Bank</a>
                <p className="h4">The Impact Of Online Payments Will Make All Banks Use ATMs</p>
                <a href="single-post.html" className="text-size-16 text-decoration-none">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="blog-box">
              <figure>
                <img src="assets/images/secondblog.png" alt="" className="img-fluid" />
              </figure>
              <div className="content">
                <a className="button button1">Inflation</a>
                <p className="h4">Is Now A Good Time To Worry More About Financial Inflation</p>
                <a href="single-post.html" className="text-size-16 text-decoration-none">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="blog-box">
              <figure className="blogimage">
                <img src="assets/images/thirdblog.png" alt="" />
              </figure>
              <div className="content">
                <a className="button button1">Economy</a>
                <p className="h4">New SaaS Online Payment Platform Raises $15 Million Per Year</p>
                <a href="single-post.html" className="text-size-16 text-decoration-none">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <figure className="element2 mb-0">
          <img src="assets/images/what-we-do-icon-2.png" className="img-fluid" alt="" />
        </figure>
      </div>
    </section>
    {/* Partner */}
  </div>
  );
}

export default About;
