import React, { useRef } from 'react';

const Service = () => {
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
                  <h1>Our Technology Solutions</h1>
                  <p>Empowering SMEs with enterprise-grade digital solutions tailored for growth and efficiency.</p>
                </div>
              </div>
            </div>
          </div>    
        </section>
        <div className="box">
          <span className="mb-0 text-size-16">Home</span><span className="mb-0 text-size-16 dash">-</span><span className="mb-0 text-size-16 box_span">Services</span>
        </div>
      </div>

      {/* Services section */}
      <section className="service-section service position-relative">
        <div className="container">
          <figure className="mb-0 services-icon">
            <img src="assets/images/services-our-services-icon-1.png" className="img-fluid" alt="Services icon" />
          </figure>
          <div className="services-data">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="service-box">
                  <figure className="img img1">
                    <img src="assets/images/secure.png" alt="Web Development" className="img-fluid" />
                  </figure>
                  <div className="content">
                    <h3>Custom Web Development</h3>
                    <p className="text-size-18">Responsive, SEO-optimized websites built with modern frameworks. From landing pages to complex web applications, we create digital experiences that convert.</p>
                    <a href="/web-development" className="more">Explore</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="service-box">
                  <figure className="img img2">
                    <img src="assets/images/services-payment-management-icon.png" alt="E-Commerce" className="img-fluid" />
                  </figure>
                  <div className="content">
                    <h3>E-Commerce Solutions</h3>
                    <p className="text-size-18">Complete online store solutions with inventory management, payment gateways, and customer analytics. Boost your sales with our conversion-optimized platforms.</p>
                    <a href="/ecommerce" className="more">Discover</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="service-box">
                  <figure className="img img3">
                    <img src="assets/images/services-dashboard-icon.png" alt="Software Development" className="img-fluid" />
                  </figure>
                  <div className="content">
                    <h3>Enterprise Software</h3>
                    <p className="text-size-18">Custom ERP and CRM solutions that streamline operations. Automate workflows, manage resources, and drive productivity with our tailored software.</p>
                    <a href="/software" className="more">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="service-box">
                  <figure className="img img4">
                    <img src="assets/images/services-integrated-payment-icon.png" alt="Cloud Solutions" className="img-fluid" />
                  </figure>
                  <div className="content">
                    <h3>Cloud Solutions</h3>
                    <p className="text-size-18">Secure cloud migration and management services. Leverage AWS, Azure, and Google Cloud for scalable, cost-effective infrastructure solutions.</p>
                    <a href="/cloud" className="more">Details</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="service-box">
                  <figure className="img img5">
                    <img src="assets/images/services-friendly.png" alt="Mobile Apps" className="img-fluid" />
                  </figure>
                  <div className="content">
                    <h3>Mobile Applications</h3>
                    <p className="text-size-18">Native and cross-platform mobile apps that engage users. From concept to deployment, we build iOS and Android solutions that drive business growth.</p>
                    <a href="/mobile-apps" className="more">View Portfolio</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="service-box">
                  <figure className="img img6">
                    <img src="assets/images/services-credit-debit-icon.png" alt="IT Support" className="img-fluid" />
                  </figure>
                  <div className="content">
                    <h3>IT Support & Maintenance</h3>
                    <p className="text-size-18">24/7 technical support and proactive system maintenance. Ensure business continuity with our comprehensive managed IT services.</p>
                    <a href="/support" className="more">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figure className="element1 mb-0">
            <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="Decoration element" />
          </figure>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="payment-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h6>TECHNOLOGY STACK</h6>
                <h2>Modern Tools for Digital Excellence</h2>
                <p className="text-size-18">We leverage cutting-edge technologies to deliver robust, scalable solutions that grow with your business.</p>
              </div>
            </div>
          </div>
        </div>
        <figure className="mb-0 need-layer">
          <img src="assets/images/need-layer.png" alt="Technology stack background" className="img-fluid" />
        </figure>
      </section>

      {/* Development Process */}
      <div className="videosection">
  <div className="container">
    <div className="row position-relative">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="position-relative" data-aos="fade-up">
          <a className="popup-vimeo" href="https://www.youtube.com/embed/6G0bLDIcO7Y?si=Y_VZ8rS88UKP1Z3o">
            <figure className="mb-0 vediosession">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/6G0bLDIcO7Y?si=Y_VZ8rS88UKP1Z3o" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
       
            </figure>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Partner Section */}
{/* Partner Section */}
<section className="footer-section">
  <div className="partner-section">
    <div className="container">
      <div className="partner">
        <ul className="mb-0 list-unstyled">
          <li>
            <figure className="mb-0 partner1">
              <img 
                className="img-fluid" 
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                alt="AWS Partner" 
                width="120"
                height="50"
              />
            </figure>
          </li>
          <li>
            <figure className="mb-0 partner1 partner2">
              <img 
                className="img-fluid" 
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" 
                alt="Microsoft Partner" 
                width="160"
                height="50"
              />
            </figure>
          </li>
          <li className="img-mb">
            <figure className="mb-0 partner1 partner3">
              <img 
                className="img-fluid" 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" 
                alt="Google Cloud Partner" 
                width="140"
                height="50"
              />
            </figure>
          </li>
          <li>
            <figure className="mb-0 partner1 partner4">
              <img 
                className="img-fluid" 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                alt="React Certified" 
                width="70"
                height="50"
              />
            </figure>
          </li>
          <li>
            <figure className="mb-0 partner1 partner5">
              <img 
                className="img-fluid" 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" 
                alt="Node.js Foundation" 
                width="120"
                height="50"
              />
            </figure>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Benefits */}
      <section className="benefit-section position-relative">
        <div className="container">
          <figure className="element1 mb-0">
            <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="Decoration element" />
          </figure>
          <div className="row">
            <div className="col-12">
              <div className="subheading">
                <h6>ADVANTAGES</h6>
                <h2>Why Choose RAVEL GLOBAL INTELLITECH</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="benefit-wrapper">
                <figure className="circle mb-0">
                  <img src="assets/images/image-2-bg.png" alt="Benefits background" />
                </figure>
                <figure className="benefit-image mb-0">
                  <img src="assets/images/benefit-image.png" alt="Benefits illustration" className="img-fluid" />
                </figure>
                <figure className="homeelement mb-0">
                  <img src="assets/images/homeelement.png" alt="Decoration element" className="img-fluid" />
                </figure>
                <figure className="homeelement1 mb-0">
                  <img src="assets/images/homeelement.png" alt="Decoration element" className="img-fluid" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="benefit-content" data-aos="fade-right">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="content">
                      <figure className="icon icon1">
                        <img src="assets/images/happy-customer-icon.png" alt="Cost effective" className="img-fluid" />
                      </figure> 
                      <h4>SME-Friendly Pricing</h4>
                      <p className="text-size-16 mb-0">Enterprise-grade solutions at accessible prices with flexible payment options.</p>
                    </div>   
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="content-box">
                      <figure className="icon icon2">
                        <img src="assets/images/total-customers-icon.png" alt="Expert team" className="img-fluid" />
                      </figure>
                      <h4>Expert Development Team</h4>
                      <p className="text-size-16">10+ years average experience with certifications in leading technologies.</p>
                    </div>
                  </div>
                </div>
                <div className="feature-downcontent">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="content">
                        <figure className="icon icon1">
                          <img src="assets/images/happy-customer-icon.png" alt="Support" className="img-fluid" />
                        </figure> 
                        <h4>24/7 Support</h4>
                        <p className="text-size-16 mb-0">Comprehensive SLAs with guaranteed response times and uptime.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="content">
                        <figure className="icon icon2">
                          <img src="assets/images/total-customers-icon.png" alt="Security" className="img-fluid" />
                        </figure> 
                        <h4>Enterprise Security</h4>
                        <p className="text-size-16 mb-0">GDPR compliance, SSL encryption, and regular security audits.</p> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figure className="element2 mb-0">
            <img src="assets/images/what-we-do-icon-2.png" className="img-fluid" alt="Decoration element" />
          </figure>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="content" data-aos="fade-right">
                <figure className="quote-icon">
                  <img src="assets/images/quote-icon.png" alt="Quote icon" className="img-fluid" />
                </figure>
                <h6>CLIENT SUCCESS</h6>
                <h2>Trusted by 500+ Businesses</h2>
                <p className="text-size-18">"RAVEL GLOBAL INTELLITECH transformed our outdated systems into a modern digital platform. Their custom ERP solution increased our operational efficiency by 40% within 6 months." - James M., Manufacturing Sector</p>
                <div className="button"><a className="button-text text-size-16 text-decoration-none" href="/case-studies">View Case Studies</a></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="testimonial-wrapper">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="review_content">
                        <img src="assets/images/retail-client.png" alt="Retail client" />
                        <p className="text-size-18">"Their e-commerce solution helped us triple online sales while reducing maintenance costs. The seamless integration with our inventory system was exceptional."</p>
                        <h4 className="mb-0">Sarah Johnson</h4>
                        <span className="text-size-16">Retail Business Owner</span>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="review_content">
                        <img src="assets/images/startup-ceo.png" alt="Startup CEO" />         
                        <p className="text-size-18">"From concept to launch, RAVEL delivered our mobile app 3 weeks ahead of schedule. Their agile approach and technical expertise were invaluable."</p>
                        <h4 className="mb-0">Michael Chen</h4>
                        <span className="text-size-16">Tech Startup Founder</span>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="review_content">
                        <img src="assets/images/it-manager.png" alt="IT Manager" />         
                        <p className="text-size-18">"Their cloud migration strategy saved us 35% in infrastructure costs while improving system reliability. The support team is always responsive and knowledgeable."</p>
                        <h4 className="mb-0">Emily Rodriguez</h4>
                        <span className="text-size-16">IT Director</span>
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
                  <img src="assets/images/testimonial-backimage.png" alt="Testimonial background" />
                </figure>
                <figure className="homeelement mb-0">
                  <img src="assets/images/homeelement.png" alt="Decoration element" className="img-fluid" />
                </figure>
                <figure className="homeelement1 mb-0">
                  <img src="assets/images/homeelement.png" alt="Decoration element" className="img-fluid" />
                </figure>
              </div> 
            </div>
          </div>
        </div>
        <figure className="mb-0 manage-layer">
          <img src="assets/images/mange-layer.png" alt="Background layer" className="img-fluid" />
        </figure>
      </section>

      {/* Partner Section */}
      <section className="footer-section">
        <div className="partner-section">
          <div className="container">
            <div className="partner">
              <ul className="mb-0 list-unstyled">
                <li>
                  <figure className="mb-0 partner1">
                    <img className="img-fluid" src="assets/images/partner-logo-1.png" alt="AWS Partner" />
                  </figure>
                </li>
                <li>
                  <figure className="mb-0 partner1 partner2">
                    <img className="img-fluid" src="assets/images/partner-logo-2.png" alt="Microsoft Partner" />
                  </figure>
                </li>
                <li className="img-mb">
                  <figure className="mb-0 partner1 partner3">
                    <img className="img-fluid" src="assets/images/partner-logo-3.png" alt="Google Cloud Partner" />
                  </figure>
                </li>
                <li>
                  <figure className="mb-0 partner1 partner4">
                    <img className="img-fluid" src="assets/images/partner-logo-4.png" alt="React Certified" />
                  </figure>
                </li>
                <li>
                  <figure className="mb-0 partner1 partner5">
                    <img className="img-fluid" src="assets/images/partner-logo-5.png" alt="Node.js Foundation" />
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;