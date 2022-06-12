import express from "express";
import data from './data.js';
import cors from "cors";
import mongoose from "mongoose";
import chocoRoutes from "./routes/Product.js";
import path from 'path';



mongoose.connect("mongodb://localhost:27017/weed-choco",{ useNewUrlParser: true }).then(()=>{
    console.log("db successfully connected");
}).catch((err)=>{
    console.log(err, " Failed to connect db");
})

const app = express();
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(cors())

app.use('/api/weed-choco/products',chocoRoutes)


const Port = 5005;
app.listen(Port,()=>{
    console.log(`listening to http://localhost:${Port}`);
})