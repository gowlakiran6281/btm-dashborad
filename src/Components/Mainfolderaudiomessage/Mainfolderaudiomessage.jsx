// // import React, { useState, useEffect } from "react";

// // function FolderManager() {
// //   const [folderName, setFolderName] = useState("");
// //   const [folders, setFolders] = useState([]);

// //   useEffect(() => {
// //     fetchFolders();
// //   }, []);

// //   const fetchFolders = async () => {
// //     try {
// //       const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create");
// //       const data = await response.json();
// //       setFolders(data);
// //     } catch (error) {
// //       console.error("Error fetching folders:", error);
// //     }
// //   };

// //   const createFolder = async () => {
// //     try {
// //       const response = await fetch("your-api-endpoint-for-creating-folder", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ folderName }),
// //       });

// //       if (response.ok) {
// //         console.log("Folder created successfully!");
// //         // Fetch folders again after creating a new folder
// //         fetchFolders();
// //       } else {
// //         console.error("Failed to create folder:", response.statusText);
// //       }
// //     } catch (error) {
// //       console.error("Error creating folder:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Folder Manager</h1>
// //       <div>
// //         <label>
// //           Folder Name:
// //           <input
// //             type="text"
// //             value={folderName}
// //             onChange={(e) => setFolderName(e.target.value)}
// //           />
// //         </label>
// //         <button onClick={createFolder}>Save</button>
// //       </div>
// //       <div>
// //         <h2>All Folders:</h2>
// //         <ul>
// //           {folders.map((folder) => (
// //             <li key={folder.id}>{folder.name}</li>
// //           ))}
// //         </ul>
// //         <button onClick={fetchFolders}>Get All</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FolderManager;


// import React, { useState, useEffect } from "react";

// function FolderManager() {
//   const [folderName, setFolderName] = useState("");
//   const [folders, setFolders] = useState([]);

//   useEffect(() => {
//     fetchFolders();
//   }, []);

//   const fetchFolders = async () => {
//     try {
//       const response = await fetch("your-api-endpoint-for-getting-folders");
//       const data = await response.json();
//       // Ensure that data is an array before setting it
//       if (Array.isArray(data)) {
//         setFolders(data);
//       } else {
//         console.error("Data is not an array:", data);
//       }
//     } catch (error) {
//       console.error("Error fetching folders:", error);
//     }
//   };

//   const createFolder = async () => {
//     try {
//       const response = await fetch("your-api-endpoint-for-creating-folder", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ folderName }),
//       });

//       if (response.ok) {
//         console.log("Folder created successfully!");
//         // Fetch folders again after creating a new folder
//         fetchFolders();
//       } else {
//         console.error("Failed to create folder:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error creating folder:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Folder Manager</h1>
//       <div>
//         <label>
//           Folder Name:
//           <input
//             type="text"
//             value={folderName}
//             onChange={(e) => setFolderName(e.target.value)}
//           />
//         </label>
//         <button onClick={createFolder}>Save</button>
//       </div>
//       <div>
//         <h2>All Folders:</h2>
//         <ul>
//           {folders.map((folder) => (
//             <li key={folder.id}>{folder.name}</li>
//           ))}
//         </ul>
//         <button onClick={fetchFolders}>Get All</button>
//       </div>
//     </div>
//   );
// }

// export default FolderManager;

import React, { useState, useEffect } from "react";

function FolderManager() {
  const [folderName, setFolderName] = useState("");
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    fetchFolders();
  }, []);

  const fetchFolders = async () => {
    try {
      const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create");
      const data = await response.json();
      // Ensure that data is an array before setting it
      if (Array.isArray(data)) {
        setFolders(data);
      } else {
        console.error("Data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };

  const createFolder = async () => {
    try {
      const response = await fetch("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/mainfolder/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ folderName }),
      });

      if (response.ok) {
        console.log("Folder created successfully!");
        // Fetch folders again after creating a new folder
        fetchFolders();
      } else {
        console.error("Failed to create folder:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  return (
    <div>
      <h1>Folder Manager</h1>
      <div>
        <label>
          Folder Name:
          <input
            type="text"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
        </label>
        <button onClick={createFolder}>Save</button>
      </div>
      <div>
        <h2>All Folders:</h2>
        <ul>
          {folders.map((folder) => (
            <li key={folder.id}>{folder.name}</li>
          ))}
        </ul>
        <button onClick={fetchFolders}>Get All</button>
      </div>
    </div>
  );
}

export default FolderManager;
