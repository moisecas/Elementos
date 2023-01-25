import Task from "../models/Task";

export const renderTask = async (req, res) => {

    const tasks = await Task.find().lean(); 

    console.log(tasks); 

    res.render("index", {tasks: tasks});
}

export const createTask =  async (req, res) => {
    const task = new Task(req.body);
    const taskSaved = await task.save();
    console.log(taskSaved);  
    res.redirect("/");
} 

export const renderTaskEdit = async (req, res) => {

    const task = await Task.findById(req.params.id).lean(); 
    res.render("edit", {task});  
}

export const editTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body); 
    res.redirect("/"); 
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
} 

export const taskToggleDone = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        await Task.findByIdAndUpdate(id, { $set: { done: task.done ? false : true } }, { new: true });
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error while updating the task');
    }
}
