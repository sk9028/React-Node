import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
//import { withRouter } from 'react-router-dom';  버전 차이로 내비게이터로 대체함
import { useNavigate } from 'react-router-dom';

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
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={onSubmitHandler}
      >
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler} />
          <label>Password</label>
          <input type="password" value={Password} onChange={onPasswordHandler} />
          <br />
          <button type="submit">
              Login
          </button>
      </form>
    </div>
  )
}

export default LoginPage
