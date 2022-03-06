 const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')
const homeController = require('../app/http/controllers/homeController')
const orderController = require('../app/http/controllers/orderController')
const adminOrderController = require('../app/http/controllers/admin/orderController')

// Middlewares

const auth = require('../app/http/middleware/auth')
const guest = require('../app/http/middleware/guest')
const admin = require('../app/http/middleware/admin')



function initRoutes(app){  
    
app.get('/' , homeController().index)
app.get('/login', guest, authController().login)
app.post('/login', authController().postLogin)
app.get('/register', guest, authController().register)
app.post('/register' ,authController().postRegister)
app.post('/logout' ,authController().logout)

app.get('/cart',cartController().cart)
app.post('/update-cart', cartController().update)

app.post('/orders', orderController().store)

// Customer routes
app.post('/orders', auth , orderController().store)
app.get('/customer/orders', auth , orderController().index)

// Admin routes
app.get('/admin/orders',admin,  adminOrderController().index)
}

module.exports =initRoutes