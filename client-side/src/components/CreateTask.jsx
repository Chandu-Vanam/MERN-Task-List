import React, { useEffect, useState } from 'react'
import './createTask.css'
import axios from 'axios'
// import { Link } from 'react-router-dom';

const CreateTask = (props) => {

  const [data, setData] = useState({title: "", description:"" });

  const handleChange = (e) => {
    setData((data) => ({...data, [e.target.name]: e.target.value}));
  }

  

  useEffect(() => {
    if (props.taskToEdit) {
      setData(props.taskToEdit);
    }
  }, [props.taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      title: data.title,
      description: data.description,
    };

    console.log({ task });

    axios.post('http://localhost:3000/api/v1/task', data)
    .then((res) => {
      setData({title: "", description: ""});
      console.log(res.data.message);
    })
    .catch((err)=> {
      console.log("error couldn;t create task")
      console.log(err.message)
    })
  }

  return (
    <div className='createContainer'>
      <section className='contents'>
        <h1 className='createHeading'>Create Task</h1>
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <div className="createFormGroup">
              <label htmlFor="title">Title</label>
              <input type="text" name='title' value={data.title} onChange={handleChange} id='title'/>
          </div>
          <div className="createFormGroup">
              <label htmlFor="desc">Description</label>
              <input name='description' className='description' value={data.description} onChange={handleChange}  id="description" />
          </div>
          <button type='submit' className='createButton'>Create </button>
        </form>
      </section>

    </div>
  )
}

export default CreateTask
