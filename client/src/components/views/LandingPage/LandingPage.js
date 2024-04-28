import React, {useEffect} from 'react'
import axios from 'axios'
//import { withRouter } from 'react-router-dom'; 버전 차이로 내비게이터로 대체함
//import { response } from 'express' => 이거 때문에 갑자기 에러뜨고 안됨; 왜 추가된지 모르겠음
import { useNavigate } from 'react-router-dom';
import '../../../css/sign-in.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import npisLogo from '../../../img/npis.png';
import dbrainLogo from '../../../img/dbrain.png';
import kitechLogo from '../../../img/kitech.png';

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
  <div className="text-center bg-body-tertiary">
    <div className="text-center">
      <h1 className="display-5 ">현성국 소개 메인 페이지</h1>
      <h3 className="fw-normal text-muted mb-3">경력 사항을 확인해보세요!</h3>
    </div>
  </div>
    <Carousel className='mb-5'>  
      <Carousel.Item interval={3000}> 
        <img className="d-block w-100" src={npisLogo} height={'600px'} width={'100%'} alt="Image One"/> 
        <Carousel.Caption> 
        </Carousel.Caption> 
      </Carousel.Item> 
      <Carousel.Item interval={3000}> 
      <img className="d-block w-100" src={kitechLogo} height={'600px'} width={'100%'} alt="Image Three"/> 
        <Carousel.Caption>
        </Carousel.Caption> 
      </Carousel.Item> 
      <Carousel.Item interval={3000}> 
      <img className="d-block w-100" src={dbrainLogo} height={'600px'} width={'100%'} alt="Image Two"/> 
        <Carousel.Caption> 
        </Carousel.Caption> 
      </Carousel.Item> 
    </Carousel> 
  
  {/* <div className="d-flex justify-content-around w-100 my-md-3 ps-md-3">
    <div class="card">
      <div class="row g-0">
        <div class="col-md-4">
          <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div> */}
    {/* <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">1</h2>
        <p className="lead">국민연금 - NPIS</p>
      </div>
      <div className="bg-body shadow-sm mx-auto" style={{width: '300px', height: '300px', borderRadius : '21px 21px 0 0'}}>
      <a href='/npis'><img src="https://www.nps.or.kr/html/main_2022/images/common/top_logo.png" alt="Logo" width="204" height="48" className="d-inline-block align-text-top"></img></a>
      </div>
    </div>
    <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">2</h2>
        <p className="lead">한국생산기술연구원 - KITECH</p>
      </div> 
      <div className="bg-body shadow-sm mx-auto" style={{width: '300px', height: '300px', borderRadius : '21px 21px 0 0'}}>
      <a href='/kitech'><img src="https://www.kitech.re.kr/images_new/ico/ico_logo.png" alt="Logo" width="206" height="58" className="d-inline-block align-text-top"></img></a>
      </div>
    </div>
    <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">3</h2>
        <p className="lead">기획재정부 - dBrain</p>
      </div> 
      <div className="bg-body shadow-sm mx-auto" style={{width: '300px', height: '300px', borderRadius : '21px 21px 0 0'}}>
      <a href='/dbrain'><img src="https://fis.kr/page/kpfis/images/logo/logo.png" alt="Logo" width="240" height="45" className="d-inline-block align-text-top"></img></a>
      </div>
    </div> */}
  <div className="row mb-3 text-center">
    <div className="col">
      <div className="card shadow-sm">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>NPS</title><rect width="100%" height="100%" fill="#FFFFFF" strokeWidth="1" stroke="#CCCCCC" />
          <image className="m-auto" href="https://www.nps.or.kr/html/main_2022/images/common/top_logo.png" height="225" width="60%" x="20%" y="3%"/>
        </svg>
        <div className="card-body">
          <p className="card-text">국민연금공단 - 지능형 연금복지 통합플랫폼 구축(NPIS)</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href='/npis'><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
            </div>
            <small className="text-body-secondary">2023년 1월 - 현재</small>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card shadow-sm">
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>NPS</title><rect width="100%" height="100%" fill="#FFFFFF" strokeWidth="1" stroke="#CCCCCC" />
          <image className="m-auto" href="https://www.kitech.re.kr/images_new/ico/ico_logo.png" height="225" width="60%" x="20%"/>
        </svg>
        <div className="card-body">
          <p className="card-text">한국생산기술연구원 - 업무포털 유지보수 용역 고도화 사업</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href='/kitech'><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
            </div>
            <small className="text-body-secondary">2022년 4월 - 2022년 12월</small>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card shadow-sm">
      <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>NPS</title><rect width="100%" height="100%" fill="#FFFFFF" strokeWidth="1" stroke="#CCCCCC" />
          <image className="m-auto" href="https://fis.kr/page/kpfis/images/logo/logo.png" height="225" width="60%" x="20%" y="-3%"/>
        </svg>
        <div className="card-body">
          <p className="card-text">한국재정정보원 - 차세대예산회계시스템</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href='/dbrain'><button type="button" className="btn btn-sm btn-outline-secondary">View</button></a>
            </div>
            <small className="text-body-secondary">2020년 10월 - 2022년 3월</small>
          </div>
        </div>
      </div>
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
