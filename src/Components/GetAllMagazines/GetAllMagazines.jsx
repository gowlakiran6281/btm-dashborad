// import React, { useState, useEffect } from "react";
// // import "./GetAllArticles.css";

// function GetAllMagazines() {
//   const [fetchedData, setFetchedData] = useState(null);

//   useEffect(() => {
//     fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/magazine/getall')
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
//       <h1>Fetched Magazines:</h1>
//       {fetchedData !== null && fetchedData !== undefined ? (
//         <div>
//           {fetchedData.map(article => (
//             <div key={article._id} className="article-details">
//               <div className="title-div">
//                 <h2>MagazineTitle: {article.MagazineTitle}</h2>
//               </div>
//               <div className="hello">
//                 <p>description: {article.description}</p>
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

// export default GetAllMagazines;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function GetAllMagazines() {
//   const [fetchedData, setFetchedData] = useState(null);

//   useEffect(() => {
//     fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/magazine/getall')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Complete API Response:', data);
//         setFetchedData(data);
//         console.log('Fetched data:', data);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   // Assuming you want to delete a magazine by ID
//   const handleDelete = (magazineId) => {
//     axios
//       .delete(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/magazine/delete/${magazineId}`)
//       .then(response => {
//         console.log("Response from server:", response.data);
//         alert("Magazine deleted successfully!");
//         // Refresh the list of magazines after deletion
//         // You may want to fetch the data again or update the state in another way
//       })
//       .catch(error => {
//         console.error("Error deleting magazine:", error);
//         alert("Error deleting magazine. Please try again.");
//       });
//   };

//   return (
//     <div className="container">
//       <h1>Fetched Magazines:</h1>
//       {fetchedData !== null && fetchedData !== undefined ? (
//         <div>
//           {fetchedData.map(magazine => (
//             <div key={magazine._id} className="magazine-details">
//               <div className="title-div">
//                 <h2>Magazine Title: {magazine.MagazineTitle}</h2>
//               </div>
//               <div className="description-div">
//                 <p>Description: {magazine.description}</p>
//               </div>
//               <img src={magazine.Banner_location} alt="Banner" />
//               {/* You can display other magazine details similarly */}
//               <div className="delete-button">
//                 <button onClick={() => handleDelete(magazine._id)}>Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default GetAllMagazines;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GetAllMagazines.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";



function GetAllMagazines() {
  const [fetchedData, setFetchedData] = useState(null);
  const [selectedMagazine, setSelectedMagazine] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/magazine/getall"
      );
      setFetchedData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUpdate = async () => {
    if (!selectedMagazine) return;
    try {
      const response = await axios.put(
        `http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/magazine/updatemagazine/${selectedMagazine._id}`,
        { /* Updated data */ }
      );
      console.log("Update successful:", response.data);
      fetchData();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDelete = async (magazineId) => {
    try {
      const response = await axios.delete(
        `http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/magazine/delete/${magazineId}`
      );
      console.log("Delete successful:", response.data);
      fetchData();
      setSelectedMagazine(null);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  
  return (
    <div className="containers">
      <h1>Fetched Magazines:</h1>
      {fetchedData !== null && fetchedData !== undefined ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Banner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map(magazine => (
              <tr key={magazine._id}>
                <td>{magazine.MagazineTitle}</td>
                <td>{magazine.description}</td>
                <td><img className="images" src={magazine.Banner_location} alt="Banner" /></td>
                <td>
                  <button className="button" onClick={() => setSelectedMagazine(magazine)}><FaEdit />
</button>
                  <button className="button1" onClick={() => handleDelete(magazine._id)}><MdDelete /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}

      {selectedMagazine && (
        <div>
          <h2>Selected Magazine</h2>
          <p>Title: {selectedMagazine.MagazineTitle}</p>
          <p>Description: {selectedMagazine.description}</p>
          <img src={selectedMagazine.Banner_location} alt="Banner" />

          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => handleDelete(selectedMagazine._id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default GetAllMagazines;
