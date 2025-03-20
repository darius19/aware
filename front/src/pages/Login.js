import React from "react";
import Header from "../components/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="login">
        <h1>Login Page</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
  );
};

export default Login;
