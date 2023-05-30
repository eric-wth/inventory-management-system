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


export const addProducts = async(req,res) => {
    try{
        const {
            product_name,
            quantity,
            supplier,
            patient_name,
            patient_telephone,
            patient_hospital
        } = req.body;

        const newProduct = new ProductModel(
            {
                product_name,
                quantity,
                supplier,
                patient_name,
                patient_telephone,
                patient_hospital
            }
        );

        const savedProduct = await newProduct.save();
        res.json(savedProduct);

    }
    catch (err) {
        throw err;
    }
};