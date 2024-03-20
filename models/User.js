const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const saltRounds = 10

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

userSchema.pre('save', function(next){
    var user = this;

    // 비밀번호를 변경할 때만 아래 로직을 수행한다.
    if(user.isModified('password')){
        // saltRounds를 이용해서 비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function(err, salt) {
            // 에러시 next로 이동
            if(err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash) {
                // 에러시 next로 이동
                if(err) return next(err)

                // 성공시 hash된 비밀번호로 치환
                user.password = hash
                
                // 다시 원래 펑션으로 돌아간다.
                next()
            })
        })
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}