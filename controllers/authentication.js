const express = require("express")
const router = express.Router();
const register = require("./register.js")
const login = require("./login")
const logout = require("./logout")

router.post("/register" , register)

router.post("/login" , login) 

router.post("/logout" , logout)


module.exports = router ;