import React, { useState } from "react";

function LoginSignup({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = () => {
    // placeholder
    if (email && password) {
      setUser({ email });
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>{isLogin ? "Login" : "Sign Up"}</button>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <a href="#" onClick={handleToggle}>
          {isLogin ? "Sign up" : "Login"}
        </a>
      </p>
    </div>
  );
}

export default LoginSignup;
