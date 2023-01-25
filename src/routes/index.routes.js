import { Router } from "express";
import Task from "../models/Task";
import { renderTask, createTask, renderTaskEdit, editTask, deleteTask, taskToggleDone } from "../controllers/tasks.controller";


const router = Router();


router.get("/",renderTask ); 

router.post("/task/add", createTask);

router.get("/about", (req, res) => {res.render("about.hbs");}); 

router.get("/edit/:id", renderTaskEdit); 

router.post('/edit/:id', editTask);

router.get("/delete/:id", deleteTask );


router.get('/toggleDone/:id', taskToggleDone );


export default router; 