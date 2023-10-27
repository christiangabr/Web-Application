import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login, error, isLoading} = useLogin();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="bg-white p-3 rounded w-25">
        <Link to="/">
          <img src="/gasoline.png" alt="" className="gashandle" />
        </Link>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <ion-icon name="mail-outline"></ion-icon>
              <strong>Email</strong>
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter Email"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <strong>Password</strong>
            </label>
            <input
              type="password"
              value={password}
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-0" disabled={isLoading}>
            Login
          </button>
          {error && <div className="error">{error}</div>}
        </form>
        <p>Don't Have an Account?</p>
        <Link
          to="/register"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
