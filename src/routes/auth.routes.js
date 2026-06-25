import express from 'express'
import {registerUser,loginUser} from '../controllers/auth.controllers.js'

const routes = express.Router();

routes.post("/signup",registerUser)
routes.post("/login",loginUser)




export default routes
