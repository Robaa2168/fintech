import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Banner() {
    return (
        <>
            <section className="bannermain position-relative">
                <figure className="mb-0 bgshape">
                    <img src="assets/images/homebanner-bgshape.png" alt="" className="img-fluid" />
                </figure>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                            <div className="banner" data-aos="fade-right">
                                <h6>Innovative. Reliable. Efficient</h6>
                                <h1>Empowering SMEs with <span>Digital Transformation</span> Solutions.</h1>
                                <p className="banner-text">Accelerate your business growth with our tailored digital solutions. Get enterprise-grade technology at SME-friendly pricing with rapid deployment.</p>
                                <div className="button"><a className="button_text" href="https://global.ravelmobile.com/login">Start Your Journey</a></div>
                            </div>
                        </div>
                        <div className=" col-lg-7 col-md-7 col-sm-12">
                            <div className="banner-wrapper">
                                <figure className="mb-0 homeelement1">
                                    <img src="assets/images/homeelement1.png" className="img-fluid" alt="" />
                                </figure>
                                <figure className="mb-0 banner-image">
                                    <img src="assets/images/homebanner-image.png" className="img-fluid" alt="banner-image" />
                                </figure>
                                <figure className="mb-0 content img-bg">
                                    <img src="assets/images/homebanner-img-bg.png" alt="banner-image-bg" />
                                </figure>
                                <figure className="mb-0 homeelement">
                                    <img src="assets/images/homeelement.png" className="img-fluid" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What-we-do */}
            <section className="what-we-do position-relative">
                <div className="container">
                    <figure className="element1 mb-0">
                        <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="" />
                    </figure>
                    <div className="row">
                        <div className="col-12">
                            <div className="subheading" data-aos="fade-right">
                                <h6>Our Expertise</h6>
                                <h2>Comprehensive Digital Solutions for Modern Businesses</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service1">
                                <figure className="img">
                                    <img src="assets/images/what-we-do-credit-debit-icon.png" alt="" className="img-fluid" />
                                </figure>
                                <h3>Custom Software Development</h3>
                                <p className="mb-0 text-size-18">Tailored solutions that align perfectly with your business workflows and operational requirements.</p>
                            </div>
                        </div>
                        <figure className="arrow1 mb-0" data-aos="fade-down">
                            <img src="assets/images/what-we-do-arrow-1.png" className="img-fluid" alt="" />
                        </figure>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service1 service2">
                                <figure className="img">
                                    <img src="assets/images/what-we-do-growth--icon.png" alt="" className="img-fluid" />
                                </figure>
                                <h3>E-Commerce Solutions</h3>
                                <p className="mb-0 text-size-18">Complete online store solutions with inventory management, payment integration, and customer analytics.</p>
                            </div>
                        </div>
                        <figure className="arrow2 mb-0" data-aos="fade-up">
                            <img src="assets/images/what-we-do-arrow-2.png" className="img-fluid" alt="" />
                        </figure>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service1">
                                <figure className="img">
                                    <img src="assets/images/what-we-do-connected-people-icon.png" alt="" className="img-fluid" />
                                </figure>
                                <h3>IT Support & Maintenance</h3>
                                <p className="mb-0 text-size-18">24/7 technical support and proactive system maintenance to ensure uninterrupted operations.</p>
                            </div>
                        </div>
                        <figure className="element3 mb-0">
                            <img src="assets/images/what-we-do-element.png" alt="" />
                        </figure>
                    </div>
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-12 col-12"></div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                            <div className="account" data-aos="fade-right">
                                <div className="accounticon">
                                    <figure className="mb-0">
                                        <img src="assets/images/what-we-do-personal-account-icon.png" className="img-fluid" alt="" />
                                    </figure>
                                </div>
                                <div className="heading">
                                    <h3 className="mb-0"><a href="/sme-solutions">SME Solutions</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                            <div className="account" data-aos="fade-right">
                                <div className="accounticon">
                                    <figure className="mb-0">
                                        <img src="assets/images/what-we-do-business-account-icon-2.png" className="img-fluid" alt="" />
                                    </figure>
                                </div>
                                <div className="heading">
                                    <h3 className="mb-0">Enterprise Systems</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-12 col-12"></div>
                        <figure className="element2 mb-0">
                            <img src="assets/images/what-we-do-icon-2.png" className="img-fluid" alt="" />
                        </figure>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-repay">
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
                                            <img className="thumb img-fluid" style={{ cursor: 'pointer' }} src="assets/images/play-button.png" alt="" />
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
                                <h6>ABOUT RAVEL GLOBAL INTELLITECH</h6>
                                <h2>Trusted Technology Partner for SMEs Worldwide</h2>
                                <p className="text-size-18">With a decade of experience in digital transformation, we've empowered over 500 businesses across 15 industries to achieve technological excellence.</p>
                                <div className="right-lower">
                                    <figure className="mb-0 icon">
                                        <img src="assets/images/happy-customer-icon.png" alt="" className="img-fluid" />
                                    </figure>
                                    <div className="content">
                                        <span>500+</span>
                                        <h4 className="mb-0">Successful Projects</h4>
                                    </div>
                                    <figure className="mb-0 icon">
                                        <img src="assets/images/total-customers-icon.png" alt="" className="img-fluid" />
                                    </figure>
                                    <div className="content content1">
                                        <span>98%</span>
                                        <h4 className="mb-0">Client Retention</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services section */}
            <section className="service-section">
                <div className="container">
                    <div className="row position-relative">
                        <div className="service-content">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <figure className="mb-0 services-icon">
                                    <img src="assets/images/services-our-services-icon-1.png" className="img-fluid" alt="" />
                                </figure>
                                <h6>CORE SERVICES</h6>
                                <h2>End-to-End Digital Transformation Services</h2>
                                <figure className="service-image" data-aos="fade-up">
                                    <img src="assets/images/services-our-services-image.png" className="img-fluid" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <figure className="element1 mb-0">
                        <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="" />
                    </figure>
                    <div className="services-data">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="service-box">
                                    <figure className="img img1">
                                        <img src="assets/images/services-payment-management-icon.png" alt="" className="img-fluid" />
                                    </figure>
                                    <div className="content">
                                        <h3>Web Development</h3>
                                        <p className="text-size-18">Responsive, SEO-optimized websites that convert visitors into customers.</p>
                                        <a href="/web-development" className="more">Explore</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="service-box">
                                    <figure className="img img2">
                                        <img src="assets/images/services-dashboard-icon.png" alt="" className="img-fluid" />
                                    </figure>
                                    <div className="content">
                                        <h3>Mobile Applications</h3>
                                        <p className="text-size-18">Native and cross-platform mobile apps for iOS and Android.</p>
                                        <a href="/mobile-apps" className="more">Discover</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="service-box">
                                    <figure className="img img3">
                                        <img src="assets/images/services-integrated-payment-icon.png" alt="" className="img-fluid" />
                                    </figure>
                                    <div className="content">
                                        <h3>Cloud Solutions</h3>
                                        <p className="text-size-18">Secure cloud migration, deployment, and management services.</p>
                                        <a href="/cloud-solutions" className="more">Learn More</a>
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
                                        <h3>ERP Systems</h3>
                                        <p className="text-size-18">Custom enterprise resource planning solutions for operational excellence.</p>
                                        <a href="/erp-systems" className="more">Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <figure className="mb-0 mobile-image" data-aos="fade-right">
                                    <img src="assets/images/services-mobile-image.png" alt="" className="img-fluid" />
                                </figure>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="service-box">
                                    <figure className="img img5">
                                        <img src="assets/images/services-credit-debit-icon.png" alt="" className="img-fluid" />
                                    </figure>
                                    <div className="content">
                                        <h3>UI/UX Design</h3>
                                        <p className="text-size-18">User-centered design that enhances engagement and conversions.</p>
                                        <a href="/ui-ux" className="more">View Portfolio</a>
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

            {/* Technology Stack */}
            <section className="manage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="manage-content" data-aos="fade-right">
                                <h2>Modern Tech Stack for Future-Ready Solutions</h2>
                                <div className="first">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                                            <figure className="mb-0 icon">
                                                <img src="assets/images/manageyour-user-friendly-icon.png" alt="" />
                                            </figure>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                                            <div className="content">
                                                <h4>Cutting-Edge Technologies</h4>
                                                <p className="text-size-16 text">React, Node.js, Python, AWS, Azure, MongoDB, and other industry-leading technologies powering your digital solutions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="secound">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                                            <figure className="mb-0 icon">
                                                <img src="assets/images/manageyour-best-support-icon.png" alt="" />
                                            </figure>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                                            <div className="content">
                                                <h4>Agile Development</h4>
                                                <p className="text-size-16">Iterative development process ensuring rapid delivery and continuous improvement.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="third">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                                            <figure className="mb-0 icon">
                                                <img src="assets/images/manageyour-secure-icon.png" alt="" />
                                            </figure>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                                            <div className="content">
                                                <h4>Security First</h4>
                                                <p className="text-size-16">Enterprise-grade security protocols including SSL encryption, regular audits, and compliance certifications.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="manage-wrapper">
                                <figure className="mb-0 homeelement1">
                                    <img src="assets/images/homeelement1.png" className="img-fluid" alt="" />
                                </figure>
                                <figure className="mb-0 manage-image">
                                    <img src="assets/images/manage-your-everything-image.png" className="img-fluid" alt="" />
                                </figure>
                                <figure className="mb-0 content img-bg">
                                    <img src="assets/images/manageyour-mange-your-bg.png" alt="" className />
                                </figure>
                                <figure className="mb-0 homeelement">
                                    <img src="assets/images/homeelement.png" className="img-fluid" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="mb-0 manage-layer">
                    <img src="assets/images/mange-layer.png" alt="" className="img-fluid" />
                </figure>
            </section>

            {/* Solutions Packages */}
            <section className="plan">
                <div className="container">
                    <figure className="element1 mb-0">
                        <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="" />
                    </figure>
                    <div className="row position-relative">
                        <div className="col-12">
                            <div className="content" data-aos="fade-right">
                                <h6>SOLUTIONS PACKAGES</h6>
                                <h2>Flexible Engagement Models for Every Business</h2>
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
                                        <p className="mb-0 text1 text">For Early-Stage Businesses</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                        <h4 className="online-payment">Basic Website</h4>
                                        <p className="mb-0 text1 text">From $1,499</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                        <h4 className="payout">E-Commerce</h4>
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
                                        <p className="mb-0 text1 text">For Scaling Businesses</p>
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
                                        <p className="mb-0 text1 text">Custom Solutions</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                        <h4 className="online-payment">ERP Systems</h4>
                                        <p className="mb-0 text1 text">Custom Pricing</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                        <h4 className="payout">Cloud Solutions</h4>
                                        <p className="mb-0 text">Custom Pricing</p>
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
                                    <li className="text1">
                                        <i className="fa-regular fa-circle-check font1" />
                                        <p className="mb-0 text-size-16">Free Consultation</p>
                                    </li>
                                    <li className="text2">
                                        <i className="fa-regular fa-circle-check font1" />
                                        <p className="mb-0 text-size-16">Flexible Payment</p>
                                    </li>
                                    <li className="text3">
                                        <i className="fa-regular fa-circle-check font1" />
                                        <p className="mb-0 text-size-16">Post-Launch Support</p>
                                    </li>
                                    <li className="text4">
                                        <i className="fa-regular fa-circle-check font1" />
                                        <p className="mb-0 text-size-16">SLA Agreements</p>
                                    </li>
                                    <li className="text5">
                                        <i className="fa-regular fa-circle-check font1" />
                                        <p className="mb-0 text-size-16">Scalable Architecture</p>
                                    </li>
                                    <li className="text6">
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

            {/* Consultation Section */}
            <section className="need-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content" data-aos="fade-right">
                                <h6>EXPERT CONSULTATION</h6>
                                <h2>Your Technology Transformation Partner</h2>
                                <p className="text-size-18">Strategic technology solutions driving business growth and operational excellence.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service1">
                                <figure className="img img1">
                                    <img src="assets/images/need-sales-icon.png" alt="" className="img-fluid" />
                                </figure>
                                <h3>Project Inquiry</h3>
                                <p className="text-size-18">Discuss your project requirements with our solutions architects.</p>
                                <a href="/contact" className="btn">Schedule Meeting</a>
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
                                <h3>Technical Support</h3>
                                <p className="text-size-18">24/7 support for all deployed solutions and systems.</p>
                                <a href="/support" className="btn">Get Assistance</a>
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
                                <h3>Industry Insights</h3>
                                <p className="text-size-18">Latest technology trends and digital transformation guides.</p>
                                <a href="/blog" className="btn">Read Articles</a>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="mb-0 need-layer">
                    <img src="assets/images/need-layer.png" alt="" className="img-fluid" />
                </figure>
            </section>

            {/* Footer */}
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
                <div className="container">
                    <div className="middle-portion">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                            <a href="/" className="logo-link" aria-label="RAVEL GLOBAL Home">
  <span className="d-inline-block" style={{
    background: 'linear-gradient(135deg, #2575fc 0%, #6a11ff 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: '1.8rem',
    lineHeight: 1.2,
    letterSpacing: '-0.03em'
  }}>
    RAVEL
    <span style={{
      display: 'block',
      fontSize: '0.9rem',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      background: 'linear-gradient(135deg, #6a11ff 0%, #2575fc 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text'
    }}>
      GLOBAL
    </span>
  </span>
