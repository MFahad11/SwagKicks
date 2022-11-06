import express  from "express";
const router=express.Router()
import orderController from "../controllers/orderController.js";
import checkauth from "../middlewares/authmiddleware.js"
router.use('/confirmOrder',checkauth)
router.use('/myOrders',checkauth)
router.post('/confirmOrder',orderController.addOrderItem)
router.get('/myOrders',orderController.getMyOrders)
router.get('/pendingorders',orderController.getAllPendingOrders)
router.get('/allorders',orderController.getAllOrders)
router.get('/order/:id',orderController.getOrderDetails)
router.post('/orderdeliver',orderController.markOrderDeliver)
router.post('/orderdelete',orderController.markOrderDelete)
export default router