import { ProductModel } from '../model/ProductModel.js';

export const getProducts = async(req,res) => {
    try{
        const data = await ProductModel.find();
        res.json(data);
    }
    catch(err) {
        throw err;
    }
};