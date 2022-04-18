import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Outlet } from 'react-router-dom';


export default function Navbar(props) {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (


    <Router>
  {/* Rest of the code remains same */}
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about" >{props.aboutText}</a>
        </li>
      </ul>



&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
      </div>
      
     &nbsp;&nbsp;&nbsp;<br/>
      <button className="btn btn-outline-success mx-2 my-2" onClick={() => openInNewTab('https://github.com/itfeelsharsh/react-textutils')}>GitHub</button>
    </div>
  </div>
</nav>
<Outlet />
</Router>

  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired};

Navbar.defaultProps = {title: "Set Title here", aboutText: "Set About this app here"};
