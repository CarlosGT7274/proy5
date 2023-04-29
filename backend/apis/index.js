const express = require('express');
const router = express.Router();
const userRouter = require('./users.js')
const authRouter = require('./auth.js')
const authMiddleware = require('../middlewares/autorization.js')
const registerRouter = require('./register.js')
const productRoutes = require('./product.js');

router.use('/products', productRoutes)

router.use('/register', registerRouter)

router.use('/auth', authRouter)

router.use(authMiddleware)

router.use('/users', userRouter)
module.exports = router;
