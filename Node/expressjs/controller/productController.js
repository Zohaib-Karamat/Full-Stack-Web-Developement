import Product from "../model/productModel.js";

export const create = async (req,res) => {
    try {
        const newProduct = Product(req.body)
        const {name} = newProduct;
        const productExist = await Product.findOne({name})
        if(productExist){
            return res.status(400).json({message:"Product already exists!"})
        } 
        const savedData = await newProduct.save();
        res.status(200).json(savedData) 
    } catch (error) {
        return res.status(500).json({errorMessage:error.message})
    }
}


export const getAllProducts = async (req,res) => {
    try {
        const productData = await Product.find();
        if(!productData || productData.length === 0){
            return res.status(404).json({message:"Product data not found"})
        }
        return res.status(200).json(productData);
    } catch (error) {
        return res.status(500).json({errorMessage:error.message})
    }
    
}
export const getProductById = async (req,res) => {
    try {
        const id = req.params.id;
        const productData = await Product.findById(id);
        if(!productData){
            return res.status(404).json({message:"Product not found"})
        }
        return res.status(200).json(productData);
    } catch (error) {
        return res.status(500).json({errorMessage:error.message})
    }
    
}
export const updateById = async (req,res) => {
    try {
        const id = req.params.id;
        const productData = await Product.findById(id);
        if(!productData){
            return res.status(404).json({message:"Product not found"})
        }
        const updatedProduct = await Product.findByIdAndUpdate(id,req.body,{
            new : true
        })
        return res.status(200).json(updatedProduct);
    } catch (error) {
        return res.status(500).json({errorMessage:error.message})
    }
    
}
export const deleteById = async (req,res) => {
    try {
        const id = req.params.id;
        const productData = await Product.findById(id);
        if(!productData){
            return res.status(404).json({message:"Product not found"})
        }
        const deletedProduct = await Product.findOneAndDelete(id)
        return res.status(200).json(deletedProduct);
    } catch (error) {
        return res.status(500).json({errorMessage:error.message})
    }
    
}






