import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [uploadMessage, setUploadMessage] = useState(null);
  // Define state to store form data
  const [formData, setFormData] = useState({
    MessageTitle: "",
    description: "",
    Banner: null, // Add Banner property to store
    Youtube_Url: "", 
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Check if the input is a file input
    const inputValue = type === 'file' ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    console.log("Form Data:", formData);

    try {
      // Use FormData to handle files in the request
      const formDataForUpload = new FormData();
      formDataForUpload.append('MessageTitle', formData.MessageTitle);
      formDataForUpload.append('description', formData.description);
      formDataForUpload.append('Banner', formData.Banner);
      formDataForUpload.append('Youtube_Url', formData.Youtube_Url);
      // formDataForUpload.append('pdf', formData.pdf);

      // Send a POST request to the server
      const response = await fetch(
        "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/message/upload",
        {
          method: "POST",
          body: formDataForUpload,
        }
      );

      console.log("Response:", response);

      if (!response.ok) {
        setUploadMessage("Failed to upload AudioMessage");
        throw new Error("Failed to upload AudioMessage");
      }

      // Handle success
      console.log("AudioMessage uploaded successfully");
      setUploadMessage("AudioMessage uploaded successfully");
    } catch (error) {
      // Handle errors
      console.error("Error uploading AudioMessage:", error);
      setUploadMessage("Error uploading AudioMessage");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>ContactUs</h1>
        
        <div className="artist-dev">
          <p>Name :</p>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="url-dev">
          <p>Phone Number :</p>
          <input
            type="text"
            name="Youtube_Url"
            value={formData.Youtube_Url}
            onChange={handleChange}
          />
        </div>
        <div className="url-dev">
          <p>Message :</p>
          <input
            type="text"
            name="Message"
            onChange={handleChange}
          />
        </div>
        <div className="button-group">
            <button type="submit">Submit</button>
          </div>
        
        
      </div>
    </div>
  );
};

export default ContactUs;
