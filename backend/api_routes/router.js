const express = require("express");
const User = require('../schema/RegisterSchema');
const RegisterHandler = require("../handler/RegisterHandler");
const loginHandler = require("../handler/LoginHandler");
const { jwtAuthCookie } = require("../jwtAuthCooie");
const lotteryHandler = require("../handler/LotteryHandler");
const getLotteryData = require("../handler/GetLotteriesData");
const addDataToCart = require("../handler/AddDataToCart");
const CartData = require("../handler/CartData");
const deleteCartItem = require("../handler/DeleteCartItem");

const router = express.Router();

router.get("/",jwtAuthCookie,async(req,res)=>{
    res.send("Hello word");
})
router.post("/register",RegisterHandler);
router.post("/login",loginHandler);
router.post("/pushlotterdata",lotteryHandler);
router.get("/get-lottery-data",getLotteryData);
router.post("/add-to-cart/:_id", addDataToCart);
router.get("/cart",CartData);
router.delete('/delete-cart/:id', deleteCartItem);

module.exports = router;