require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(express.json());


const productsRouter = require('./routes/products');
const registerRouter = require('./routes/registerRout');
const orderRouter = require('./routes/orderRout');
const loginRouter = require('./routes/loginRout');
const cartRouter = require('./routes/cartRout');

app.use(cors());
app.use('/products', productsRouter);
app.use('/register', registerRouter);
app.use('/prevOrder', orderRouter);
app.use('/login', loginRouter);
app.use('/cart', cartRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})