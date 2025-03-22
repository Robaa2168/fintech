import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
 
     
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-size-16">  © {currentYear} RAVEL GLOBAL INTELLITECH. All Rights Reserved. </p>
                        </div>
                    </div>
                </div>
            </div>
 );
}

export default Footer;