import React, { useRef } from 'react';

const About = () => {
  return (
    <div>
      {/* Sub-Banner */}
      <div className="sub-banner">
        <section className="banner-section">
          <figure className="mb-0 bgshape">
            <img src="assets/images/homebanner-bgshape.png" alt="Background shape" className="img-fluid" />
          </figure>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_content">
                  <h1>About Us</h1>
                  <p>Empowering SMEs with enterprise-grade technology solutions at accessible pricing.</p>
                </div>
              </div>
            </div>
          </div>    
        </section>
        <div className="box">
          <span className="mb-0 text-size-16">Home</span><span className="mb-0 text-size-16 dash">-</span><span className="mb-0 text-size-16 box_span">About</span>
        </div>
      </div>

      {/* About Section */}
      <section className="what-we-do about-section position-relative">
        <div className="container">
          <figure className="element1 mb-0">
            <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="Decorative element" />
          </figure>
          <div className="row">
            <div className="col-12">
              <div className="subheading" data-aos="fade-right">
                <h6>Technology Innovators</h6>
                <h2>Digital Transformation Partners for SMEs</h2>
              </div>
            </div>
          </div>
          <div className="row position-relative">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="service1">
                <figure className="img img1">
                  <img src="assets/images/vision-icon.png" alt="Vision" className="img-fluid" />
                </figure>
                <h3>Our Vision</h3>
                <p className="mb-0 text-size-18">To democratize access to enterprise-level technology for small and medium businesses worldwide.</p>
              </div>
            </div>
            <figure className="arrow1 mb-0" data-aos="fade-down">
              <img src="assets/images/what-we-do-arrow-1.png" className="img-fluid" alt="Decorative arrow" />
            </figure>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="service1 service2">
                <figure className="img img2">
                  <img src="assets/images/mission-icon.png" alt="Mission" className="img-fluid" />
                </figure>
                <h3>Our Mission</h3>
                <p className="mb-0 text-size-18">Deliver cost-effective digital solutions that drive business growth and operational efficiency.</p>
              </div>
            </div>
            <figure className="arrow2 mb-0" data-aos="fade-up">
              <img src="assets/images/what-we-do-arrow-2.png" className="img-fluid" alt="Decorative arrow" />
            </figure>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="service1">
                <figure className="img img3">
                  <img src="assets/images/strategyicon.png" alt="Strategy" className="img-fluid" />
                </figure>
                <h3>Our Approach</h3>
                <p className="mb-0 text-size-18">Combining agile development with strategic partnerships to deliver tailored solutions.</p>
              </div>
            </div>
            <figure className="element3 mb-0">
              <img src="assets/images/what-we-do-element.png" alt="Decorative element" />
            </figure>
          </div>
          <figure className="element2 mb-0">
            <img src="assets/images/what-we-do-icon-2.png" className="img-fluid" alt="Decorative element" />
          </figure>
        </div>
      </section>

      {/* Development Process */}
      <section className="work-section position-relative">
        <div className="container">
          <figure className="element1 mb-0">
            <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="Decorative element" />
          </figure>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="work-content" data-aos="fade-right">
                <h6>Our Process</h6>
                <h2>Streamlined Digital Transformation</h2>
                <div className="content">
                  <ul className="list-unstyled mb-0">
                    <li className="h4">Consultation & Planning</li>
                    <li className="h4">Solution Design</li>
                    <li className="h4">Development & Testing</li>
                    <li className="for-space h4">Deployment & Support</li>
                  </ul>
                </div>
                <div className="image_wrapper">
                  <a className="image_google" href="/contact">
                    <figure className="mb-0 image-google"> 
                      <img className="img-fluid" src="assets/images/image-google.png" alt="Start Project" />
                    </figure> 
                  </a>
                  <a className="image_apple" href="/contact">
                    <figure className="mb-0 image-apple">
                      <img className="img-fluid" src="assets/images/image-apple.png" alt="Request Demo" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="work-wrapper">
                <figure className="mobile-image mb-0">
                  <img src="assets/images/mobileimg.png" alt="Process workflow" className="img-fluid" />
                </figure>
                <figure className="mobile-bg mb-0">
                  <img src="assets/images/mobile-bg.png" alt="Background" />
                </figure>
                <figure className="work-element1 mb-0">
                  <img src="assets/images/work-element.png" alt="Decorative element" className="img-fluid" />
                </figure>
                <figure className="work-element mb-0">
                  <img src="assets/images/work-element.png" alt="Decorative element" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
          <figure className="element2 mb-0">
            <img src="assets/images/what-we-do-icon-2.png" className="img-fluid" alt="Decorative element" />
          </figure>
        </div>
      </section>

      {/* Expertise FAQ */}
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
                                <h4>What industries do you serve?</h4>
                              </a>
                            </div>
                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">We specialize in retail, manufacturing, healthcare, and logistics sectors, providing tailored solutions for each industry's unique challenges.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-card">
                            <div className="card-header" id="headingTwo">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h4>How do you ensure data security?</h4>
                              </a>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">We implement enterprise-grade security protocols including SSL encryption, regular audits, and GDPR compliance across all solutions.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-card for-space">
                            <div className="card-header" id="headingThree">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h4>What's your development timeline?</h4>
                              </a>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">Typical projects range from 6-12 weeks, using agile methodology with weekly client checkpoints and iterative deliverables.</p>
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
            <div className="col-lg-1 col-md-1 col-sm-1 d-lg-block d-none"></div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="accordion-content">
                <h6>TECHNICAL EXPERTISE</h6>
                <h2>Common Inquiries</h2>
                <p className="text-size-18">Get insights into our technology solutions and implementation process</p>
                <h3>Key Information</h3>
                <p className="text-size-16">Registered Number: BN-ZMCVPR5K<br />Leadership: Florence M. Leblanc, CEO</p>
                <div className="right-lower" data-aos="fade-right">
                  <figure className="mb-0 icon">
                    <img src="assets/images/emailicon.png" alt="Email" className="img-fluid" />
                  </figure>
                  <div className="content">
                    <span className="text-size-18">Enterprise Support</span>
                    <h4 className="mb-0">solutions@ravelintellitech.com</h4>
                  </div>
                  <figure className="mb-0 icon">
                    <img src="assets/images/total-customers-icon.png" alt="Phone" className="img-fluid" />
                  </figure>
                  <div className="content content1">
                    <span className="text-size-18">Operations Center</span>
                    <h4 className="mb-0">+254 700 000 000</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="mb-0 manage-layer">
          <img src="assets/images/mange-layer.png" alt="Background layer" className="img-fluid" />
        </figure>
      </section>

      {/* Insights Blog */}
      <section className="blog-section position-relative">
        <div className="container">
          <figure className="element1 mb-0">
            <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="Decorative element" />
          </figure>
          <div className="row">
            <div className="col-12">
              <div className="subheading">
                <h6>TECHNOLOGY INSIGHTS</h6>
                <h2>Latest Industry Perspectives</h2>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="blog-box">
                <figure>
                  <img src="assets/images/firstblog.png" alt="Web Development" className="img-fluid" />
                </figure>
                <div className="content content1">
                  <a className="button">Web Dev</a>
                  <p className="h4">2024 Trends in SME-Focused Web Development</p>
                  <a href="/blog/web-trends" className="text-size-16 text-decoration-none">Read Analysis</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="blog-box">
                <figure>
                  <img src="assets/images/secondblog.png" alt="Cloud Solutions" className="img-fluid" />
                </figure>
                <div className="content">
                  <a className="button button1">Cloud</a>
                  <p className="h4">Optimizing Business Costs Through Cloud Migration</p>
                  <a href="/blog/cloud-migration" className="text-size-16 text-decoration-none">Read Guide</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="blog-box">
                <figure className="blogimage">
                  <img src="assets/images/thirdblog.png" alt="Digital Transformation" />
                </figure>
                <div className="content">
                  <a className="button button1">Strategy</a>
                  <p className="h4">Case Study: 300% Efficiency Boost Through Digital Automation</p>
                  <a href="/blog/case-study" className="text-size-16 text-decoration-none">Read Case Study</a>
                </div>
              </div>
            </div>
          </div>
          <figure className="element2 mb-0">
            <img src="assets/images/what-we-do-icon-2.png" className="img-fluid" alt="Decorative element" />
          </figure>
        </div>
      </section>
    </div>
  );
}

export default About;