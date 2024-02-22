import React, { useEffect, useState } from 'react'
import './showTask.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateTask from './UpdateTask'

const TodoCard = ({ data, handleEdit, handleDelete }) => {
  const {_id , title, description } = data;

  return (
    <li key={_id}>
      <div className='title-description'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className='button-container'>
        <button className='button' name={_id} onClick={handleEdit}>edit</button>
        <button className='button' name={_id} onClick={handleDelete}>delete</button>
      </div>
    </li>
  )
}

const ShowTask = () => {

  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [update, setUpdate] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:3000/api/v1/task')
    .then((res)=> {
      console.log(res.data);
      setTask(res.data);
    })
    .catch((err)=>{
      console.log(err.message);
    })
  },[update]);

  const handleEdit = (e) => {
    setId(e.target.name);
    setOpen(true);
  }

  const handleUpdate = (e) => {
    console.log("update:", update, !update);
    setUpdate(!update);
  }

  const handleDelete = (e) => {
    axios.delete(`http://localhost:3000/api/v1/task/${e.target.name}`);

    setTask((data)=> {
      return data.filter((task) => task._id !== e.target.name);
    });
  }

  const handleClose = () => {
    setId('');
    setOpen(false);
  }

  return (
    <div className='list-container'>
      <Link to='/create-task' className='button-new' >
        <button className='button'>New</button>
      </Link>
      <div className="contents">
        <h1>TASKS: </h1>
        <ul className='list-container'>
          {task.map((data) => {
            return <TodoCard data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
          })}
        </ul>
      </div>

      {open ? (
        <div className="update-container">
          <div className="update-contents">
            <p className="close" onClick={handleClose}> &times; </p>
            <UpdateTask _id={id} handleClose={handleClose} handleUpdate={handleUpdate} />
          </div>
        </div>
      ) : ( "" )}
    </div>
  )
}

export default ShowTask
