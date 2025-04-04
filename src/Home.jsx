import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://node-mysql-studentlist-server.onrender.com")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id)=>{
    axios.delete('https://node-mysql-studentlist-server.onrender.com/delete/'+id)
    .then((res) => {
      location.reload()
    })
    .catch((err) => console.log(err));
  }

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
            {data.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <Link to={`/read/${student.id}`}><button className="btn btn-sm btn-info">Read</button></Link>
                    <Link to={`/edit/${student.id}`}><button className="btn btn-sm btn-primary mx-2">Edit</button></Link>
                    <button onClick={()=> handleDelete(student.id)} className="btn btn-sm btn-danger">Delete</button>
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
