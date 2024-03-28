//import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth'

function App() {
  // hoc는 function이고 Route element에는 컴포넌트만 들어갈 수 있기 때문에 함수는 들어갈 수 없어 발생하는 에러로 Auth를 미리 감싸줌
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLandingPage />}/>
        <Route path="/login" element={<AuthLoginPage />}/>
        <Route path="/register" element={<AuthRegisterPage />}/>
      </Routes>
    </div>
  );
}

export default App;
