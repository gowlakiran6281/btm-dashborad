// import React, { useState } from "react";
// import "./AudioMessage.css";

// const AudioMessage = () => {
//   const [formData, setFormData] = useState({
//     MessageTitle
// : "",
// description
// : "",
// YouTube_Url
// : "",
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handleDownload = () => {
//     // Add logic for download button if needed
//   };

//   const handleSave = () => {
//     // Add logic for save button if needed
//   };

//   return (
//     <div className="container">
//       <div>
//         <h1>AudioMessage</h1>
//         <div className="title-div">
//           <p>Title :</p>
//           <input id="title" type="text" value={formData.title} onChange={handleChange} />
//         </div>
//         <div className="artist-dev">
//           <p>Description :</p>
//           <input id="description" type="text" value={formData.description} onChange={handleChange} />
//         </div>
//         <div className="artist-dev">
//           <p>YouTube URL :</p>
//           <input id="youtubeURL" type="text" value={formData.youtubeURL} onChange={handleChange} />
//         </div>
//         <div className="Download">
//           {/* <button onClick={handleDownload}>Download</button> */}
//           <button onClick={handleSave}>Save</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AudioMessage;


// import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import './MusicForm.css'; // Import your CSS file here

// function AudioMessage() {
//     const [MessageTitle, setMessageTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [Youtube_Url, setYoutube_Url] = useState('');
//     const [Banner, setBanner] = useState(null);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('title', MessageTitle);
//         formData.append('description', description);
//         formData.append('youtube_url', Youtube_Url);

//         if (Banner) {
//             formData.append('banner', Banner);
//         }

//         console.log("Form Data:", formData);

//         axios.post('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/message/upload', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         })
//             .then(result => console.log(result))
//             .catch(err => console.log(err));
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setBanner(file);
//     };

//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <h1>AudioMessage</h1>
//                     <div className="title-div">
//                         <p>Title :</p>
//                         <input id="title" type="text" value={MessageTitle} onChange={(e) => setMessageTitle(e.target.value)} />
//                     </div>
//                     <div className="artist-dev">
//                         <p>Description :</p>
//                         <input id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//                     </div>
//                     <div className="artist-dev">
//                         <p>YouTube URL :</p>
//                         <input id="youtubeURL" type="text" value={Youtube_Url} onChange={(e) => setYoutube_Url(e.target.value)} />
//                     </div>
//                     <div className="artist-dev">
//                         <p>Upload image :</p>
//                         <input id="banner" type="file" onChange={handleFileChange} />
//                     </div>
//                     <button type="submit">
//                         Save
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default AudioMessage;




// import React, { useState } from "react";
// import "./AudioMessage.css";

// const AudioMessage = () => {
//   const [uploadMessage, setUploadMessage] = useState(null);
//   // Define state to store form data
//   const [formData, setFormData] = useState({
//     MessageTitle: "",
//     description: "",
//     Banner: null, // Add Banner property to store
//     Youtube_Url: "", 
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;

//     // Check if the input is a file input
//     const inputValue = type === 'file' ? files[0] : value;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: inputValue,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     console.log("Form Data:", formData);

//     try {
//       // Use FormData to handle files in the request
//       const formDataForUpload = new FormData();
//       formDataForUpload.append('MessageTitle', formData.MessageTitle);
//       formDataForUpload.append('description', formData.description);
//       formDataForUpload.append('Banner', formData.Banner);
//       formDataForUpload.append('Youtube_Url', formData.Youtube_Url);
//       // formDataForUpload.append('pdf', formData.pdf);

//       // Send a POST request to the server
//       const response = await fetch(
//         "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/message/upload",
//         {
//           method: "POST",
//           body: formDataForUpload,
//         }
//       );

//       console.log("Response:", response);

//       if (!response.ok) {
//         setUploadMessage("Failed to upload AudioMessage");
//         throw new Error("Failed to upload AudioMessage");
//       }

//       // Handle success
//       console.log("AudioMessage uploaded successfully");
//       setUploadMessage("AudioMessage uploaded successfully");
//     } catch (error) {
//       // Handle errors
//       console.error("Error uploading AudioMessage:", error);
//       setUploadMessage("Error uploading AudioMessage");
//     }
//   };

//   return (
//     <div className="container">
//       <div>
//         <h1>Message</h1>
//         <div className="title-div">
//           <p>Title :</p>
//           <input
//             type="text"
//             name="MessageTitle"
//             value={formData.MessageTitle}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="artist-dev">
//           <p>Description :</p>
//           <input
//             type="text"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="url-dev">
//           <p>Youtube URL :</p>
//           <input
//             type="text"
//             name="Youtube_Url"
//             value={formData.Youtube_Url}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="url-dev">
//           <p>Banner :</p>
//           <input
//             type="file"
//             name="Banner"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="Download">
//           <button onClick={handleSubmit}>Upload</button>
//           {uploadMessage && <p>{uploadMessage}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AudioMessage;


import React, { useState } from "react";
import "./AudioMessage.css";

const AudioMessage = () => {
  const apiUrl = process.env.REACT_APP_BASE_URL;
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
        `${apiUrl}/message/upload`,
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
        <h1>Message</h1>
        <div className="title-div">
          <p>Title :</p>
          <input
            type="text"
            name="MessageTitle"
            value={formData.MessageTitle}
            onChange={handleChange}
          />
        </div>
        <div className="artist-dev">
          <p>Description :</p>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="url-dev">
          <p>Youtube URL :</p>
          <input
            type="text"
            name="Youtube_Url"
            value={formData.Youtube_Url}
            onChange={handleChange}
          />
        </div>
        <div className="url-dev">
          <p>Banner :</p>
          <input
            type="file"
            name="Banner"
            onChange={handleChange}
          />
        </div>
        <div className="Download">
          <button onClick={handleSubmit}>Upload</button>
          {uploadMessage && <p>{uploadMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default AudioMessage;
