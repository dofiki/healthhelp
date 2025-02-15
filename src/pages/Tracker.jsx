import React, { useState } from "react";

export default function Tracker({ trackerData, setTrackerData }) {
  const [selectedVisit, setSelectedVisit] = useState(null); // State for selected visit details
  const [detailsInput, setDetailsInput] = useState(""); // State for details input
  const [showInput, setShowInput] = useState(null); // State to track which visit's input is visible

  // Handle adding details to a visit
  const handleAddDetails = (index) => {
    const updatedData = [...trackerData];
    updatedData[index].details = detailsInput;
    setTrackerData(updatedData);
    setDetailsInput(""); // Clear the input
    setShowInput(null); // Hide the input field after adding details
  };

  // Handle showing details in a modal
  const handleShowDetails = (visit) => {
    setSelectedVisit(visit);
  };

  // Toggle visibility of input field for adding details
  const toggleInputVisibility = (index) => {
    if (showInput === index) {
      setShowInput(null); // Hide input if it's already visible
    } else {
      setShowInput(index); // Show input for this visit
    }
  };

  // Close the modal
  const closeModal = () => {
    setSelectedVisit(null);
  };

  return (
    <div className="tracker">
      <h2>Your Medical Track Record: </h2>
      <ul>
        {trackerData.map((visit, index) => (
          <li key={index}>
            <strong>{visit.hospitalName}</strong> - {visit.date}
            <div className="btns">
            <button onClick={() => handleShowDetails(visit)}>Show Details</button>
            
            {/* Button to toggle the input field visibility */}
            <button onClick={() => toggleInputVisibility(index)}>
              {showInput === index ? "Cancel" : "Add Details"}
            </button>
            </div>
            {/* Input field to add details, visible only if showInput matches the visit index */}
            {showInput === index && (
              <>
                <input
                  className="dtl"
                  type="text"
                  placeholder="Add details about the visit"
                  value={detailsInput}
                  onChange={(e) => setDetailsInput(e.target.value)}
                />
                <button className="addDetail" onClick={() => handleAddDetails(index)}>Add Details</button>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Modal to show visit details */}
      {selectedVisit && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedVisit.hospitalName}</h3>
            <p>Date: {selectedVisit.date}</p>
            <p>Details: {selectedVisit.details}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
