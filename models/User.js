const mongoose = require('mongoose');

// 유저 스키마 작성
const userSchema = mongoose.Schema({
    name: {
        type : String,
        maxlength : 50
    },
    email:{
        type : String,
        trim : true, // 공백 제거
        unique : 1
    },
    password:{
        type : String,
        minlength : 5
    },
    lastname:{
        type : String,
        maxlength : 50
    },
    role:{
        type : Number,
        default : 0
    },
    image:String, // 이런식으로 배열 형태로 작성 안해도 됨.
    token:{
        type : String
    },
    tokenExp:{
        type : Number
    },
})

const User = mongoose.model('User', userSchema)

module.exports = {User}