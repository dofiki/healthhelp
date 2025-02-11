import HospitalLocator from "../components/HospitalLocator";

const Home = ({ trackerData, setTrackerData }) => {
  return (
    <div className="homePage">
      <header className="homeHeader">
        <h1>Welcome to the HealthHelp</h1>
        <p>Locate the nearest hospitals and securely share your general health report with them.</p>
      </header>
      <main>
        <HospitalLocator trackerData={trackerData} setTrackerData={setTrackerData} />
      </main>
    </div>
  );
};

export default Home;