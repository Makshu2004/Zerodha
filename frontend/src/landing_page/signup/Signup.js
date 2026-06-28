import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const response = await fetch( "http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    

    alert(data.message);
    console.log("user register");

    window.location.href = "/login";
  };

  return (
   <div className="container signup-section mt-5">
  <div className="row align-items-center">

    <div className="col-md-6 text-center">
      <img
        src="/media/signup.png"
        alt="Signup"
        className="signup-image"
      />
    </div>

    <div className="col-md-6">
      <div className="signup-card">

        <h2>Signup</h2>

        <form onSubmit={handleSignup}>

          <input
            className="form-control mb-3"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100">
            Signup
          </button>

        </form>

        <p className="mt-3">
          Already have an account?
          <a href="/login"> Login</a>
        </p>

      </div>
    </div>

  </div>
</div>
  );
}

export default Signup;