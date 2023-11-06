import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Read(){
     const { id } = useParams();
    const navigate = useNavigate()
    const [Data, setdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/users/'+id)
        .then(res => setdata(res.data))
        .catch (err => console.log(err))
    },[])



  return (
    <div className="container mt-5">
    <div className="container p-5 text-center border rounded border-primary">
      <h2 className="mb-4">User Details</h2>
      <p className="mb-2">ID: {Data.id}</p>
      <p className="mb-2">Name: {Data.name}</p>
      <p className="mb-2">Email: {Data.email}</p>
      <Link to="/" className="btn btn-primary">Back</Link>
    </div>
  </div>
  )
}

export default Read
