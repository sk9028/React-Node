import React, {useEffect} from 'react'
import axios from 'axios'
//import { response } from 'express' => 이새끼 때문에 갑자기 에러뜨고 안됨; 왜 추가된지 모르겠음

function LandingPage() {

  // 사용자가 페이지에 들어오자마자 실행되는 이벤트
  useEffect (()=>{
    axios.get('/api/hello')
    .then(response => console.log(response))
  })

  return (
    <div>
      LandingPage
    </div>
  )
}

export default LandingPage
