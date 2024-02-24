import  mongoose from 'mongoose';
import dotenv from'dotenv'

dotenv.config()

const URL = process.env.MONGODB_URL;

const connectDatabase = () => {
    mongoose.connect(URL)
        .then(() => {
            console.log("Database connected");
        })
        .catch((error) => {
            console.error("Error connecting to database:", error);
        });
};

export default connectDatabase;
