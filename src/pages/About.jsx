const About = () => {
  return (
    <div className="about-container">
      <p>
        Welcome to our <strong>Health Help app</strong>, your trusted companion in maintaining and tracking your health information. This platform is designed to simplify the process of collecting and storing personal health data, generating insightful reports, and assisting in emergencies when you need it most. Here’s how our app works:
      </p>
      <br/>
      <h2>1. Collecting Your General Information</h2>
      <p>
        Our app makes it easy for you to input and manage your personal health data. The form consists of fields like:
      </p>
      <ul>
        <li>Basic Information: Name, Age, Gender, and Blood Type.</li>
        <li>Health Metrics: Height, Weight, Blood Pressure, and Sugar Levels.</li>
        <li>Past Medical Records: A section to record any relevant previous medical history that might assist in your care.</li>
      </ul>
      <p>
        As you fill out the form, your data is securely stored, and we generate a <strong>General Health Report</strong> based on the information provided.
      </p>
      <br/>
      <h2>2. Generating the Health Report</h2>
      <p>
        Once your data is entered, our app will use the information to generate a detailed <strong>General Health Report</strong>, which includes:
      </p>
      <ul>
        <li><strong>BMI Calculation</strong>: Based on your weight and height, we calculate your BMI and provide personalized insights.</li>
        <li><strong>Blood Pressure & Sugar Levels</strong>: We will recommend ideal ranges for these vital health metrics and alert you if any values fall outside the healthy range.</li>
        <li><strong>Health Recommendations</strong>: Our system will provide suggestions based on your health metrics, helping you maintain or improve your health.</li>
      </ul>
      <p>
        This <strong>General Health Report</strong> is saved for your reference and can be easily updated when new information is available.
      </p>
      <br/>
      <h2>3. Emergency Support: Search for Nearby Hospitals</h2>
      <p>
        In case of an emergency, it’s important to act quickly. Our app includes a built-in <strong>hospital search feature</strong> that helps you locate hospitals nearby. Here’s how it works:
      </p>
      <ul>
        <li><strong>Hospital Search</strong>: In an emergency, you can instantly search for hospitals near your location using your device’s GPS.</li>
        <li><strong>Send General Report</strong>: If you need to share your health information with medical professionals, our app allows you to send your <strong>General Health Report</strong> directly to a nearby hospital. This ensures that the hospital staff receives your most up-to-date health information, allowing them to provide the best care possible.</li>
        <li><strong>Real-Time Assistance</strong>: Our platform helps you navigate your health and emergency situations, ensuring that help is on the way, fast and efficient.</li>
      </ul>
      <br/>
      <h2>4. Your Privacy Matters</h2>
      <p>
        We understand that your health data is sensitive. Rest assured, your information is <strong>stored securely</strong> and is only shared with medical professionals in the event of an emergency. We take your privacy seriously and ensure that all your data is protected with the highest level of security.
      </p>
      <br/>
      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>Ease of Use</strong>: Simple forms to enter and manage your health information.</li>
        <li><strong>Health Insights</strong>: Get immediate health reports that help you understand your body and take action when needed.</li>
        <li><strong>Emergency Support</strong>: Quickly find nearby hospitals and share your medical information for fast and efficient care.</li>
      </ul>
      <p>
        We’re here to make managing your health easier, safer, and more accessible. Keep track of your health and be prepared for emergencies with <strong>Medical Info App</strong>!
      </p>
      <br/>
      <h2>How We Help in Emergency Situations</h2>
      <p>
        In case of an emergency, our app’s <strong>hospital search</strong> feature uses your current location to find nearby medical facilities. You can then send your <strong>General Health Report</strong>, which includes your BMI, blood pressure, sugar levels, and other important medical information directly to the hospital. This ensures the hospital staff has all the necessary details to treat you quickly and effectively.
      </p>
    </div>
  );
};

export default About;