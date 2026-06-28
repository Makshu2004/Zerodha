import { useState } from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);

        localStorage.setItem("userName", data.fullName);

        alert("Login Successful");
        console.log("Redirecting...");

        window.location.href = "http://localhost:3001";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    
     <div className="container login-section mt-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-md-6 text-center">
          <img
            src="/media/signup.png"
            alt="Login"
            className="login-image"
          />
        </div>

        {/* Right Login Card */}
        <div className="col-md-6">
          <div className="login-card">

            <h2>Login</h2>

            <form onSubmit={handleLogin}>

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Login
              </button>

            </form>

            <p className="mt-3">
              Don't have an account?{" "}
              <a href="/signup">Signup</a>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;