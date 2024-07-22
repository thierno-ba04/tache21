import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./programme.css";
import { Link } from "react-router-dom";
import imgleraning from "../../../assets/img/e-learning-session-de-formation-en-ligne.jpg"


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
      <Row className="ms-4 mt-5">
        <Col lg={3} md={6}>
          <div className="mere-web"  style={{ borderRadius: "25px", height: "15rem",  width: "14rem" }}>
            <div className="d-flex">
          <div className="mt-5 ms-4">
          <i class="fa-solid fa-laptop-code"style={{fontSize:"40px"}}></i>
          </div>
          <div style={{marginLeft:"120px"}}>
          <i class="fa-solid fa-ellipsis-vertical mt-3" style={{fontSize:"25px"}}></i>
          </div>
          </div>
          <h6 className="ms-4 mt-3">Web Developpement</h6>
          <h6 className="ms-4 mt-3">23 videos</h6>
          <div className="mt-4  d-flex justify-content-center">
          <Link to="/coursprogram">
            <button className="btn-cours">voir les cours</button>
            </Link>
          </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="mere-web"  style={{ borderRadius: "25px", height: "15rem",  width: "14rem" }}>
            <div className="d-flex">
          <div className="mt-5 ms-4">
          <i class="fa-solid fa-book"style={{fontSize:"40px"}}></i>
          </div>
          <div style={{marginLeft:"120px"}}>
          <i class="fa-solid fa-ellipsis-vertical mt-3" style={{fontSize:"25px"}}></i>
          </div>
          </div>
          <h6 className="ms-4 mt-3">BUREAUTIQUE</h6>
          <h6 className="ms-4 mt-3">13 videos</h6>
          <div className="mt-4  d-flex justify-content-center">
            <button className="btn-cours">voir les cours</button>
          </div>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className="mere-web"  style={{ borderRadius: "25px", height: "15rem",  width: "14rem" }}>
            <div className="d-flex">
          <div className="mt-5 ms-4">
          <i class="fa-solid fa-chart-pie"style={{fontSize:"40px"}}></i>
          </div>
          <div style={{marginLeft:"120px"}}>
          <i class="fa-solid fa-ellipsis-vertical mt-3" style={{fontSize:"25px"}}></i>
          </div>
          </div>
          <h6 className="ms-4 mt-3">GRAPHIC DESIGN</h6>
          <h6 className="ms-4 mt-3">10 videos</h6>
          <div className="mt-4  d-flex justify-content-center">
            <button className="btn-cours">voir les cours</button>
          </div>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className="mere-web"  style={{ borderRadius: "25px", height: "15rem",  width: "14rem" }}>
            <div className="d-flex">
          <div className="mt-5 ms-4">
          <i class="fa-solid fa-cart-shopping"style={{fontSize:"40px"}}></i>
          </div>
          <div style={{marginLeft:"120px"}}>
          <i class="fa-solid fa-ellipsis-vertical mt-3 " style={{fontSize:"25px"}}></i>
          </div>
          </div>
          <h6 className="ms-4 mt-3">MARKETING</h6>
          <h6 className="ms-4 mt-3">18 videos</h6>
          <div className="mt-4  d-flex justify-content-center">
            <button className="btn-cours">voir les cours</button>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
    <div className="mt-5 d-flex justify-content-center">
    <img src={imgleraning} alt="" className="w-100" style={{height: "50%"}}/>
    </div>
    </div>
  );
};

export default Programme;
