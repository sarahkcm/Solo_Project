import Product from "../models/Product.js";
import dotenv from "config"
import data from "../data.js";

export const insertChoco= async(req,res)=>{
    await Product.deleteMany({});
    const importProduct = await Product.insertMany(data.pro);
    res.send({importProduct});
}

export const getChoco = async(req,res)=>{
    const pro = await Product.find();
    res.send(pro)
}


export const getByLink = async(req,res)=>{
    const pro = await Product.findOne({Link : req.params.Link})
    pro ? res.send(pro) : res.status(404).send({error:'Product not found'})
}

export const getById = async(req,res)=>{
    const pro = Product.findById(req.params.id);
    pro ? res.send(pro) : res.status(404).send({error:'Product not found'})
}

export const updateOneProduct = async function (req,res) {
        let id = req.params.id
        if(!IdObj.isValid(id)) {
        res.status(400).send(id,' :ID Product Not found')
        }
        try{
            console.log(id);
            console.log(req.body.id);
            let uLike = Product.findByIdAndUpdate(id,

                { $addToSet: { quantity: req.body.id } },
                { new: true }
            ).exec((err, result) => {
                err ? res.status(400).send(err) : res.send(result);
            })
            let pLike = await User.findByIdAndUpdate(req.body.id,
                {$addToSet: {qt: id}},
                {new: true}
                )
                console.log(pLike);
    
        } catch(err){
            return res.status(400).send(err)
        }
    
}

export const deleteOneProduct = function (req,res) {
    let id = req.params.id
    if(!IdObj.isValid(id)) {
    res.status(400).send(id,' :ID Product Not found')
    }
        let delOneP = Product.findByIdAndRemove(id,(err,result)=>{
            err ? console.log("Error : ", err) : res.send(result)
        })
    
}
