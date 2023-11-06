import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';



function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {

    axios.get('http://localhost:5050/users')

      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-3">
      <h2 className='text-center'>CURD with Json server (API) using axios</h2>
      <Link to="/create" className='btn btn-success'>Create New</Link>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${d.id}`}>Update</Link>
                <button className='text-decoration-none btn btn-sm btn-danger' onClick={e => handelDelete(d.id)}>Delete</button>
                <Link className='text-decoration-none btn btn-sm btn-primary' to={`/read/${d.id}`}>Read</Link>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
  function handelDelete(id) {
    const confirm = window.confirm("Would You Like To Delete..?")
    if (confirm) {
      axios.delete('http://localhost:5050/users/' + id)
        .then(res => {
          alert("Deleted Successfully");
          navigate("/")
        })
    }
  }

}

export default Home;
