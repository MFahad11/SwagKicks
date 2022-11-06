import express  from "express";
const router=express.Router()
import productController from "../controllers/productController.js";
import checkauth from "../middlewares/authmiddleware.js"
router.get('/products',productController.products)
router.post('/addproduct',productController.addProduct)
router.get('/product/:id',productController.product)
router.post('/updateproduct',productController.updateProduct)
router.post('/deleteproduct',productController.deleteProduct)
export default router