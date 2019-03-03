const userModel = require("../model/user");
const register = (req,res)=>{
    let {username,password} = req.body;
    //需要判断用户名是否存在
    userModel.userFind({username},(result)=>{
        if(result){
            res.json({
                status:false,
                info:"用户名已存在"
            })
        }else{
            userModel.userSave({username,password},(result)=>{
                if(result){
                    res.json({
                        status:true,
                        info:"注册成功"
                    })
                }
            })
        }
    })
}


const login = (req,res)=>{
    let {username,password} = req.body;

    userModel.userFind({username},function(result){
        if(result){
                if(result.password == password){
                res.json({
                    status:true,
                    info:"登陆成功",
                    user:username
                })
            }else{
                res.json({
                    status:false,
                    info:"密码错误"
                })
            }
        }else{
            //不存在
            res.json({
                status:false,
                info:"用户名不存在"
            })
        }
    })
}

module.exports = {
    register,
    login
}




