// import React, { useState, useEffect } from "react";
// import "./GetAllArticles.css";

// function GetAllArticles() {
//   const [fetchedData, setFetchedData] = useState(null);

//   useEffect(() => {
//     fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/article/getall')
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
//       <h1>Fetched Articles:</h1>
//       {fetchedData !== null && fetchedData !== undefined ? (
//         <div>
//           {fetchedData.map(article => (
//             <div key={article._id} className="article-details">
//               <div className="title-div">
//                 <h2>ArticleTitle: {article.ArticleTitle}</h2>
//               </div>
//               <div className="hello">
//                 <p>Content: {article.content}</p>
//               </div>
//               <img className="articalbanner" src={article.Banner_location} alt="Banner" />
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

// export default GetAllArticles;



import React, { useState, useEffect } from "react";
import "./GetAllArticles.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function GetAllArticles() {
  const [fetchedData, setFetchedData] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/article/getall")
      .then((response) => response.json())
      .then((data) => {
        console.log("Complete API Response:", data);
        setFetchedData(data);
        console.log("Fetched data:", data);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (article) => {
    // Implement the logic to update the article
    // You may use the selectedArticle state to get the selected article's ID
    // Make a PUT request to update the article data
    fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/article/updateArticle/${article._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ /* Updated data */ }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Update successful:", data);
        fetchData(); // Refresh the data after updating
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleDelete = (article) => {
    // Implement the logic to delete the article
    // You may use the selectedArticle state to get the selected article's ID
    // Make a DELETE request to delete the article
    fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/article/delete/${article._id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete successful:", data);
        fetchData(); // Refresh the data after deleting
        setSelectedArticle(null); // Clear the selected article after deletion
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div className="containers">
      <h1>Fetched Articles:</h1>
      {fetchedData !== null && fetchedData !== undefined ? (
        <table>
          <thead>
            <tr>
              <th>Article Title</th>
              <th>Content</th>
              <th>Banner</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map((article) => (
              <tr key={article._id}>
                <td>{article.ArticleTitle}</td>
                <td>{article.content}</td>
                <td>
                  <img className="article-banner" src={article.Banner_location} alt="Banner" />
                </td>
                <td>
                  <button className="button" onClick={() => handleUpdate(article)}><FaEdit /></button>
                  <button className="button1" onClick={() => handleDelete(article)}><MdDelete /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GetAllArticles;
