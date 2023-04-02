import React from 'react';

const Coming = () => {
  return (

   <section className="coming-soon">
   <div className="container">
     <div className="row">
       <div className="col-12">
         <div className="content">
           <a className="logo" href="/"><figure className="mb-3"><img src="assets/images/banner-logo.png" alt="" className="img-fluid" /></figure></a>
           <h1 className="mb-3">WE'RE COMING SOON</h1>
           <p className="mb-5">We're coming soon! We're working hard to give you the best experience!</p>
           <a className="button mb-4 text-decoration-none" href="/Contact">Contact Us</a>
           <ul className="social-icon">
             <li><a href="/"><i className="fa-brands fa-facebook-f" /></a></li>
             <li><a href="/"><i className="fa-brands fa-twitter" /></a></li>
             <li><a href="/"><i className="fa-brands fa-instagram" /></a></li>
             <li><a href="/"><i className="fa-brands fa-linkedin-in" /></a></li>
             <li><a href="/"><i className="fa-brands fa-pinterest-p" /></a></li>
           </ul>
         </div>
       </div>
     </div>
   </div>
   <figure className="mb-0 need-layer">
     <img src="assets/images/need-layer.png" alt="" className="img-fluid" />
   </figure>
 </section>
  );
}

export default Coming;
