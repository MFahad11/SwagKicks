import express  from "express";
const router=express.Router()
import userController from "../controllers/userController.js";
import checkauth from "../middlewares/authmiddleware.js"
// Middleware level route
// router.use('/changepass',checkauth)
router.use('/showdata',checkauth)
//Public Routes
router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/resetpass',userController.sendemail)
router.post('/reset/:id/:token',userController.passwordreset)
router.post('/deleteuser',userController.deleteUsers)
// Private route that first authenticate with Middleware level route
// router.post('/changepass',userController.changepass)
router.get('/showdata',userController.userData)
router.get('/users',userController.getAllUsers)
export default router