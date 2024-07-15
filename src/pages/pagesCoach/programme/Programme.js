import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./programme.css";
import { Link } from "react-router-dom";

const Programme = () => {
  return (
    <div className="bodimg">
    <Container>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "100px" }}
      >
        <div
          className="bg-dark "
          style={{ color: "white", width: "55%", borderRadius: "20px" }}
        >
          <h1 className="text-center">Compétences</h1>
        </div>
      </div>
      <Row className="ms-1">
        <Col md={6}>
          <div
            className="mere-web mt-5 d-flex justify-content-center"
            style={{ borderRadius: "25px", height: "14rem" }}
          >
            <div className=" " style={{ color: "" }}>
              <h5 className="mt-3">Web Developpement</h5>
              <div className="icons d-flex justify-content-center mt-4">
                <i class="fa-solid fa-laptop-code"></i>
              </div>
              <p>plus de 2 millions d'étudiants</p>
              <div className="eye-pen d-flex justify-content-center gap-5">
                <Link to="/coursprogram">
                  <div>
                    <i class="fa-solid fa-eye" style={{ color: "yellow" }}></i>
                  </div>
                </Link>
                <div>
                  <i class="fa-solid fa-pencil" style={{ color: "" }}></i>
                </div>
                <div>
                  <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div
            className="mere-web mt-5 d-flex justify-content-center"
            style={{ borderRadius: "25px", height: "14rem" }}
          >
            <div className=" " style={{ color: "" }}>
              <h5 className="mt-3 ms-5">Bureautique</h5>
              <div className="icons d-flex justify-content-center mt-4">
                <i class="fa-solid fa-book"></i>{" "}
              </div>
              <p>plus de 2 millions d'étudiants</p>
              <div className="eye-pen d-flex justify-content-center gap-5">
                <div>
                  <i class="fa-solid fa-eye" style={{ color: "yellow" }}></i>
                </div>
                <div>
                  <i class="fa-solid fa-pencil" style={{ color: "" }}></i>
                </div>
                <div>
                  <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="ms-1">
        <Col md={6}>
          <div
            className="mere-web mt-5 d-flex justify-content-center"
            style={{ borderRadius: "25px", height: "14rem" }}
          >
            <div className=" " style={{ color: "" }}>
              <h5 className="mt-3 ms-5">Marketing</h5>
              <div className="icons d-flex justify-content-center mt-4">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <p>plus de 2 millions d'étudiants</p>
              <div className="eye-pen d-flex justify-content-center gap-5">
                <div>
                  <i class="fa-solid fa-eye" style={{ color: "yellow" }}></i>
                </div>
                <div>
                  <i class="fa-solid fa-pencil" style={{ color: "" }}></i>
                </div>
                <div>
                  <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div
            className="mere-web mt-5 d-flex justify-content-center"
            style={{ borderRadius: "25px", height: "14rem" }}
          >
            <div className=" " style={{ color: "" }}>
              <h5 className="mt-3 ms-5">Graphic Design</h5>
              <div className="icons d-flex justify-content-center mt-4">
                <i class="fa-solid fa-palette"></i>{" "}
              </div>
              <p>plus de 2 millions d'étudiants</p>
              <div className="eye-pen d-flex justify-content-center gap-5">
                <div>
                  <i class="fa-solid fa-eye" style={{ color: "yellow" }}></i>
                </div>
                <div>
                  <i class="fa-solid fa-pencil" style={{ color: "" }}></i>
                </div>
                <div>
                  <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Programme;
