import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: String,
    description: String,
    done: Boolean,
    code: String,
    telefono: String,
    lugar: String,
    fecha: String,
    hora: String 
}, 
{
    timestamps: true,
    versionKey: false 
}
)
 
export default model('Task', taskSchema); 

