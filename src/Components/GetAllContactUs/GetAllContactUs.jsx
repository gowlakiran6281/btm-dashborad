import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function GetAllBanners() {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/ContactUs/getall')
      .then(response => response.json())
      .then(data => {
        console.log('Complete API Response:', data);
        setFetchedData(data);
        console.log('Fetched data:', data);
      })
      .catch(err => console.log(err));
  };

  const deleteBanner = (bannerId) => {
    fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/ContactUs/delete/${bannerId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Delete Response:', data);
        // Refresh the data after deletion
        fetchData();
      })
      .catch(err => console.log(err));
  };

  const updateBanner = (bannerId, newData) => {
    fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/ContactUs/updatestatus/${bannerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Update Response:', data);
        // Refresh the data after update
        fetchData();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h1>Contact US</h1>
      {fetchedData !== null && fetchedData !== undefined ? (
        <table border={'1'} frame={"void"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map(banner => (
              <tr key={banner._id}>
                <td>{banner.name}</td>
                <td>{banner.mobile}</td>
                <td>{banner.message}</td>
                <td>
                  <button onClick={() => deleteBanner(banner._id)}><MdDelete /></button>
                  {/* <button onClick={() => updateBanner(banner._id)}><FaEdit /></button> */}
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

export default GetAllBanners;
