import express from "express";
const router = express.Router();

import {
    createTask,
    getAllTask,
    updateTask,
    deleteTask,
} from '../controllers/Task.controllers.js'

router.get('/',getAllTask);

router.post('/',createTask);

router.put('/:id',updateTask);

router.delete('/:id',deleteTask);


export {router};