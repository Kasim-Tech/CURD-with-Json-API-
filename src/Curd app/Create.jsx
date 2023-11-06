import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Create() {
    const [InputData,setInputData] = useState({
        name: '',
        email:''
    })
    const navigate = useNavigate();

    const handeleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5050/users', InputData)
        .then(res =>{
            alert("Data Posted Successfully")
            navigate('/')
        })
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-dark text-white p-5 rounded'>
                <form onSubmit={handeleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type="text" name='name' className='form-control' 
                        onChange={e => setInputData({...InputData, name:e.target.value})}
                         />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" name='email' className='form-control'
                        onChange={e=>setInputData({...InputData, email: e.target.value})}/>
                    </div>
                    <br />
                    <button type='submit' className='btn btn-info'>Create User</button>
                </form>
            </div>
        </div>
    )
}

export default Create
