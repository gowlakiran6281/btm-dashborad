import React, { useState, useEffect } from "react";
import axios from "axios";

function AlbumComponent() {
  const [albums, setAlbums] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState("");

  useEffect(() => {
    // Fetch existing albums from the server when the component mounts
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audiomessagesubcategory/getalls");
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  const createAlbum = async () => {
    try {
      // Send a request to the server to create a new album
      const response = await axios.post("http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audiomessagesubcategory/Audioupload", {
        name: newAlbumName,
      });

      // Update the state with the new album received from the server
      setAlbums((prevAlbums) => [...prevAlbums, response.data]);

      // Clear the input field
      setNewAlbumName("");
    } catch (error) {
      console.error("Error creating album:", error);
    }
  };

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.name}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter album name"
          value={newAlbumName}
          onChange={(e) => setNewAlbumName(e.target.value)}
        />
        <button onClick={createAlbum}>Create Album</button>
      </div>
    </div>
  );
}

export default AlbumComponent;
