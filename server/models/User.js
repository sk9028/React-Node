const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const saltRounds = 10

var  jwt  =  require ( 'jsonwebtoken' ) ; 

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
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) {
                // 에러시 next로 이동
                if(err) return next(err);

                // 성공시 hash된 비밀번호로 치환
                user.password = hash;
                
                // 다시 원래 펑션으로 돌아간다.
                next();
            })
        })
    } else{
        next();
    }
})

userSchema.methods.comparePassword = function(plainPassword, callback){

    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return callback(err);
        callback(null, isMatch) // true
    })
}

userSchema.methods.generateToken = function(callback){

    var user = this;
    // jsonwebtoken을 이용해서 token 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    // secretToken을 넣으면 유저 아이디가 나온다는 뜻
    //user.id + 'secretToken' = token

    user.token = token
    
    // 구버전은 주석된 부분과 같이 작성해야 함.
    // user.save(function(err, user){
    //     if(err) return callback(err)
    //     callback(null, user)
    // })

    // 이게 신버전
    user.save()
    .then(user=>{
        return callback(null, user)
    }) 
    .catch((err)=>{
        return callback(err)
    })
}

userSchema.statics.findByToken = function(token, callback){
    var user = this;

    // 토큰을 decode 한다.
    jwt.verify(token, 'secretToken', function(err, decoded){
        // 유저 아이디를 이용해서 유저를 찾은 다음에 클라이언트에서 가져온 token과 db에 보관된 토큰이 일치하는지 확인한다.
        user.findOne({"_id" : decoded, "token" : token })
        // (구)버전 소스
        //if(err) return callback(err);
        //callback(null, user)

        // (신)버전 소스
        .then(user=>{
            callback(null, user)
        })  
        .catch((err)=>{
            return callback(err);
        })
    })
}

const User = mongoose.model('User', userSchema)

module.exports = {User}

