// Login.js

import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { auth, db } from "../../firebase/firebase"; // Assurez-vous d'importer correctement Firebase
import "./Login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Récupérer le rôle de l'utilisateur depuis Firestore
      const userDoc = await db.collection("users").doc(user.uid).get();
      const userData = userDoc.data();

      if (userData && userData.role === "coach") {
        Navigate("/coachdashboard");
        toast.success("Login successful! Welcome Coach.");
      } else if (userData && userData.role === "student") {
        Navigate("/etuduantdashboard");
        toast.success("Login successful! Welcome Student.");
      } else {
        alert("Rôle utilisateur non défini");
      }
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else {
        toast.error(error.message);
      }
      console.error(error);
    }
  };

  return (
    <div className="body">
      <Container>
        <Row>
          <Col>
          <div className="d-flex justify-content-center">
            <div className="form-container">
              <p className="title" style={{ color: "black" }}>Connectez-Vous</p>
              <form className="form">
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <div className="password-container">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="input password-input"
                    placeholder="Password"
                    
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} style={{ color: "black" }} />
                  </button>
                </div>
                <p className="page-link">
                  <span className="page-link-label">Forgot Password?</span>
                </p>
                <button className="form-btn" type="submit">Log in</button>
              </form>
              <p className="sign-up-label">
                Don't have an account?
                <Link to="/" className="sign-up-link">Home</Link>
              </p>
              <div className="buttons-container"></div>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
