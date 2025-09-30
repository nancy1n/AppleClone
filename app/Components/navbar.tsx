  export default function Navbar() {

  return (
   <>
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <div className="container-fluid">
    {/* <!-- Apple logo --> */}
    <a className="navbar-brand me-3" href="#">
      <i className="fa-brands fa-apple fa-lg"></i>
    </a>
    {/* <!-- Navbar items right next to logo --> */}
    <ul className="navbar-nav d-flex flex-row gap-3">
       <li className="nav-item ">
        <a className="nav-link" href="index.html">Store</a>
      </li>
      {/* <!-- Mac --> */}
      <li className="nav-item dropdown-custom">
        <a className="nav-link" href="#">Mac</a>
        <div className="mega-menu">
          <div className="row">
            <div className="col">
              <h6>Explore Mac</h6>
              <a href="#">MacBook Air</a>
              <a href="#">MacBook Pro</a>
              <a href="#">iMac</a>
              <a href="#">Mac mini</a>
            </div>
            <div className="col">
              <h6>Shop Mac</h6>
              <a href="#">Shop Mac</a>
              <a href="#">Accessories</a>
              <a href="#">Compare Mac</a>
            </div>
          </div>
        </div>
      </li>

      {/* <!-- iPhone --> */}
      <li className="nav-item dropdown-custom">
        <a className="nav-link" href="#">iPhone</a>
        <div className="mega-menu">
          <div className="row">
            <div className="col">
              <h6>Explore iPhone</h6>
              <a href="#">iPhone 17 Pro</a>
              <a href="#">iPhone 16</a>
              <a href="#">iPhone SE</a>
            </div>
            <div className="col">
              <h6>Shop iPhone</h6>
              <a href="#">Shop iPhone</a>
              <a href="#">Accessories</a>
              <a href="#">Compare iPhone</a>
            </div>
          </div>
        </div>
      </li>

      {/* <!-- iPad --> */}
      <li className="nav-item dropdown-custom">
        <a className="nav-link" href="#">iPad</a>
        <div className="mega-menu">
          <div className="row">
            <div className="col">
              <h6>Explore iPad</h6>
              <a href="#">iPad Pro</a>
              <a href="#">iPad Air</a>
              <a href="#">iPad mini</a>
            </div>
            <div className="col">
              <h6>Shop iPad</h6>
              <a href="#">Shop iPad</a>
              <a href="#">Accessories</a>
            </div>
          </div>
        </div>
      </li>
{/* <!-- watch --> */}
 <li className="nav-item dropdown-custom">
        <a className="nav-link" href="#">Watch</a>
        <div className="mega-menu">
          <div className="row">
            <div className="col">
              <h6>Explore Watch</h6>
              <a href="#">Apple Watch Ultra</a>
              <a href="#">Apple Watch Series 10</a>
              <a href="#">Apple Watch SE</a>
            </div>
            <div className="col">
              <h6>Shop Watch</h6>
              <a href="#">Shop Watch</a>
              <a href="#">Bands</a>
              <a href="#">Accessories</a>
            </div>
          </div>
        </div>
      </li>
{/* 
<!-- Vision --> */}
      <li className="nav-item dropdown-custom">
        <a className="nav-link" href="#">Vision</a>
        <div className="mega-menu">
          <div className="row">
            <div className="col">
              <h6>Explore Vision</h6>
              <a href="#">Vision Pro</a>
              <a href="#">Features</a>
              <a href="#">Apps</a>
            </div>
            <div className="col">
              <h6>Shop Vision</h6>
              <a href="#">Shop Vision</a>
              <a href="#">Accessories</a>
            </div>
          </div>
        </div>
      </li>
       {/* <!-- AirPods --> */}
      <li className="nav-item dropdown-custom">
        <a className="nav-link" href="#">AirPods</a>
        <div className="mega-menu">
          <div className="row">
            <div className="col">
              <h6>Explore AirPods</h6>
              <a href="#">AirPods Pro</a>
              <a href="#">AirPods (3rd Gen)</a>
              <a href="#">AirPods Max</a>
            </div>
            <div className="col">
              <h6>Shop AirPods</h6>
              <a href="#">Shop AirPods</a>
              <a href="#">Accessories</a>
            </div>
          </div>
        </div>
      </li>
        {/* <!-- TV & Home --> */}
      <li className="nav-item dropdown-custom">
        <a className="nav-link" href="#">TV & Home</a>
        <div className="mega-menu">
          <div className="row">
            <div className="col">
              <h6>Explore TV & Home</h6>
              <a href="#">Apple TV 4K</a>
              <a href="#">HomePod</a>
              <a href="#">Home Accessories</a>
            </div>
            <div className="col">
              <h6>Shop TV & Home</h6>
              <a href="#">Shop TV</a>
              <a href="#">Accessories</a>
            </div>
          </div>
        </div>
      </li>
            {/* <!-- Accessories --> */}
      <li className="nav-item dropdown-custom">
        <a className="nav-link" href="#">Accessories</a>
        <div className="mega-menu">
          <div className="row">
            <div className="col">
              <h6>Explore Accessories</h6>
              <a href="#">Cases</a>
              <a href="#">Chargers</a>
              <a href="#">Keyboards</a>
            </div>
            <div className="col">
              <h6>Shop Accessories</h6>
              <a href="#">All Accessories</a>
              <a href="#">Gift Cards</a>
            </div>
          </div>
        </div>
      </li>
{/* <!-- Support --> */}
      <li className="nav-item dropdown-custom">
        <a className="nav-link" href="#">Support</a>
        <div className="mega-menu">
          <div className="row g-3">
            <div className="col">
              <h6>Get Support</h6>
              <a href="#">iPhone Support</a>
              <a href="#">Mac Support</a>
              <a href="#">iPad Support</a>
            </div>
            <div className="col">
              <h6>Helpful Resources</h6>
              <a href="#">User Guides</a>
              <a href="#">Community</a>
              <a href="#">Repair</a>
            </div>
          </div>
        </div>
      </li>

    </ul>

    {/* <!-- Right icons --> */}
    <div className="ms-auto d-flex align-items-center">
      <a href="/"><i className="fa-solid fa-magnifying-glass mx-2"></i></a>

      <a href="/"><i className="fa-solid fa-bag-shopping mx-2"></i></a>
    </div>
  </div>
</nav>

   </>
  );
}