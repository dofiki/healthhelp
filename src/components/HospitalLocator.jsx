import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles

export default function HospitalLocator({ trackerData, setTrackerData }) {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [notification, setNotification] = useState(""); // State for notification

  const searchLocation = async () => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
    );
    const data = await response.json();
    if (data.length > 0) {
      const { lat, lon } = data[0];
      setCoordinates([parseFloat(lat), parseFloat(lon)]);
      fetchHospitals(lat, lon);
    }
  };

  const fetchHospitals = async (lat, lon) => {
    const response = await fetch(
      `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="hospital"](around:5000,${lat},${lon});out;`
    );
    const data = await response.json();
    setHospitals(data.elements);
  };

  // Handle the "Inform" button click
  const handleInform = (hospital) => {
    const hospitalName = hospital.tags.name || "Hospital";
    const date = new Date().toLocaleDateString(); // Get the current date

    // Add the hospital name and date to the tracker data
    setTrackerData((prevData) => [
      ...prevData,
      { hospitalName, date, details: "" },
    ]);

    // Show a notification
    setNotification(`Information sent to ${hospitalName}!`);

    // Hide the notification after 5 seconds
    setTimeout(() => {
      setNotification("");
    }, 5000);
  };

  return (
    <div className="searchCont">
      <div className="ser">
        <input
          className="hos"
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="srBtn" onClick={searchLocation}>
          Search
        </button>
      </div>

      {/* Display the notification if there is one */}
      {notification && <div className="notification">{notification}</div>}

      {coordinates && (
        <div className="mapContainer">
          <MapContainer
            center={coordinates}
            zoom={13}
            style={{ height: "50vh", width: "50vw" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={coordinates}>
              <Popup>Your Location</Popup>
            </Marker>
            {hospitals.map((hospital, index) => (
              <Marker key={index} position={[hospital.lat, hospital.lon]}>
                <Popup>
                  {hospital.tags.name || "Hospital"} <br />
                  <button className="informButton" onClick={() => handleInform(hospital)}>Inform</button>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </div>
  );
}
