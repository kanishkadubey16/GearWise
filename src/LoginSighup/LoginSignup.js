// LoginSignup.js
import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../assets/user_icon.jpg";
import email_icon from "../assets/email_icon.jpg";
import password_icon from "../assets/password_icon.jpg";

import { auth } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const LoginSignup = ({ onClose }) => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleAuth = async () => {
    setErrorMsg("");
    if (!email || !password || (action === "Sign Up" && !name)) {
      setErrorMsg("❗ Please fill in all required fields.");
      return;
    }

    try {
      if (action === "Sign Up") {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("✅ User signed up:", userCredential.user);
        alert("Account created successfully!");
        onClose();
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("✅ User logged in:", userCredential.user);
        alert("Logged in successfully!");
        onClose();
      }
    } catch (error) {
      console.error("❌ Firebase Error:", error.message);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>

        <div className="container">
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>

          <div className="inputs">
            {action !== "Login" && (
              <div className="input">
                <img src={user_icon} alt="user icon" />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="input">
              <img src={email_icon} alt="email icon" />
              <input
                type="email"
                placeholder="Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="password icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {errorMsg && (
            <div className="error-message">{errorMsg}</div>
          )}

          {action === "Login" && (
            <div className="forgot-password">
              Lost password? <span>Click Here!</span>
            </div>
          )}

          <div className="submit-container">
            <button className="submit-btn" onClick={handleAuth}>
              {action === "Sign Up" ? "Register" : "Login"}
            </button>
            <div className="auth-toggle">
              {action === "Sign Up" ? (
                <p>Already have an account? <span onClick={() => setAction("Login")}>Login</span></p>
              ) : (
                <p>Don't have an account? <span onClick={() => setAction("Sign Up")}>Sign Up</span></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
