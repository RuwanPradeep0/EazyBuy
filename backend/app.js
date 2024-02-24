import express from 'express'
import path  from'path'
import bodyparser from'body-parser'
import cookieparser from'cookie-parser'
//import fileUpload from('express-fileupload');

import userRoutes from './routes/userRoute.js'


const app = express();


export default app