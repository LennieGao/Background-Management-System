var express = require('express');
var router = express.Router();

var foodController = require("../controller/foodRouter")


router.post("/foods",foodController.foods);
//登陆接口
module.exports = router;
