import React, {useEffect} from 'react'
import axios from 'axios'
//import { withRouter } from 'react-router-dom'; 버전 차이로 내비게이터로 대체함
//import { response } from 'express' => 이새끼 때문에 갑자기 에러뜨고 안됨; 왜 추가된지 모르겠음
import { useNavigate } from 'react-router-dom';
import '../../../css/sign-in.css'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// const landingStyle = {
//   width: '80%',
//   height: '300px',
//   border-radius: 21px 21px 0 0
// }

function LandingPage() {

  const navigate = useNavigate();
  // 사용자가 페이지에 들어오자마자 실행되는 이벤트
  useEffect (()=>{
    axios.get('/api/hello')
    .then(response => console.log(response))
  })

  const onClickHandler = () => {
    axios.get(`/api/users/logout`)
        .then(response => {
            if (response.data.success) {
                //props.history.push("/login")
                navigate("/login")
            } else {
                alert('로그아웃 하는데 실패 했습니다.')
            }
        })
  }

  return (
    // <div style={{
    //   display: 'flex', justifyContent: 'center', alignItems: 'center'
    //   , width: '100%', height: '100vh'
    // }}>
  <main style={{
    minHeight: '75vh'
  }}>
    {/* <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"> */}
    <div class="text-center bg-body-tertiary">
      {/* <div class="col-md-6 p-lg-5 mx-auto my-5"> */}
      <div class="text-center">
        <h1 class="display-3 fw-bold">메인 페이지</h1>
        <h3 class="fw-normal text-muted mb-3">페이지에 오신 것을 환영합니다!</h3>
        <div class="d-flex gap-3 justify-content-center lead fw-normal">
          <a class="icon-link" href="#">
            Learn more
            {/* <svg class="bi"><use xlink:href="#chevron-right"/></svg> */}
          </a>
          <a class="icon-link" href="#">
            Buy
            {/* <svg class="bi"><use xlink:href="#chevron-right"/></svg> */}
          </a>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-around w-100 my-md-3 ps-md-3">
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">1</h2>
        <p class="lead">And an even wittier subheading.</p>
      </div>
      <div class="bg-body shadow-sm mx-auto" style={{width: '300px', height: '300px', borderRadius : '21px 21px 0 0'}}>
      <img src="https://www.nps.or.kr/html/main_2022/images/common/top_logo.png" alt="Logo" width="204" height="48" class="d-inline-block align-text-top"></img>
      </div>
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">2</h2>
        <p class="lead">And an even wittier subheading.</p>
      </div>
      <div class="bg-body shadow-sm mx-auto" style={{width: '300px', height: '300px', borderRadius : '21px 21px 0 0'}}></div>
    </div>
  </div>

  <div class="d-flex justify-content-around w-100 my-md-3 ps-md-3">
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">3</h2>
        <p class="lead">And an even wittier subheading.</p>
      </div>
      <div class="bg-body shadow-sm mx-auto" style={{width: '300px', height: '300px', borderRadius : '21px 21px 0 0'}}></div>
    </div>
    <div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5">4</h2>
        <p class="lead">And an even wittier subheading.</p>
      </div>
      <div class="bg-body shadow-sm mx-auto" style={{width: '300px', height: '300px', borderRadius : '21px 21px 0 0'}}></div>
    </div>
  </div>
</main>
  )
}

{/* <Button variant="primary">Primary</Button>
      <button onClick={onClickHandler}>
          로그아웃
      </button> */}

export default LandingPage
