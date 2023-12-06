import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function GetAllBanners() {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/banner/getall')
      .then(response => response.json())
      .then(data => {
        console.log('Complete API Response:', data);
        setFetchedData(data);
        console.log('Fetched data:', data);
      })
      .catch(err => console.log(err));
  };

  const deleteBanner = (bannerId) => {
    fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/banner/delete/${bannerId}`, {
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
    fetch(`http://ec2-15-207-196-141.ap-south-1.compute.amazonaws.com:8080/v1/banner/updatestatus/${bannerId}`, {
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
      <h1>All Banners</h1>
      {fetchedData !== null && fetchedData !== undefined ? (
        <table border={'1'} frame={"void"} >
          <thead>
            <tr>
              <th>Banner Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map(article => (
              <tr key={article._id}>
                <td><img src={article.Banner_location} alt="Banner" width={'60px'} height={'60px'}/></td>
                <td>{article.status}</td>
                <td>
                  <button onClick={() => deleteBanner(article._id)}><MdDelete /></button>
                  <button onClick={() => updateBanner(article._id)}><FaEdit /></button>
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