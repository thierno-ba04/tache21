import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link, useLocation } from "react-router-dom";
// import "./htmlcss.css";

const CoursArchive = () => {
  const location = useLocation();
  const { archivedTasks } = location.state || { archivedTasks: [] };

  return (
    <div className="bod">
      <Container>
        <div className="d-flex justify-content-center" style={{ marginTop: "100px" }}>
          <div className="bootstrap bg-dark" style={{ color: "white", width: "55%", borderRadius: "20px" }}>
            <h1 className="text-center">Cours Archivés</h1>
          </div>
        </div>

        <Row className="gy-5 d-flex justify-content-center" style={{ marginTop: "120px" }}>
          {archivedTasks.length > 0 ? archivedTasks.map((task, index) => (
            <Col lg={6} md={12} key={task.id}>
              <h3 style={{ color: "white" }}>Tache: {index + 1}</h3>
              <div className="video">
                <ReactPlayer url={task.url} />
              </div>
            </Col>
          )) : (
            <div className="text-center" style={{ color: "white" }}>
              <h3>Aucun cours archivé</h3>
            </div>
          )}
        </Row>
        
        <Link to="/coursprogram">
          <div className="mt-5 d-flex justify-content-center">
            <button className="retourn mt-5">Retour</button>
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default CoursArchive;
