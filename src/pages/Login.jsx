// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";


// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (email.trim() !== "" && password.trim() !== "") {
//       sessionStorage.setItem("isLoggedIn", "true");
//       navigate("/", { replace: true });
//     } else {
//       alert("Please enter email and password");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h1>Login Page</h1>

//         <form onSubmit={handleLogin}>
//           {/* Email */}
//           <div className="input-group">
//             <label htmlFor="email">Email:</label>

//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           {/* Password */}
//           <div className="input-group">
//             <label htmlFor="password">Password:</label>

//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           {/* Login Button */}
//           <button type="submit" className="login-btn">
//             Login
//           </button>

//           <button type="button" className="email-btn">
//             <FaEnvelope />
//            Continue with Email
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;




import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Normal Email + Password Login
  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter email and password");
      return;
    }

    // Demo authentication
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userEmail", email);

    navigate("/", { replace: true });
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      console.log("Google User:", result.user);

      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userEmail", result.user.email);

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Google Login Error:", error);
      alert("Google login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h1>Welcome Back</h1>
        <p className="login-subtitle">
          Login to continue with E-commerce
        </p>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email">Email</label>

            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="input-group">
            <label htmlFor="password">Password</label>

            <div className="input-wrapper">
              <FaLock className="input-icon" />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Login */}
          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="divider">
          <span>OR</span>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="google-btn"
          onClick={handleGoogleLogin}
        >
          <FaGoogle />
          Continue with Google
        </button>

        {/* Signup */}
        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;