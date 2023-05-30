import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        supplier: {
            type: String,
            required: true
        },
        patient_name: {
            type: String,
            required: true
        },
        patient_telephone: {
            type: Number,
            require: true
        },
        patient_hospital: {
            type: String
        },
    }
);

export const ProductModel = mongoose.model('ProductModel', productSchema);