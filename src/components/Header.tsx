import React from "react";
import logo from "../logo.png";

export default function Header(Props:any) {
  return (
    <nav className="Header">
      <div>
        <img className="App-logo" src={logo} alt="logo" />
        <h2>TaskRecord</h2>
      </div>
      {Props.checklogin ? (<>
          <span>
            Welcome, {Props.checklogin.username}
          </span>
          <button className="loginbtn addbtn" onClick={Props.logoutkaftn}>Logout</button>
        </>) : (
        <button className="loginbtn" disabled>Login</button>
      )}
    </nav>
  );
}
