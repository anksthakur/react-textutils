
import React from 'react'
// use impt
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      {/* <a className="navbar-brand" href="">{props.title}</a> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
            {/* <a  className="nav-link active" aria-current="page" href="">Home</a> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">{props.aboutText}</Link>
            {/* <a className="nav-link" href="/About">{props.aboutText}</a> */}
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
// .propTypes main p always small , isrequired lgane se o value hme dalne he pdegi ya jroori hai dalna. proptypes btata hai ki props ka kya type hai eg string hai ya number hai etc
Navbar.propTypes = {
    title:PropTypes.string,
    aboutText:PropTypes.string.isRequired}
    // default value bhi de skte hai jisse by default jo value di hogi hmne bhi rhegi
    Navbar.defaultProps = {
        title:'set title here',
        aboutText:'About us'
    };