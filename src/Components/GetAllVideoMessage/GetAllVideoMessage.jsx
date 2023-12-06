import React, { useState, useEffect } from "react";
import { Table, Button, Space, Input } from "antd";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./GetAllVideoMessage.css";

const GetAllVideoMessage = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/message/getall"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/message/update/${selectedItem._id}`,
        editedData
      );
      console.log("Update successful:", response.data);
      fetchData();
      setEditMode(false);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/message/delete/${selectedItem._id}`
      );
      console.log("Delete successful:", response.data);
      fetchData();
      setSelectedItem(null);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleEdit = (record) => {
    setSelectedItem(record);
    setEditedData({ ...record });
    setEditMode(true);
  };

  const handleInputChange = (e, key) => {
    setEditedData({
      ...editedData,
      [key]: e.target.value,
    });
  };

  const columns = [
    {
      title: "Message Title",
      dataIndex: "MessageTitle",
      key: "MessageTitle",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "YouTube URL",
      dataIndex: "YouTube_Url",
      key: "YouTube_Url",
    },
    {
      title: "Banner",
      dataIndex: "Banner_Location",
      key: "Banner_Location",
      render: (text) => <img src={text} alt="Banner" style={{ width: "50px" }} />,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space>
          <Button className="button" onClick={() => handleEdit(record)}><FaEdit /></Button>
          <Button className="button1" onClick={() => handleDelete(record)}><MdDelete /></Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>Video Messages</h1>
      <Table dataSource={data} columns={columns} rowKey="_id" />

      {selectedItem && (
        <div>
          {editMode ? (
            <div>
              <h2>Edit Item</h2>
              <Input
                placeholder="Title"
                value={editedData.MessageTitle}
                onChange={(e) => handleInputChange(e, "MessageTitle")}
              />
              <Input
                placeholder="Description"
                value={editedData.description}
                onChange={(e) => handleInputChange(e, "description")}
              />
              <Input
                placeholder="YouTube URL"
                value={editedData.YouTube_Url}
                onChange={(e) => handleInputChange(e, "YouTube_Url")}
              />
              {/* Add more input fields as needed */}
              <Button onClick={handleUpdate}>Save</Button>
              <Button onClick={() => setEditMode(false)}>Cancel</Button>
            </div>
          ) : (
            <div>
              <h2>Selected Item</h2>
              <p>Title: {selectedItem.MessageTitle}</p>
              <p>Description: {selectedItem.description}</p>
              <p>YouTube URL: {selectedItem.YouTube_Url}</p>
              <img src={selectedItem.Banner_Location} alt="Banner" />
            </div>
          )}

          {!editMode && (
            <div>
              <Button onClick={handleUpdate}>Update</Button>
              <Button onClick={handleDelete}>Delete</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GetAllVideoMessage;
 

