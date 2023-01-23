import {connect} from 'mongoose';

(async () => {
    try {
        const db = await connect('mongodb+srv://moisecas:Moisecas22@cluster0.3ijue.mongodb.net/elementos')

        console.log('Database is connected to', db.connection.name);
    }catch(error){
        console.error(error); 
    }
})()