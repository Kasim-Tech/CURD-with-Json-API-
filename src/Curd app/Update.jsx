import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams , useNavigate} from 'react-router-dom';

function Update() {
    const {id} = useParams();


    const [InputData,setInputData] = useState({
        id: id,
        name: '',
        email:''
    })
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:5050/users/'+id)
        .then(res => setInputData(res.data))
        .catch (err => console.log(err))
    },[])

    const handeleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:5050/users/'+id , InputData)
        .then(res =>{
            alert("Data Updated Successfully")
            navigate('/')
        })
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-dark text-white p-5 rounded'>
        <form onSubmit={handeleSubmit}>

        <div>
                <label htmlFor='id'>ID:</label>
                <input type="number" disabled name='id' className='form-control' value={InputData.id}
              
                 />
            </div>

            <div>
                <label htmlFor='name'>Name:</label>
                <input type="text" name='name' className='form-control' value={InputData.name}
                onChange={e => setInputData({...InputData, name:e.target.value})}
                 />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type="email" name='email' className='form-control' value={InputData.email}
                onChange={e=>setInputData({...InputData, email: e.target.value})}/>
            </div>
            <br />
            <button type='submit' className='btn btn-info'>Update User</button>
        </form>
    </div>
</div>
  )
}

export default Update
