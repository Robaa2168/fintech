import React from 'react';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';



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
                                <h6>Simple. Transparent. Secure </h6>
                                <h1>The Smart Way for<span>Online Payment</span> Solution.</h1>
                                <p className="banner-text">Create an account and instantly start accepting payments, selling your 
                                beautiful products online and building financial tools.</p>
                                <div class="button"><a class="button_text" href="https://global.ravelmobile.com">Open a Free Account</a></div>

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
            {/*What-we-do*/}
            <section className="what-we-do position-relative">
                <div className="container">
                    <figure className="element1 mb-0">
                        <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="" />
                    </figure>
                    <div className="row">
                        <div className="col-12">
                            <div className="subheading" data-aos="fade-right">
                                <h6>What we do</h6>
                                <h2>Get Ready To Have Best Smart Payments in The World</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row position-relative">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service1">
                                <figure className="img">
                                    <img src="assets/images/what-we-do-credit-debit-icon.png" alt="" className="img-fluid" />
                                </figure>
                                <h3>Payment Solution</h3>
                                <p className="mb-0 text-size-18">Easily receive money from anyone, anywhere in the world.</p>
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
                                <h3>Growth Business</h3>
                                <p className="mb-0 text-size-18">It's not the size of the company, it's the size of the ambition. Ambitious businesses of all sizes count on Ravelmobile to grow their business everywhere..</p>
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
                                <h3>Connected People</h3>
                                <p className="mb-0 text-size-18">Our fintech platform connects you with people in the finance industry, allowing you to network and build relationships.</p>
                            </div>
                        </div>
                        <figure className="element3 mb-0">
                            <img src="assets/images/what-we-do-element.png" alt="" />
                        </figure>
                    </div>
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-12 col-12">
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                            <div className="account" data-aos="fade-right">
                                <div className="accounticon">
                                    <figure className="mb-0">
                                        <img src="assets/images/what-we-do-personal-account-icon.png" className="img-fluid" alt="" />
                                    </figure>
                                </div>
                                <div class="heading">
    <h3 class="mb-0"><a href="https://global.ravelmobile.com">PERSONAL ACCOUNT</a></h3>
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
                                    <h3 className="mb-0">BUSINESS ACCOUNT</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-12 col-12">
                        </div>
                        <figure className="element2 mb-0">
                            <img src="assets/images/what-we-do-icon-2.png" className="img-fluid" alt="" />
                        </figure>
                    </div>
                </div>
            </section>

            {/*About Repay*/}
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
                                <h6>ABOUT Ravel-MOBILE</h6>
                                <h2>We Have The Most Users All Over The World</h2>
                                <p className="text-size-18">With millions of users worldwide, we're the go-to platform for managing your money.</p>
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
            </section>

            {/*Services section*/}
            <section className="service-section">
                <div className="container">
                    <div className="row position-relative">
                        <div className="service-content">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <figure className="mb-0 services-icon">
                                    <img src="assets/images/services-our-services-icon-1.png" className="img-fluid" alt="" />
                                </figure>
                                <h6>OUR SERVICES</h6>
                                <h2>Smart Solution for Your Payment</h2>
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
                                        <h3>Payment Management</h3>
                                        <p className="text-size-18">Take control of your payments with our easy-to-use payment management tools. 
                                        Streamline your payment process and increase efficiency today!</p>
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
                                        <p className="text-size-18">Keep an eye on your finances with our personalized dashboard. Get a real-time
                                         view of your money and make informed decisions with ease.</p>
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
                                        <p className="text-size-18">Accept payments seamlessly with our integrated payment solutions. Say goodbye to complicated payment methods and hello to more sales</p>
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
                                        <p className="text-size-18"> Keep track of your business finances effortlessly with our comprehensive tracking software. 
                                        Get a detailed overview of your business finances at a glance.</p>
                                        <a href="/pricing" className="more">More</a>
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
                                        <h3>Credit &amp; Debit Card</h3>
                                        <p className="text-size-18">Whether you're making a purchase online or in-store, our top-quality credit and debit cards provide you with secure transactions anywhere. With advanced security features, fraud protection, and worldwide acceptance,
                                         </p>
                                        <a href="/pricing" className="more">More</a>
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
            {/* manage */}
            <section className="manage-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="manage-content" data-aos="fade-right">
                                <h2>Manage Everything in Your Hand</h2>
                                <div className="first">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                                            <figure className="mb-0 icon">
                                                <img src="assets/images/manageyour-user-friendly-icon.png" alt="" />
                                            </figure>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-12 col-12">
                                            <div className="content">
                                                <h4>User Friendly</h4>
                                                <p className="text-size-16 text">Our fintech platform is designed to be user-friendly, with an intuitive interface that makes it easy to manage your finances. Access all the tools you need effortlessly and take control of your finances with ease.</p>
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
                                                <h4>Best Support</h4>
                                                <p className="text-size-16">Get the best support when managing your finances with our expert team. We're available around the clock to answer your questions and provide guidance, ensuring you have a smooth experience using our fintech platform.</p>
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
                                                <h4>Secure</h4>
                                                <p className="text-size-16">Your financial security is our top priority. Our platform utilizes advanced security features and encryption to keep your data safe from fraud and theft. 
                                                Rest assured that your finances are secure with us..</p>
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

            {/* plan and pricing */}
            <section className="plan">
                <div className="container">
                    <figure className="element1 mb-0">
                        <img src="assets/images/what-we-do-icon-1.png" className="img-fluid" alt="" />
                    </figure>
                    <div className="row position-relative">
                        <div className="col-12">
                            <div className="content" data-aos="fade-right">
                                <h6>PLAN AND PRICING</h6>
                                <h2>Helping You Make Smart Financial Choices</h2>
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
                                        <h3>Bank Transfer</h3>
                                        <p className="mb-0 text1 text">*Fees (excl VAT)</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                        <h4 className="online-payment">Online Payment</h4>
                                        <p className="mb-0 text1 text">3.5% plus USD 1.00</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                        <h4 className="payout">Payout</h4>
                                        <p className="mb-0 text">3.5% plus USD 1.00</p>
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
                                        <h3>e-Wallet</h3>
                                        <p className="mb-0 text1 text">*Need Verification </p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                        <h4 className="online-payment">Online Payment</h4>
                                        <p className="mb-0 text1 text">3.5% plus USD 1.00</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                        <h4 className="payout">Payout</h4>
                                        <p className="mb-0 text">3.5% plus USD 1.00</p>
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
                                        <h3>Credit Card</h3>
                                        <p className="mb-0 text1 text">*Fees (excl VAT)</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                        <h4 className="online-payment">Online Payment</h4>
                                        <p className="mb-0 text1 text">3.5% plus USD 1.00</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                        <h4 className="payout">Payout</h4>
                                        <p className="mb-0 text">3.5% plus USD 1.00</p>
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
                                        <h3>Cardless Credit</h3>
                                        <p className="mb-0 text1 text">*Account Must be registered</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                        <h4 className="online-payment">Online Payment</h4>
                                        <p className="mb-0 text1 text">3.5% plus USD 1.00</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                        <h4 className="payout">Payout</h4>
                                        <p className="mb-0 text">3.5% plus USD 1.00</p>
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
                                        <p className="mb-0 text-size-16">Free Account</p>
                                    </li>
                                    <li className="text2">
                                        <i className="fa-regular fa-circle-check font1" />
                                        <p className="mb-0 text-size-16">No Monthly Cost</p>
                                    </li>
                                    <li className="text3">
                                        <i className="fa-regular fa-circle-check font1" />
                                        <p className="mb-0 text-size-16">No Fee Setup</p>
                                    </li>
                                    <li className="text4">
                                        <i className="fa-regular fa-circle-check font1" />
                                        <p className="mb-0 text-size-16">Easy to Setup</p>
                                    </li>
                                    <li className="text5">
                                        <i className="fa-regular fa-circle-check font1" />
                                        <p className="mb-0 text-size-16">Integration</p>
                                    </li>
                                    <li className="text6">
                                        <i className="fa-regular fa-circle-check font1" />
                                        <p className="mb-0 text-size-16">Custom price</p>
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
                                <p className="text-size-18">We're available around the clock to answer your questions and provide guidance</p>
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
                                <p className="text-size-18">Stay informed about the latest news and trends in finance with our curated articles and news section. </p>
                                <a href="/contact" className="btn">Read Article</a>
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
                                        <img className="img-fluid" src="assets/images/partner-logo-1.png" alt="" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="mb-0 partner1 partner2">
                                        <img className="img-fluid" src="assets/images/partner-logo-2.png" alt="" />
                                    </figure>
                                </li>
                                <li className="img-mb">
                                    <figure className="mb-0 partner1 partner3">
                                        <img className="img-fluid" src="assets/images/partner-logo-3.png" alt="" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="mb-0 partner1 partner4">
                                        <img className="img-fluid" src="assets/images/partner-logo-4.png" alt="" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="mb-0 partner1 partner5">
                                        <img className="img-fluid" src="assets/images/partner-logo-5.png" alt="" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="mb-0 partner1 partner5">
                                        <img className="img-fluid" src="assets/images/partner-logo-6.png" alt="" />
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
                                <a href="i/">
                                    <figure className="footer-logo">
                                        <img src="assets/images/footer-logo.png" className="img-fluid" alt="" />
                                    </figure>
                                </a>
                                <p className="text-size-16 footer-text">Take your financial journey to the next level with Ravelmobile - the ultimate fintech platform.</p>
                                <figure className="mb-0 payment-icon">
                                    <img src="assets/images/payment-card.png" className="img-fluid" alt="" />
                                </figure>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-12 col-12 d-lg-block d-none">
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-md-block d-none">
                                <div className="links">
                                    <h4 className="heading">Important Links</h4>
                                    <hr className="line" />
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="i/" className=" text-size-16 text text-decoration-none">Home</a></li>
                                        <li><a href="/About" className=" text-size-16 text text-decoration-none">About Us</a></li>
                                        <li><a href="/service" className=" text-size-16 text text-decoration-none">Services</a></li>
                                        <li><a href="/contact" className=" text-size-16 text text-decoration-none">Contact</a></li>
                                        <li><a href="/pricing" className=" text-size-16 text text-decoration-none">Pricing</a></li>
                                        <li><a href="/faq" className=" text-size-16 text text-decoration-none">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-12 d-lg-block d-none">
                                <div className="links">
                                    <h4 className="heading">Support</h4>
                                    <hr className="line" />
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="/contact" className=" text-size-16 text text-decoration-none">Support</a></li>
                                        <li><a href="/pricing" className=" text-size-16 text text-decoration-none">Plan</a></li>
                                        <li><a href="/service" className=" text-size-16 text text-decoration-none">Benefits</a></li>
                                        <li><a href="/team" className=" text-size-16 text text-decoration-none">Testimonial</a></li>
                                        <li><a href="comingsoon.html" className=" text-size-16 text text-decoration-none">Coming Soon</a></li>
                                        <li><a href="/team" className=" text-size-16 text text-decoration-none">Members</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-sm-block">
                                <div className="icon">
                                    <h4 className="heading">Get in Touch</h4>
                                    <hr className="line" />
                                    <ul className="list-unstyled mb-0">
                                        <li className="text-size-16 text">Email: <a href="mailto:info@repay.com" className="mb-0 text text-decoration-none text-size-16">support@ravelmobile.com</a></li>
                                        <li className="text-size-16 text">Phone: <a href="tel:+4733378901" className="mb-0 text text-decoration-none text-size-16">+1 323 544 7101 </a></li>
                                        <li className="social-icons">
                                            <div className="circle"><a href="#"><i className="fa-brands fa-facebook-f" /></a></div>
                                            <div className="circle"><a href="#"><i className="fa-brands fa-twitter" /></a></div>
                                            <div className="circle"><a href="#"><i className="fa-brands fa-linkedin" /></a></div>
                                            <div className="circle"><a href="#"><i className="fa-brands fa-pinterest" /></a></div>
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
