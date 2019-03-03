const foodModel = require("../model/foodRouter");

// const utils = require("../util/util");
const foods = (req, res) => {
  let {
    name,
    price,
    imgPath,
    desc,
    type,
    num
  } = req.body;
  console.log(req.body)
  if (name, price, imgPath, desc, type, num) {
    foodModel.foodSave({
      name,
      price,
      imgPath,
      desc,
      type,
      num
    }, (result) => {
      if (result) {
        res.json({
          status: true,
          info: "成功"
        })
      }
    })
  } else {
    res.json({
      status: false,
      info: "请正确填入数据"
    })
  }
}
module.exports = {
  foods
}