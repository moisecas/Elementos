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

router.get("/delete/:id", async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
});


router.get('/toggleDone/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        await Task.findByIdAndUpdate(id, { $set: { done: task.done ? false : true } }, { new: true });
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error while updating the task');
    }
});


export default router; 