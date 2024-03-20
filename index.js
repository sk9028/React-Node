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
const { User } = require("./models/User")

// 바디 파서
const bodyParser = require("body-parser")

// application/x-www-form-urlencoded 
// url 쿼리문자열을 자바스크립트 객체 형태로 변환하거나 객체를 url 쿼리 문자열로 변환하는 기능
// extended : true => qs모듈(url형식 name=홍길동&pass..) false => 쿼리스트링 모듈({name : '홍길동', pass..})
app.use(bodyParser.urlencoded({extended: true})) 

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

// '/register' => localhost:5000/register 입력하면 이게 실행됨.
app.post('/register', async (req, res)=>{
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
