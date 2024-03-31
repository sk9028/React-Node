import React, {useEffect} from 'react'
import axios from 'axios'
//import { withRouter } from 'react-router-dom'; 버전 차이로 내비게이터로 대체함
//import { response } from 'express' => 이새끼 때문에 갑자기 에러뜨고 안됨; 왜 추가된지 모르겠음
import { useNavigate } from 'react-router-dom';

import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh'
    }}>
      <h2>시작 페이지</h2>

      <Button variant="primary">Primary</Button>
      <button onClick={onClickHandler}>
          로그아웃
      </button>

    </div>
  )
}

export default LandingPage
