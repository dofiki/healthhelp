import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <nav>
      <div className="logo">
        <img src="public\Logo512.png" />
        <p className="companyName">HealthHelp</p>
        </div>
      <ul className="menuItems">
        <li><Link to="/">Home</Link></li>
      
        <li><Link to="/medical-info">Medical Info</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Banner;
