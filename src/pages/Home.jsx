import HospitalLocator from "../components/HospitalLocator";

const Home = ({ trackerData, setTrackerData }) => {
  return (
    <div className="homePage">
      <header className="homeHeader">
        <div className="title">Welcome to the <span style={{color:"#03fd9d", fontWeight:"bolder"}}>HealthHelp</span></div>
        <p>Locate the nearest hospitals and securely share your general health report with them.</p>
      </header>
      <main>
        <HospitalLocator trackerData={trackerData} setTrackerData={setTrackerData} />
      </main>
    </div>
  );
};

export default Home;