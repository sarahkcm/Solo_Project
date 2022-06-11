import express from "express";
import data from './data.js'
import cors from "cors";


const app = express();
app.use(express.json())

app.get('/api/weed-choco/products',(req,res)=>{
    res.send(data.pro)
})

app.get('/api/weed-choco/products/onlyOne/:Link',(req,res)=>{
    const pro = data.pro.find(x=>x.Link === req.params.Link)
    pro ? res.send(pro) : res.status(404).send({error:'Product not found'})
})

const Port = 5005;
app.listen(Port,()=>{
    console.log(`listening to http://localhost:${Port}`);
})