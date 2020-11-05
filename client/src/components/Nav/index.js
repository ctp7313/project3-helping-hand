import React from "react";
import Submit from '../../pages/Submit'

// Destructuring the type, classNameName, children and onClick props, applying them to the button element
const Nav = () => {
  return (
        <nav className="navbar navbar-light bg-light">
             <a className="navbar-brand" href="/">
                <img src="/assets/HHlogo.png" height="50" className="d-inline-block align-top"
                    alt="Helping Hand logo"></img>
                    Helping Hand
             </a>
          <form className="form-inline">
                <button className="btn btn-danger" type="button">Create a Profile</button>
                    <a href="/submit"><button className="btn btn-danger" type="button">Add a Service Organization</button></a>
            </form>
        </nav>
  ); 
}
export default Nav;