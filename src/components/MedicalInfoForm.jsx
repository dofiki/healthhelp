import React, { useState, useEffect } from "react";

const MedicalInfoForm = () => {
  // Initial form data
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    age: "",
    height: "",
    weight: "",
    bloodPressure: "",
    sugar: "",
    otherDetails: "",
    bloodType: "",
    pastMedicalRecords: "", // New field for past medical records
  });

  const [bmiReport, setBmiReport] = useState(""); // State for BMI report

  // Load saved report and past medical records from localStorage on page load
  useEffect(() => {
    const savedReport = localStorage.getItem("medicalReport");
    const savedPastMedicalRecords = localStorage.getItem("pastMedicalRecords");

    if (savedReport) {
      setBmiReport(savedReport);
    }

    if (savedPastMedicalRecords) {
      setFormData((prevState) => ({
        ...prevState,
        pastMedicalRecords: savedPastMedicalRecords,
      }));
    }
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Calculate BMI and generate report
  const calculateBmi = () => {
    const heightInMeters = formData.height / 100; // Convert height from cm to meters
    const bmi = (formData.weight / (heightInMeters * heightInMeters)).toFixed(2); // BMI formula
    let report = `BMI: ${bmi}\n`;

    // Generate report based on BMI value
    if (bmi < 18.5) {
      report += "You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      report += "You have a normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      report += "You are overweight.";
    } else {
      report += "You are obese.";
    }

    // Add blood pressure and sugar level recommendations
    const bloodPressureRecommendation = "Your blood pressure should ideally be around 120/80 mmHg.";
    const sugarLevelRecommendation = "Your sugar level should ideally be between 70-100 mg/dL (fasting).";

    // Include user data in the report
    report += `\n\nPersonal Information:\nName: ${formData.name}\nSex: ${formData.sex}\nAge: ${formData.age}\nHeight: ${formData.height} cm\nWeight: ${formData.weight} kg\nBlood Pressure: ${formData.bloodPressure} mmHg\nSugar Level: ${formData.sugar} mg/dL\nBlood Type: ${formData.bloodType}\n\nRecommendations:\n${bloodPressureRecommendation}\n${sugarLevelRecommendation}`;

    // Include past medical records if available
    if (formData.pastMedicalRecords) {
      report += `\n\nPast Medical Records:\n${formData.pastMedicalRecords}`;
    }

    // Save the report in state
    setBmiReport(report);

    // Save the report to localStorage for persistence
    localStorage.setItem("medicalReport", report);
  };

  // Handle form submission and reset
  const handleSave = (e) => {
    e.preventDefault();
    calculateBmi(); // Generate the report when saving

    // Clear form data except for past medical records (to keep them for the next save)
    setFormData((prevState) => ({
      name: "",
      sex: "",
      age: "",
      height: "",
      weight: "",
      bloodPressure: "",
      sugar: "",
      otherDetails: "",
      bloodType: "",
      pastMedicalRecords: prevState.pastMedicalRecords, // Keep past records
    }));

    // Save past medical records to localStorage
    localStorage.setItem("pastMedicalRecords", formData.pastMedicalRecords);
  };

  return (
    <div className="medical-all">
      {/* Form Section */}
      <div className="form">
        <form onSubmit={handleSave}>
          <h2>Medical Information</h2>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Sex: </label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label>Age: </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Height (in cm): </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Weight (in kg): </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Blood Pressure (in mmHg): </label>
            <input
              type="text"
              name="bloodPressure"
              value={formData.bloodPressure}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Sugar Records (in mg/dL): </label>
            <input
              type="text"
              name="sugar"
              value={formData.sugar}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Other Details: </label>
            <textarea
              name="otherDetails"
              value={formData.otherDetails}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Blood Type: </label>
            <select
              name="bloodType"
              value={formData.bloodType}
              onChange={handleInputChange}
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Past Medical Records Section */}
          <div>
            <label>Past Medical Records: </label>
            <textarea
              name="pastMedicalRecords"
              value={formData.pastMedicalRecords}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit">Save</button>
        </form>
      </div>

      {/* BMI Report Section (Right Side) */}
      <div className="bmi">
        <h3>General Report</h3>
        <pre>{bmiReport}</pre>
      </div>
    </div>
  );
};

export default MedicalInfoForm;
