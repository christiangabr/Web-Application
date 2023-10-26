import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../hook/useSignup";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup(name, email, password);
      if (res.ok) {
        navigate('/');
      }
      else {
        console.error('Signup failed:', res.statusText);
      }
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
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <ion-icon name="person-outline"></ion-icon>
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              id="name"
              className="form-control rounded-0"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              id="email"
              className="form-control rounded-0"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              className="form-control rounded-0"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-0"
            disabled={isLoading}
          >
            Register
          </button>
          {error && <div className="error">{error}</div>}
        </form>
        <p>Already Have an Account?</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
