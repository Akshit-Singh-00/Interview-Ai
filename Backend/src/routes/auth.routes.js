const {Router}=require('express')
const authContoller=require("../controllers/auth.controller")
const authMiddleWare=require('../middlewares/auth.middleware')

const authRouter=Router();



authRouter.post("/register",authContoller.registerUserController)

authRouter.post("/login",authContoller.loginUserController)

authRouter.get('/logout',authContoller.logoutUserContoller)

authRouter.get('/get-me',authMiddleWare.authUser,authContoller.getMeContoller)

module.exports=authRouter