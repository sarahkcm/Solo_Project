import express from "express";
import data from './data.js'
import cors from "cors";


const app = express();
app.use(express.json())
app.use(cors())

app.get('/api/weed-choco/products',(req,res)=>{
    res.send(data.pro)
})

const Port = 5005;
app.listen(Port,()=>{
    console.log(`listening to http://localhost:${Port}`);
})