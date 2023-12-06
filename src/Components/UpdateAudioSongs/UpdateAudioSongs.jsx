// Import necessary modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DownloadOutlined, ReadOutlined } from "@ant-design/icons";
import "./UpdateAudioSongs.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function CrudApp() {
  const [fetchedData, setFetchedData] = useState([]);
  const [formData, setFormData] = useState({
    AlbumName: "",
    artist: "",  // Add other fields as needed
    lyrics: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audio/getall"
      );
      setFetchedData(response.data.getallsongs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGetAll = async () => {
    fetchData();
  };

  const handleCreate = async () => {
    try {
      await axios.post(
        "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audio/audioupload",
        formData
      );
      fetchData();
    } catch (error) {
      console.error("Error creating record:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(
        `http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/{baseurl}audio/updateAudio/${id}`,
        formData
      );
      fetchData();
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audio/delete/${id}`
      );
      fetchData();
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

   const [selectedSong, setSelectedSong] = useState(null);

  const handleEdit = (song) => {
    setSelectedSong(song);
    // You may open a modal or set up an inline edit here
  };

  const handleSaveEdit = async () => {
    if (selectedSong) {
      try {
        await axios.put(
          `http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/audio/updateAudio/${selectedSong._id}`,
          formData
        );
        fetchData();
        setSelectedSong(null); // Clear selected song after update
      } catch (error) {
        console.error("Error updating record:", error);
      }
    }
  };

  return (
    <div>
      <div>
        <label>
            <p className="album">Album Name:</p>
          <input
            className="input"
            type="text"
            name="AlbumName"
            value={formData.AlbumName}
            onChange={handleInputChange}
          />
        </label>
        {/* Add other input fields as needed */}
      </div>

      <button className="btn" onClick={handleGetAll}>Get All</button>

      <table>
        <thead>
          <tr>
            <th>Banner</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Lyrics</th>
            <th>Audio</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData.map((song) => (
          <tr key={song._id}>
            {/* ... (other code) */}
            <td>
              {selectedSong === song ? (
                <input
                  type="text"
                  name="artist"
                  value={formData.artist}
                  onChange={handleInputChange}
                />
              ) : (
                song.artist
              )}
            </td>
            <td>
              {selectedSong === song ? (
                <input
                  type="text"
                  name="AlbumName"
                  value={formData.AlbumName}
                  onChange={handleInputChange}
                />
              ) : (
                song.AlbumName
              )}
            </td>
            <td>
              {selectedSong === song ? (
                <input
                  type="text"
                  name="lyrics"
                  value={formData.lyrics}
                  onChange={handleInputChange}
                />
              ) : (
                song.lyrics
              )}
              </td>
              <td>
                <audio controls>
                  <source src={song.Audio_location} type="audio/mpeg" />
                </audio>
              </td>
              <td>
                {selectedSong === song ? (
                  <button className="button" onClick={handleSaveEdit}>
                    Save
                  </button>
                ) : (
                  <button className="button" onClick={() => handleEdit(song)}>
                    <FaEdit />
                  </button>
                )}
              </td>
              <td>
                <button className="button1" onClick={() => handleDelete(song._id)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudApp;
  