import express from 'express'
import * as controller from '../controllers/controller.js'

const route = express.Router()

route.post('/add-category', controller.add_category)

route.get('/view-category/:slug', controller.view_category)

route.get('/view-categories', controller.view_categories)

route.post('/add-product/:id', controller.add_product)

route.get('/products', controller.view_products)

route.delete('/delete/:slug', controller.delete_product)
export default route