import * as cont from '../controllers/product_controllers.js';

export const productApi = (app) => {
    app.get('/products', cont.getProducts);

    app.post('/products', cont.addProducts);
};