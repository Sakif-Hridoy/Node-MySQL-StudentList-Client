import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Student List</h2>
        <div className="d-flex justify-content-end"><Link className="btn btn-success" to="/create">Create</Link></div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((students, index) => {
              return (
                <tr key={index}>
                  <td>{students.id}</td>
                  <td>{students.name}</td>
                  <td>{students.email}</td>
                  <td>
                    <button className="btn btn-sm btn-info">Read</button>
                    <button className="btn btn-sm btn-primary mx-2">Edit</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
