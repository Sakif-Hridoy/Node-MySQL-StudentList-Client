import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [edit, setEdit] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        axios.get(`https://node-mysql-studentlist-server.onrender.com/read/${id}`)
            .then(res => {
                console.log(res);
                if (res.data.length > 0) {
                    setEdit({
                        name: res.data[0].name,
                        email: res.data[0].email
                    });
                }
            })
            .catch(err => console.log(err));
    }, [id]); 

    const handleEdit = (e) => {
        e.preventDefault();
        console.log(edit)
       axios.put(`https://node-mysql-studentlist-server.onrender.com/update/${id}`,edit)
       .then(res=>{console.log(res)
        navigate('/')
       })
       .catch(err=>console.log(err))
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleEdit}>
                    <h2>Edit Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input 
                            type="text" 
                            placeholder='Enter Name' 
                            className='form-control' 
                            value={edit.name} // Set default value
                            onChange={e => setEdit({ ...edit, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input 
                            type="email" 
                            placeholder='Enter Email' 
                            className='form-control' 
                            value={edit.email} // Set default value
                            onChange={e => setEdit({ ...edit, email: e.target.value })}
                        />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;
