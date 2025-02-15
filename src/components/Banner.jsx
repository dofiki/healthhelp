import { Link } from "react-router-dom";

const Banner = () => {
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
    </nav>
  );
};

export default Banner;