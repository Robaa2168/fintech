import React, { useRef } from 'react';

const Questions = () => {
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
                  <h1>Technology Solutions FAQ</h1>
                  <p>Get answers about our digital transformation services, technical processes, and SME-focused solutions.</p>
                </div>
              </div>
            </div>
          </div>    
        </section>
        <div className="box">
          <span className="mb-0 text-size-16">Home</span><span className="mb-0 text-size-16 dash">-</span><span className="mb-0 text-size-16 box_span">FAQ</span>
        </div>
      </div>

      {/* FAQ section */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="subheading">
                <h6>TECHNICAL QUESTIONS</h6>
                <h2>Digital Transformation FAQs</h2>
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
                                <h4>What services do you offer?</h4>
                              </a>
                            </div>
                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">
                                  We specialize in custom software development, web solutions, e-commerce platforms, 
                                  cloud migration, and enterprise IT systems. Our services are tailored for SMEs needing 
                                  cost-effective digital transformation.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-card">
                            <div className="card-header" id="headingTwo">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h4>How do you ensure project security?</h4>
                              </a>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">
                                  We implement enterprise-grade security measures including SSL encryption, regular audits, 
                                  and GDPR compliance. All projects include secure coding practices and vulnerability testing.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-card">
                            <div className="card-header" id="headingThree">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h4>What's your development process?</h4>
                              </a>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">
                                  We follow an agile methodology with stages: Discovery > UX Design > Development > Testing > Deployment. 
                                  Clients receive weekly updates and participate in sprint reviews.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-card">
                            <div className="card-header" id="headingFour">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <h4>What technology stack do you use?</h4>
                              </a>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">
                                  Our stack includes React/Node.js for web apps, Python/Django for enterprise solutions, 
                                  AWS/Azure for cloud infrastructure, and MongoDB/PostgreSQL for databases. We adapt to client needs.
                                </p>
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
                                <h4>What about ongoing support?</h4>
                              </a>
                            </div>
                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">
                                  We offer tiered support packages with 24/7 monitoring, security updates, and feature enhancements. 
                                  Our SLA guarantees 99.9% uptime and 1-hour emergency response.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-card">
                            <div className="card-header" id="headingSix">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <h4>How SME-friendly are your prices?</h4>
                              </a>
                            </div>
                            <div id="collapseSix" className="collapse" aria-labelledby="headingSix">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">
                                  We offer modular pricing starting from $1,999 for basic websites. Custom software projects begin at $9,999 
                                  with flexible payment plans and ROI-focused solutions.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-card">
                            <div className="card-header" id="headingSeven">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <h4>Can you integrate with existing systems?</h4>
                              </a>
                            </div>
                            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">
                                  Yes, we specialize in legacy system modernization and API integration. Our team conducts full system 
                                  audits to ensure seamless compatibility.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-card">
                            <div className="card-header" id="headingEight">
                              <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                <h4>What's your project timeline?</h4>
                              </a>
                            </div>
                            <div id="collapseEight" className="collapse" aria-labelledby="headingEight">
                              <div className="card-body">
                                <p className="text-size-16 text-left mb-0 p-0">
                                  Typical timelines: Websites (2-4 weeks), Mobile Apps (8-12 weeks), Custom Software (12-16 weeks). 
                                  Enterprise solutions vary based on complexity.
                                </p>
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

export default Questions;