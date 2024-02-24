import app from './app.js';
import connectDatabase from'./config/database.js';
import cloudinary from 'cloudinary'
const PORT = process.env.PORT || 4000;


//Handling uncaught exceptions , these are not handled by any try catch scopes in the application

process.on('uncaughtException' , (err) =>{
    console.log(`error : ${err.message}`)
    process.exit(1)
})

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(PORT , () => {
    console.log(`server is running on the port ${PORT}`)
})
