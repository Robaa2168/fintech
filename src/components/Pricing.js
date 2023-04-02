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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                              <h4>Where Can I Find More Information?</h4>
                            </a>
                          </div>
                          <div id="collapseFour" className="collapse" aria-labelledby="headingFour">
                            <div className="card-body">
                              <p className="text-size-16 text-left mb-0 p-0">Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-card">
                          <div className="card-header" id="headingFive">
                            <a href="#" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                              <h4>What Are Your Terms and Conditions?</h4>
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
                              <h4>What Kinds of Payment Do You Accept?</h4>
                            </a>
                          </div>
                          <div id="collapseSix" className="collapse" aria-labelledby="headingSix">
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
      <figure className="mb-0 manage-layer">
        <img src="assets/images/mange-layer.png" alt="" className="img-fluid" />
      </figure>
    </section>
    {/* Partner */}
  </div>
  );
}

export default Pricing;
