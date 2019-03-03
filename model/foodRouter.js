//数据模型
const mongoose = require('../utils/database').mongoose;

const Food = mongoose.model("food",{
    name:String  ,
    price:Number, 
    imgPath:String , 
    desc:String ,
    type:String,
    num:Number
  })


  const foodFind = (foodInfo,cb) =>{
    food.findOne(foodInfo).then(result=>{
        cb(result)
    })
}
const foodSave = (foodInfo,cb) =>{
    const food = new Food(foodInfo);
    food.save().then(result=>{
        console.log(result)
        cb(result)
    })
}



 // 4. 将schema转化为数据模型
 module.exports = {
  foodFind,
  foodSave
}