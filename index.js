//express 연결
const express = require('express')

//app 변수에 담기
const app = express()

// 포트 5000번
const port = 5000

//몽고 디비 연결
const mongoose = require('mongoose')

//몽고 디비 커넥션 연결
mongoose.connect('mongodb+srv://sk9028:tjdrnr1q2w3e4r@atlascluster.cadgec9.mongodb.net/')
.then(()=> console.log('mongoDB succ'))
.catch(err=> console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})