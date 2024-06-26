import React from 'react';


const Footer = () => {
  return (
  <div style={{marginTop: '1px'}}>
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="40" height="32" className="d-inline-block align-text-top"></img>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">&copy; Made By Hyun Seong Guk [2024-03 ~ ing]</span>
      </div>
  
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-body-secondary" href="https://www.notion.so/27831c7111c2496dbf14b24cf82ac7a3"><img src="https://www.notion.so/front-static/favicon.ico" alt="Logo" width="32" height="32" className="d-inline-block align-text-top"></img></a></li>
        {/* <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li> */}

        
      </ul>
    </footer>
  </div>
  );
};

export default Footer;

