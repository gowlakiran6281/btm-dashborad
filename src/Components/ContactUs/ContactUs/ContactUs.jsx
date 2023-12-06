import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [uploadMessage, setUploadMessage] = useState(null);

  // Define state to store form data
  const [formData, setFormData] = useState({
    Name: "",
    Mobile: "",
    Message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    console.log("Form Data:", formData);

    try {
      // Send a POST request to the server
      const response = await fetch(`${apiUrl}/ContactUs/getall`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(formData),
      });

      console.log("Response:", response);

      if (!response.ok) {
        setUploadMessage("Failed to upload Message");
        throw new Error("Failed to upload Message");
      }

      // Handle success
      console.log("Message uploaded successfully");
      setUploadMessage("Message uploaded successfully");
    } catch (error) {
      // Handle errors
      console.error("Error uploading Message:", error);
      setUploadMessage("Error uploading Message: " + error.message);
    }
  };

  return (
    <div className="container">
      <div>
        <h1>ContactUs</h1>

        <div className="artist-dev">
          <p>Name</p>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div className="url-dev">
          <p>Mobile</p>
          <input
            type="text"
            name="Mobile"
            value={formData.Mobile}
            onChange={handleChange}
          />
        </div>
        <div className="url-dev">
          <p>Message</p>
          <input
            type="text"
            name="Message"
            value={formData.Message}
            onChange={handleChange}
          />
        </div>
        <div className="button-group">
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {uploadMessage && <p>{uploadMessage}</p>}
      </div>
    </div>
  );
};

export default ContactUs;
