import HosptialLocator from "../components/HosptialLocator";

const Home = () => {
    return (
      <div className="homePage">
        <header className="homeHeader">
          <h1>Welcome to the HealthHelp</h1>
          <p>Locate the nearest hospitals and securely share your general health report with them.</p>
        </header>
        <main>
          <HosptialLocator />
        </main>
      </div>
    );
  };
  
  
  export default Home;
  