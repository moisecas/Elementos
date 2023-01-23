import { Router } from "express";
import Task from "../models/Task";

const router = Router();


router.get("/", (req, res) => {
    res.render("index.hbs");
}); 

router.post("/task/add", async (req, res) => {
    const task = new Task(req.body);
    const taskSaved = await task.save();
    console.log(taskSaved);  
    res.send("received");
});

router.get("/about", (req, res) => {
    res.render("about.hbs"); 
}); 

router.get("/edit", (req, res) => {
    res.render("edit.hbs"); 
}); 

export default router; 