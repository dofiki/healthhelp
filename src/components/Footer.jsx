export default function Footer(){
    return (
     <>
      <div className='footer'>

        <div className="top">
        <div className="left">
          <img className="footerLogo" src="/Logo512.png" alt="Logo"/>
         
          </div>

          <div className="right">
            <div className="follow">
              <h4 className="main">Follow Us</h4>
              <div>
                <p className="sub">Instagram</p>
                <p className="sub">Facebook</p>
                <p className="sub">Twitter</p>
              </div>
            </div>
            <div className="Contact">
            <h4 className="main">Contact</h4>
              <div>
                <p className="sub">XXXX</p>
                <p className="sub">+977-XX-XXXX</p>
                <p className="sub">info@healthhelp.com</p>
              </div>
            </div>
            <div className="Address">
            <h4 className="main">Address</h4>
              <div>
                <p className="sub">Kathmandu,Nepal</p>
                <p className="sub">XXXX, XX</p>
                <p className="sub">25866, 5c</p>
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

        <p>© HealthHelp. All rights reserved.</p>
    </div>
          
      </div>
  
     </>
    
    )
  }