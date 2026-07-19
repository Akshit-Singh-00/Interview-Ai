const {Router}=require('express')
const authContoller=require("../controllers/auth.controller")

const authRouter=Router();



authRouter.post("/register",authContoller.registerUserController)

authRouter.post("/login",authContoller.loginUserController)

authRouter.get('/logout',authContoller.logoutUserContoller)



module.exports=authRouter