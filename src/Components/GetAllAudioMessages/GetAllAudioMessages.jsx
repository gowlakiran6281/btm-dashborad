// import React, { useState, useEffect } from "react";
// // import "./GetAllArticles.css";

// function GetAllAudioMessages() {
//   const [fetchedData, setFetchedData] = useState(null);

//   useEffect(() => {
//     fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audiomessage/getall')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Complete API Response:', data);
//         setFetchedData(data);
//         console.log('Fetched data:', data);
//       })
//       .catch(err => console.log(err));
//   }, []);
  

//   return (
//     <div className="container">
//       <h1>Audio Messages:</h1>
//       {fetchedData !== null && fetchedData !== undefined ? (
//         <div>
//           {fetchedData.map(article => (
//             <div key={article._id} className="article-details">
//               <div className="title-div">
//                 <h2>description: {article.description}</h2>
//               </div>
//               <div className="hello">
//                 <p>Audio_location: {article.Audio_location}</p>
//               </div>
//               <img src={article.Banner_location} alt="Banner" />
//               {/* You can display other article details similarly */}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default GetAllAudioMessages;

import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./GetAllArticles.css";

function GetAllAudioMessages() {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audiomessage/getall')
      .then(response => response.json())
      .then(data => {
        console.log('Complete API Response:', data);
        setFetchedData(data);
        console.log('Fetched data:', data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (audioId) => {
    axios
      .delete(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audio/${audioId}`)
      .then(response => {
        console.log("Response from server:", response.data);
        alert("Audio message deleted successfully!");
        // Refresh the list of audio messages after deletion
        // You may want to fetch the data again or update the state in another way
      })
      .catch(error => {
        console.error("Error deleting audio message:", error);
        alert("Error deleting audio message. Please try again.");
      });
  };

  return (
    <div className="container">
      <h1>Audio Messages:</h1>
      {fetchedData !== null && fetchedData !== undefined ? (
        <div>
          {fetchedData.map(audio => (
            <div key={audio._id} className="audio-details">
              <div className="description-div">
                <h2>Description: {audio.description}</h2>
              </div>
              <div className="audio-location">
                <p>Audio Location: {audio.Audio_location}</p>
              </div>
              <img src={audio.Banner_location} alt="Banner" />
              {/* You can display other audio details similarly */}
              <div className="delete-button">
                <button onClick={() => handleDelete(audio._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GetAllAudioMessages;

