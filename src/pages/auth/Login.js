import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return ( 
    <div className="body">
    <Container>
      <Row>
        <Col>
          <div className="body">
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
                <span className="sign-up-link">Sign up</span>
              </p>
              <div className="buttons-container"></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
   );
}
 
export default Login;
