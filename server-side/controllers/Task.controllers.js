import {Task} from '../models/Task.models.js'

//find method will return all the task if empty it returns 404
const getAllTask = (req,res) => {
    Task.find()
    .then((task) => res.json(task))
    .catch((err) => res.status(404).json({message: "Task not found", error:err.message}))
}
//create method will create a task and return success message ot it returns 400
const createTask = (req,res) => {
    Task.create(req.body)
    .then((data) => res.json({message: "Task added succesfully", data}))
    .catch((err)=>{
        res.status(400).json({message: "failed to add task", error: err.message})
    })
}
const updateTask = (req,res) => {
    Task.findByIdAndUpdate(req,params.id, req.body)
    .then((data)=> res.json({message: "updated successfully",data}))
    .catch((err) => {
        res.status(400).json({message: "failed to update task", err: err.message})
    })
}
const deleteTask = (req,res) => {
    Task.findByIdAndRemove(req,params.id, req.body)
    .then((data)=> res.json({message: "task deleted successfully", data}))
    .catch((err) => {
        res.status(404).json({message: "task not found", err: err.message})
    })
}

export {
    createTask,
    getAllTask,
    updateTask,
    deleteTask,
};
//we use all these it routes at endpoints