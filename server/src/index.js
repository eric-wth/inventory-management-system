import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { productApi } from './api/product_api.js'

import { ProductModel } from './model/ProductModel.js';
import { products_data } from '../mock_data_copy.js';


const app = express();


//CONFIGURATIONS
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));


app.use('/api/products', productApi);

//RUNNING SERVER
const startServer = () => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

    //CONNECT TO MONGO DB
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => `DB did not connect - ${err}`);


    //ADD DATA (ONLY ONCE)
    //ProductModel.insertMany(products_data);

    //APIs
    productApi(app);
};
startServer();