import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: String,
    description: String,
    done: Boolean,
    code: String,
    nombre: String,
    escuela: String,
    telefono: String,
    lugar: String,
    fecha: String,
    hora: String,
    entrega: String,
}, 
{
    timestamps: true,
    versionKey: false 
}
)
 
export default model('Task', taskSchema); 

