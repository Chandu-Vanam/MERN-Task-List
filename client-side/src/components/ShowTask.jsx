import React, { useEffect, useState } from 'react'
import './showTask.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import UpdateTask from './UpdateTask'

const TodoCard = ({ data, handleEdit, handleDelete }) => {
  const {_id , title, description } = data;

  return (
    <li key={_id} className='showListItem'>
      <div className='showTitleDesc'>
        <h3 className='showTitle'>{title}</h3>
        <p className='showDesc'>{description}</p>
      </div>

      <div className='showButtonContainer'>
        <button className='button editBtn' name={_id} onClick={handleEdit}>edit</button>
        <button className='button removeBtn' name={_id} onClick={handleDelete}>Remove</button>
      </div>
      <hr className='showLine' />
    </li>
  )
}

const ShowTask = (props) => {

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

  const handleEdit = (e) => {
    setId(e.target.name);
    setOpen(true);
  }
  const handleClose = () => {
    setId('');
    setOpen(false);
  }

  return (
    <div className='showContainer'>
      {/* <Link to='/create-task' className='button-new' > */}
        <h1 className='showHeading'>Your Tasks </h1>
      <div className="showContents">
        <ul className='showListItems'>
          {task.map((data,ind) => {
            return <TodoCard key={ind} data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
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
