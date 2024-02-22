import axios from "axios";
import { useState } from "react";

import React from 'react'

const UpdateTask = ({ _id, handleClose, handleEdited }) => {
    
    const [data, setData] = useState({title: "", description: ""});

    const handleChange = (e) => {
        setData((data) => ({...data, [e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({_id}, {data});

        axios.put(`http://localhost:3000/api/v1/task/${_id}`, data)
        .then((res) => {
            setData({ title: "", description: ""});
            console.log(res.data.message);
        })
        .catch((err) => {
            console.log("failed to update task");
            console.log(err.message)
        })
    }
    
    return (
    <div>
       <form onSubmit={(e) => {
        handleSubmit(e);
        handleEdited();
        handleClose();
       }} className="form-container">
            <label htmlFor="title" className="label">Title</label>
            <input type="text" name="title" onChange={handleChange} className="input" />
            <label htmlFor="description" className="label">Description</label>
            <input type="text" name="description" onChange={handleChange} className="input" />

            <button type="submit" className="button">Submit</button>
       </form>
    </div>
  )
}

export default UpdateTask
