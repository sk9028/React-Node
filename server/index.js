//express 연결
const express = require('express')

//app 변수에 담기
const app = express()

// 포트 5000번
const port = 5000

// key config 불러오기 (따로 배포할건 아니라서 로컬로만 실행될거임)
// config/key에서 process.env.NODE_ENV 환경변수가 production이면 운영(헤로쿠 유료라서 미사용)
// config/key에서 process.env.NODE_ENV 환경변수가 production아니면 로컬
// 터미널에서 node로 들어가서 process.env.NODE_ENV = "dev" 로 지정함
// 환경변수 삭제는 => delete process.env.NODE_ENV 
const config = require('./config/key')

// 유저 모델
const { User } = require('./models/User')

// 인증 모델
const { auth } = require('./middleware/auth')

// 바디 파서
const bodyParser = require('body-parser')

// 쿠키 파서
const cookieParser = require('cookie-parser')

// application/x-www-form-urlencoded 
// url 쿼리문자열을 자바스크립트 객체 형태로 변환하거나 객체를 url 쿼리 문자열로 변환하는 기능
// extended : true => qs모듈(url형식 name=홍길동&pass..) false => 쿼리스트링 모듈({name : '홍길동', pass..})
app.use(bodyParser.urlencoded({extended: true})) 

// 쿠키 파서 사용
app.use(cookieParser())

// application/json
app.use(bodyParser.json())

//몽고 디비 연결
const mongoose = require('mongoose')

//몽고 디비 커넥션 연결 (실제 접속정보가 git에 보이면 안되니까 config.mongoURI로 암호화 처리 및 dev.js 이그노어 처리)
mongoose.connect(config.mongoURI)
.then(()=> console.log('mongoDB succ'))
.catch(err=> console.log(err))

// '/' => localhost:5000 입력하면 이게 실행됨.
app.get('/', (req, res) => {
  res.send('Hello World!zzzzz')
})

// 프론트에서 아래 서비스 경로로 보내면 axios 성공 메시지를 보내준다.
app.get('/api/hello', (req, res) => {
  res.send('axios test succ!!')
})


// '/register' => localhost:5000/register 입력하면 이게 실행됨.
// 회원가입
app.post('/api/users/register', async (req, res)=>{
  // 회원가입 전 비밀번호를 암호화 하는 작업은 User.js에 있다.(userSchema.pre함수)
  // 회원 가입 할때 필요한 정보들은 클라이언트에서 가져오면
  // 그것들을 DB에 넣어준다.
  const user = new User(req.body)

  // 유저 save가 성공일 경우 
  const result = await user.save().then(()=>{
    res.status(200).json({
      success : true
    })
  
  // 유저 save가 실패일 경우
  }).catch((err)=>{
    res.json({success : false, err})
  }) 
})

// 로그인
app.post('/api/users/login', async (req, res) =>{

  // 1. 요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ email : req.body.email })
    .then(user=>{
      if(!user){
        return res.json({
          loginSuccess : false,
          message : "제공된 이메일에 해당하는 유저가 없습니다."
        })
      }

      // 2. 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는지 확인한다.
      user.comparePassword( req.body.password , (err, isMatch)=>{
        if(!isMatch){
          return res.json({loginSuccess : false, message : "비밀번호가 틀렸습니다."})
        }
        // 3. 비밀번호가 맞다면 토큰을 생성한다.
        user.generateToken((err, user)=>{
          if(err) return res.status(400).send(err);

          // 토큰을 쿠키 또는 로컬스토리지 등에 저장한다.(쿠키와 로컬스토리지는 콘솔 어플리케이션 창밑 스토리지 밑에 있음 각기 장단점이 있음. 여기서는 쿠키에 넣을 것임.)
          // npm install cookie-parser --save
          res.cookie("x_auth",user.token) // 이렇게하면 콘솔 쿠키에 이름이 x_auth인 유저의 쿠키값이 저장됨.
          .status(200)
          .json({loginSuccess : true, userId: user._id})

        })
      })
    })  
  .catch((err)=>{
    return res.status(400).send(err)
  })
})

// 인증(auth는 미들웨어)
app.get('/api/users/auth', auth, async (req, res) =>{
  
  // 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 true인 뜻.
  res.status(200).json({
    _id : req.user._id,
    isAdmin : req.user.role === 0 ? false : true, // role 0 일반유저 , role 0이 아니면 관리자
    isAuth : true,
    email : req.user.email,
    name : req.user.name,
    lastname : req.user.lastname,
    role : req.user.role,
    image : req.user.image
  })
})

// 로그아웃 기능
app.get('/api/users/logout', auth, async (req, res) =>{

  User.findOneAndUpdate({_id : req.user._id},{token : ""})
  .then(user=>{
    return res.status(200).send({success : true});
  })
  .catch((err)=>{
    return res.status(400).send(err);
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
