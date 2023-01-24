import { Router } from "express";
import Task from "../models/Task";

const router = Router();


router.get("/", async (req, res) => {

    const tasks = await Task.find().lean(); 

    console.log(tasks); 

    res.render("index", {tasks: tasks});
}); 

router.post("/task/add", async (req, res) => {
    const task = new Task(req.body);
    const taskSaved = await task.save();
    console.log(taskSaved);  
    res.redirect("/");
});

router.get("/about", (req, res) => {
    
    res.render("about.hbs"); 
}); 

router.get("/edit/:id", async (req, res) => {

    const task = await Task.findById(req.params.id).lean(); 
    res.render("edit", {task});  
}); 

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body); 
    res.redirect("/"); 
});

export default router; 