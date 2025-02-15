import { Link } from "react-router-dom";

export default function Footer(){
    return (
     <>
      <div className='footer'>

        <div className="top">

          <div className="right">
            <div className="follow">
              <div className="main">Follow</div>
              <div className="sub-section">
              <p className="sub">Instagram</p>
                <p className="sub">Facebook</p>
                <p className="sub">Twitter</p>
                <p className="sub">Pinterest</p>

              </div>
            </div>
            <div className="Contact">
            <div className="main">Contact</div>
            <div className="sub-section">
                <p className="sub">XXXX</p>
                <p className="sub">+977-XX-XXXX</p>
                <p className="sub">info@xyz.com</p>

                <p className="sub">send@helthhelp.com</p>
              </div>
            </div>
            <div className="Address">
            <div className="main">Address</div>
            <div className="sub-section">
                <p className="sub">Kathmandu, Nepal</p>
                <p className="sub">XXXX, XX</p>
                <p className="sub">25866, 5c</p>
                <p className="sub">XYZ</p>

              </div>
            </div>

            <div className="navigation">
            <div className="main">Navigation</div>
            <div className="sub-section">
              <Link to="/">Home</Link>
              <Link to="/medical-info">Medical Info</Link>
              <Link to="/tracker">Tracker</Link>
              <Link to="/about">About</Link>
              </div>
            </div>
          </div>
        </div>

      <div className="bottom">
  
        <hr 
          style={{
            border: 0,
            height: '1px',
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(255,255,255,0.5), rgba(0,0,0,0))'
          }}/>

        <p>©Health Help. All rights reserved.</p>
    </div>
          
      </div>
  
     </>
    
    )
  }