</a>
                                <p className="text-size-16 footer-text">Registration Number: BN-ZMCVPR5K<br />
                                Transforming businesses through innovative technology solutions since 2015.</p>
                                <div className="certifications d-flex justify-content-center gap-3">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZoyReI__5YVy-DbYX164isLAy3r7HmMJZqg&s" 
         alt="ISO Certified" 
         className="img-fluid w-25" />
    <img src="https://codific.com/wp-content/uploads/2025/02/eu-gdpr-label-illustration.webp" 
         alt="GDPR Compliant" 
         className="img-fluid w-25" />
</div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-md-block d-none">
                                <div className="links">
                                    <h4 className="heading">Quick Links</h4>
                                    <hr className="line" />
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="/" className="text-size-16 text text-decoration-none">Home</a></li>
                                        <li><a href="/about" className="text-size-16 text text-decoration-none">About Us</a></li>
                                        <li><a href="/services" className="text-size-16 text text-decoration-none">Services</a></li>
                                        <li><a href="/portfolio" className="text-size-16 text text-decoration-none">Portfolio</a></li>
                                        <li><a href="/blog" className="text-size-16 text text-decoration-none">Insights</a></li>
                                        <li><a href="/contact" className="text-size-16 text text-decoration-none">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-sm-block">
                                <div className="icon">
                                    <h4 className="heading">Connect With Us</h4>
                                    <hr className="line" />
                                    <ul className="list-unstyled mb-0">
                                        <li className="text-size-16 text">
                                            Email: <a href="mailto:support@ravelmobile.com" className="mb-0 text text-decoration-none text-size-16">support@ravelmobile.com</a>
                                        </li>
                                        <li className="text-size-16 text">
                                            Tel: <a href="tel:+254700000000" className="mb-0 text text-decoration-none text-size-16">+254 700 000 000</a>
                                        </li>
                                        <li className="social-icons">
                                            <div className="circle"><a href="#"><i className="fa-brands fa-linkedin" /></a></div>
                                            <div className="circle"><a href="#"><i className="fa-brands fa-twitter" /></a></div>
                                            <div className="circle"><a href="#"><i className="fa-brands fa-github" /></a></div>
                                            <div className="circle"><a href="#"><i className="fa-brands fa-youtube" /></a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
        </>
    );
}

export default Banner;