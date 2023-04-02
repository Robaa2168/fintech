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
                <h1>Pricing Plan</h1>
                <p>Our pricing is transparent and affordable, with a free basic plan and premium plans with additional features and benefits. We're committed to providing you with 
                    the best value for your money, so you can manage your finances without breaking the bank. </p>
              </div>
            </div>
          </div>
        </div>    
      </section>
      <div className="box">
        <span className="mb-0 text-size-16">Home</span><span className="mb-0 text-size-16 dash">-</span><span className="mb-0 text-size-16 box_span">Pricing</span>
      </div>
    </div>
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
                <li>
                  <i className="fa-regular fa-circle-check font1" />
                  <p className="mb-0 text-size-16">Free Account</p>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check font1" />
                  <p className="mb-0 text-size-16">No Monthly Cost</p>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check font1" />
                  <p className="mb-0 text-size-16">No Fee Setup</p>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check font1" />
                  <p className="mb-0 text-size-16">Easy to Setup</p>
                </li>
                <li>
                  <i className="fa-regular fa-circle-check font1" />
                  <p className="mb-0 text-size-16">Integration</p>
                </li>
                <li>
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
    {/*FAQ section*/}
    <section className="faq-section accordian-section manage-section pricing-faq">
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
                              <h4> What type of customer support does Ravelmobile offer?</h4>
                            </a>
                          </div>
                          <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
                            <div className="card-body">
                              <p className="text-size-16 text-left mb-0 p-0">Ravelmobile offers expert customer support through a variety of channels, including phone, email, and chat. Our support team is available 24/7 to answer your questions and provide guidance, ensuring that you have a smooth experience using our platform.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div className="card-header" id="headingTwo">
                            <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              <h4>Does Ravelmobile offer investment services?</h4>
                            </a>
                          </div>
                          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
                            <div className="card-body">
                              <p className="text-size-16 text-left mb-0 p-0">Yes, Ravelmobile offers a range of investment services, including personalized investment strategies, market insights, and expert advice from our team of financial experts.
                               We're committed to helping you grow your wealth and achieve your financial goals..</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div className="card-header" id="headingThree">
                            <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              <h4>How do I sign up for Ravelmobile?</h4>
                            </a>
                          </div>
                          <div id="collapseThree" className="collapse" aria-labelledby="headingThree">
                            <div className="card-body">
                              <p className="text-size-16 text-left mb-0 p-0">You can sign up for Ravelmobile on our website or through our mobile app. 
                              Simply provide your basic information, and you'll be ready to start managing your finances in no time.</p>
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
                              <h4>What is Ravelmobile?</h4>
                            </a>
                          </div>
                          <div id="collapseFour" className="collapse" aria-labelledby="headingFour">
                            <div className="card-body">
                              <p className="text-size-16 text-left mb-0 p-0">Ravelmobile is a comprehensive fintech platform that provides a range of financial tools and resources to help
                               you manage your finances, grow your wealth, and achieve your financial goals.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div className="card-header" id="headingFive">
                            <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                              <h4> Is Ravelmobile secure?</h4>
                            </a>
                          </div>
                          <div id="collapseFive" className="collapse" aria-labelledby="headingFive">
                            <div className="card-body">
                              <p className="text-size-16 text-left mb-0 p-0">Yes, Ravelmobile is committed to providing advanced security features and encryption to keep your data safe from fraud and theft. We use the
                               latest technology and best practices to ensure that your finances are always secure..</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div className="card-header" id="headingSix">
                            <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                              <h4>What types of payments can I make with Ravelmobile?</h4>
                            </a>
                          </div>
                          <div id="collapseSix" className="collapse" aria-labelledby="headingSix">
                            <div className="card-body">
                              <p className="text-size-16 text-left mb-0 p-0">With Ravelmobile, you can make a wide range of payments, including bill payments, international payments, and person-to-person transfers.
                               Our payment management tools make it easy for you to manage your payments from one centralized platform..</p>
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
    {/* Partner */}
  </div>
  );
}

export default Pricing;
