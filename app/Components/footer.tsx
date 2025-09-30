export default function Footer(){
  return(
    <>
 <footer className="footer text-dark py-5">
  <div className="container">
    <div className="row"> 
      
      {/* <!-- Column 1 --> */}
      <div className="col-6 col-md-2">
        <h6 className="fw-bold">Shop and Learn</h6>
        <ul className="list-unstyled">
          <li><a href="#">Store</a></li>
          <li><a href="#">Mac</a></li>
          <li><a href="#">iPad</a></li>
          <li><a href="#">iPhone</a></li>
          <li><a href="#">Watch</a></li>
          <li><a href="#">Vision</a></li>
          <li><a href="#">AirPods</a></li>
          <li><a href="#">TV & Home</a></li>
          <li><a href="#">AirTag</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Gift Cards</a></li>
        </ul>
      </div> 
     
      {/* <!-- Column 2 --> */}
     <div className="col-6 col-md-2">
        <h6 className="fw-bold">Apple Wallet</h6>
        <ul className="list-unstyled">
          <li><a href="#">Wallet</a></li>
          <li><a href="#">Apple Card</a></li>
          <li><a href="#">Apple Pay</a></li>
          <li><a href="#">Apple Cash</a></li>
        </ul>
      </div> 
      {/* <!-- Column 3 --> */}
  <div className="col-6 col-md-2">
        <h6 className="fw-bold">Account</h6>
        <ul className="list-unstyled">
          <li><a href="#">Manage Your Apple Account</a></li>
          <li><a href="#">Apple Store Account</a></li>
          <li><a href="#">iCloud.com</a></li>
        </ul>
      </div> 
  
      {/* <!-- Column 4 --> */}
     <div className="col-6 col-md-2">
        <h6 className="fw-bold">Entertainment</h6>
        <ul className="list-unstyled">
          <li><a href="#">Apple One</a></li>
          <li><a href="#">Apple TV+</a></li>
          <li><a href="#">Apple Music</a></li>
          <li><a href="#">Apple Arcade</a></li>
          <li><a href="#">Apple Fitness+</a></li>
          <li><a href="#">Apple News+</a></li>
          <li><a href="#">Apple Podcasts</a></li>
          <li><a href="#">Apple Books</a></li>
          <li><a href="#">App Store</a></li>
        </ul>
      </div> 

{/* <!-- column 5 --> */}
     <div className="col-6 col-md-2">
        <h6 className="fw-bold">Apple Store</h6>
        <ul className="list-unstyled">
          <li><a href="#">Find a Store</a></li>
          <li><a href="#">Genius Bar</a></li>
          <li><a href="#">Today at Apple</a></li>
          <li><a href="#">Apple Camp</a></li>
          <li><a href="#">Apple Trade in</a></li>
          <li><a href="#">Order Status</a></li>
          <li><a href="#">Shopping Help</a></li>
          <li><a href="#">Financing</a></li>
        </ul>
      </div> 

{/* <!-- Column 6 --> */}
  <div className="col-6 col-md-2">
        <h6 className="fw-bold">For Business</h6>
        <ul className="list-unstyled">
          <li><a href="#">Apple and Business</a></li>
          <li><a href="#">Shop for Business</a></li>
          
        </ul>
      </div> 

{/* <!-- column 7 --> */}

 <div className="col-6 col-md-2">
        <h6 className="fw-bold">For Education</h6>
        <ul className="list-unstyled">
          <li><a href="#">Apple and Education</a></li>
          <li><a href="#">Shop for K-12</a></li>
         <li><a href="#">Shop for Collage</a></li>
        </ul>
      </div> 

  {/* <!-- column 8--> */}
  <div className="col-6 col-md-2">
        <h6 className="fw-bold">For Healthcare</h6>
        <ul className="list-unstyled">
          <li><a href="#">Apple and Healthcare</a></li>
        </ul>
      </div>
 {/* <!-- column 9--> */}
 <div className="col-6 col-md-2">
        <h6 className="fw-bold">For Goverment</h6>
        <ul className="list-unstyled">
          <li><a href="#">Apple and Government</a></li>
          <li><a href="#">Shop for Veterans and Military</a></li>
         <li><a href="#">Shop for State and Local Employees</a></li>
              <li><a href="#">Shop for Federal Employees</a></li>
        </ul>
      </div> 

{/* <!-- column 10--> */}
 <div className="col-6 col-md-2">
        <h6 className="fw-bold">Apple Values</h6>
        <ul className="list-unstyled">
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">Education</a></li>
         <li><a href="#">Environment</a></li>
              <li><a href="#">Inclusion and Diversity</a></li>
           <li><a href="#">Privacy</a></li>
          <li><a href="#">Racial Equity and Justice</a></li>
          <li><a href="#">Supply Chain Innovation</a></li>
        </ul>
      </div> 

{/* <!-- column 11--> */}
<div className="col-6 col-md-2">
        <h6 className="fw-bold"> About Apple </h6>
        <ul className="list-unstyled">
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">Apple Leadership</a></li>
         <li><a href="#">Career Opportunities</a></li>
              <li><a href="#">Investors</a></li>
           <li><a href="#">Ethics & Compliance</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact Apple</a></li>

        </ul>
      </div>

    </div>
  </div>
    {/* <!-- Divider --> */}
     <hr className="my-3"/>  

    {/* <!-- Bottom Text --> */}
    <div className="footer-bottom d-flex  align-items-center">
      <p className="copyright mb-0 me-3">Copyright © 2025 Apple Inc. All rights reserved.</p>
      <ul className="footer-links mb-0 d-flex">
        <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
        <li className="list-inline-item"><a href="#">Terms of Use</a></li>
        <li className="list-inline-item"><a href="#">Sales and Refunds</a></li>
      </ul>
    </div>

</footer> 
    </>
  )
 }