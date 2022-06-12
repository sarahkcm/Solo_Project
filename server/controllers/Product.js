import Product from "../models/Product.js";
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
