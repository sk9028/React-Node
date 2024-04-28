import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
//import { withRouter } from 'react-router-dom';  버전 차이로 내비게이터로 대체함
import { useNavigate } from 'react-router-dom';
import '../../../css/sign-in.css'
import logo from '../../../img/bootstrap-logo.svg';

function LoginPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler = (event) => {
    // 이게 없으면 누를때마다 리프레쉬가 됨. 그래서 뒤에 기능이 수행이 안되기 때문에 넣어줌
    event.preventDefault();

    let body = {
        email: Email,
        password: Password
    }

    dispatch(loginUser(body))
        .then(response => {
            if (response.payload.loginSuccess) {
                navigate('/')
            } else {
                alert('Error')
            }
        })
  }

  return (
    
      // <div className='h-100 d-flex justify-content-center'> {/*크기 100 가로 가운데 정렬*/}
      // <div className='align-self-center'> {/*부모 기준으로 본인을 세로 가운데 정렬*/}
      <div style={
        { display: 'flex'
        , justifyContent: 'center'
        , alignItems: 'center'
        , width: '100%'
        , height: '70vh'
        }
        } id="mainDiv">
        <main id = 'test' className="form-signin w-100 m-auto">
          <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
            <img className="mb-4" src={logo} alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input type="email" className="form-control" placeholder="name@example.com" value={Email} onChange={onEmailHandler} />
              <label id="Email" htmlFor="floatingInput"> Email</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" placeholder="Password" value={Password} onChange={onPasswordHandler} />
              <label id="Password" htmlFor="floatingPassword">Password</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">
                Login
            </button>
          </form>
        </main>
      <div>

    {/* <DropdownButton
        id="bd-theme"
        title="BTN"
        className="position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle"
        data-bs-theme="light"
        variant='btn btn-bd-primary'
        onSelect={(selectItem)}
      >
      <Dropdown.Item eventKey={"Light"}>Light</Dropdown.Item>
      <Dropdown.Item eventKey={"Dark"}>Dark</Dropdown.Item>
      <Dropdown.Item eventKey={"Auto"}>Auto</Dropdown.Item>
    </DropdownButton> */}

      </div>
    </div>
  )
}

function selectItem(eventKey) {
  if(eventKey == "Light"){
    document.documentElement.setAttribute('data-bs-theme', 'Light');
  } else if(eventKey == "Dark"){
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    document.getElementById('Password').className = 'Light';
  } else if(eventKey == "Auto"){
    document.documentElement.setAttribute('data-bs-theme', 'Auto');
  }
}

export default LoginPage
