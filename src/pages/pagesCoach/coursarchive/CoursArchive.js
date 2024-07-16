import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import ReactPlayer from "react-player";
import "./coursarchive.css";

const CoursArchive = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const tasksCollection = collection(db, "tasks");
    const unsubscribe = onSnapshot(
      tasksCollection,
      (snapshot) => {
        const tasksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksData.filter((task) => task.archived));
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const unarchiveTask = async (id) => {
    try {
      const taskDoc = doc(db, "tasks", id);
      await updateDoc(taskDoc, { archived: false });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bodimg">
      <Container>
        <div className="d-flex justify-content-center" style={{ marginTop: "100px" }}>
          <div className="bg-dark" style={{ color: "white", borderRadius: "20px" }}>
            <h1 className="text-center">Archived Tasks</h1>
          </div>
        </div>

        {loading && (
          <div className="d-flex justify-content-center mt-5">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}

        {error && (
          <div className="d-flex justify-content-center mt-5">
            <Alert variant="danger">{error}</Alert>
          </div>
        )}

        <Row className="vid gy-5 d-flex justify-content-center" style={{ marginTop: "80px" }}>
          {tasks.map((task, index) => (
            <Col lg={6} md={12} key={task.id}>
              <h3 style={{ color: "white" }}>Task: {index + 1}</h3>
              <div className="mt-3" style={{ color: "white" }}>
                <strong>Instruction:</strong> {task.instruction}
              </div>
              <div className="clip mt-4">
                <ReactPlayer url={task.url} width="100%" />
              </div>
              <div className="d-flex justify-content-center gap-5 mt-3">
                <div>
                  <i
                    className="fa-solid fa-folder-minus"
                    style={{ cursor: "pointer", color: "blue" }}
                    onClick={() => unarchiveTask(task.id)}
                  ></i>
                </div>
              </div>
            </Col>
          ))}
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
