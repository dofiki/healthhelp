import { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {

  const [ham,setHam]= useState(false)

  function handleHam(){
    setHam(!ham)
    console.log("yo")
  }

  return (
    <nav>
      <div className="logo">
        <img src="/Logo512.png" alt="HealthHelp Logo" />
        <p className="companyName">Health<span style={{fontWeight:"bold"}}>Help</span></p>
      </div>
      <ul className="menuItems">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/medical-info">Medical Info</Link></li>
        <li><Link to="/tracker">Tracker</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <div onClick={handleHam} style={{ cursor: "pointer" }} className="ham">
        <img src="/ham.png" alt="hamburger" />
    </div>

    {ham && (
  <div className="mobileMenu">
      <ul className="mobileMenuItems">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/medical-info">Medical Info</Link></li>
        <li><Link to="/tracker">Tracker</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
  </div>
)}


    </nav>
  );
};

export default Banner;