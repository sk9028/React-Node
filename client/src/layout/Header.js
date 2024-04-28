import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
  <div className="container">
    <header className="row mb-5 mt-5 border-bottom">
      <div className="col">
        <a href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5"/>
          </svg>
        </a>
      </div>
      <div className="col">
        <Navbar expand="lg" className="bg-body-tertiary mb-5">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link className="ms-5" href="/">Home</Nav.Link>
                <Nav.Link className="ms-5" href="#link">Link</Nav.Link>
                <NavDropdown className="ms-5" title="경력 상세" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/npis" >NPS</NavDropdown.Item>
                  <NavDropdown.Item href="/kitech">KITECH</NavDropdown.Item>
                  <NavDropdown.Item href="/dbrain">dBrain</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="col text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
      </div>

      
    </header>

    
  </div>
  );
};

export default Header;

