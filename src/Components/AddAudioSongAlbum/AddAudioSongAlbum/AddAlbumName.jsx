import React, { useState } from "react";
import axios from "axios";

function AddAlbumName() {
  const [post, setPost] = useState({
    AlbumName: "",
    AlbumBanner: null,
  });

  const handleInputChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("AlbumName", post.AlbumName);

      formData.append("AblumBanner", post.AlbumBanner);

      console.log("Form Data:", Array.from(formData.entries()));

      const response = await axios.post(
        "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/album/createalbum",
        formData
      );

      console.log("Response from server:", response.data);
      alert("Album Created successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        console.error("Error response from server:", error.response.data);
        alert("This folder name already exists please change folder name!");
      }

      alert("Error uploading Mainfolder. Please try again.");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Create Main Folder</h1>
        <form onSubmit={handleSubmit}>
          <div className="title-div">
            <p>Folder Name :</p>
            <input
              type="text"
              name="AlbumName"
              value={post.AlbumName}
              onChange={handleInputChange}
            />
          </div>

          <div className="artist-dev">
            <p>Banner:</p>
            <input
              type="file"
              name="AlbumBanner"
              onChange={handleFileChange}
            />
          </div>

          <div className="Download">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAlbumName;
