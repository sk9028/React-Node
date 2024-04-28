//import logo from './logo.svg';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import NpisPage from './components/views/detailPage/NpisPage'
import KitechPage from './components/views/detailPage/KitechPage'
import DbrainPage from './components/views/detailPage/DbrainPage'
import Auth from './hoc/auth'
import Header from './layout/Header'
import Footer from './layout/Footer'

function App() {
  // hoc는 function이고 Route element에는 컴포넌트만 들어갈 수 있기 때문에 함수는 들어갈 수 없어 발생하는 에러로 Auth를 미리 감싸줌
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);
  const AuthNpisPage = Auth(NpisPage, false);
  const AuthKitechPage = Auth(KitechPage, false);
  const AuthDbrainPage = Auth(DbrainPage, false);

  return (
    <div className='container'>
      <Header/>
        <Routes>
          <Route path="/" element={<AuthLandingPage />}/>
          <Route path="/login" element={<AuthLoginPage />}/>
          <Route path="/register" element={<AuthRegisterPage />}/>
          <Route path="/npis" element={<AuthNpisPage />}/>
          <Route path="/kitech" element={<AuthKitechPage />}/>
          <Route path="/dbrain" element={<AuthDbrainPage />}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
