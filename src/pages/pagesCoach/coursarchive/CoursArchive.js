import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./coursarchive.css";


const CoursArchive = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [archivedTasks, setArchivedTasks] = useState(location.state?.archivedTasks || []);

  useEffect(() => {
    if (!location.state) {
      const savedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (savedTasks) {
        setArchivedTasks(savedTasks.filter(task => task.archived));
      }
    }
  }, [location.state]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = savedTasks.map(task =>
      archivedTasks.some(archivedTask => archivedTask.id === task.id) ? { ...task, archived: true } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }, [archivedTasks]);

  const unarchiveTask = (id) => {
    const updatedTasks = archivedTasks.filter(task => task.id !== id);
    setArchivedTasks(updatedTasks);
    
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTasks = savedTasks.map(task => task.id === id ? { ...task, archived: false } : task);
    localStorage.setItem('tasks', JSON.stringify(newTasks));

    navigate('/htmlcss', { state: { tasks: newTasks } });
  };

  return (
    <div className="bodimg">
      <Container>
        <div className="d-flex justify-content-center" style={{ marginTop: '100px' }}>
          <div className="bootstrap bg-dark" style={{ color: 'white', width: '55%', borderRadius: '20px' }}>
            <h1 className="text-center">Cours Archivés</h1>
          </div>
        </div>

        <Row className="gy-5 d-flex justify-content-center" style={{ marginTop: '120px' }}>
          {archivedTasks.length > 0 ? archivedTasks.map((task, index) => (
            <Col lg={6} md={12} key={task.id}>
              <h3 style={{ color: 'white' }}>Tache: {index + 1}</h3>
              <div className="video">
                <ReactPlayer url={task.url} />
              </div>
              <div className="archsup eye-pen d-flex justify-content-center gap-5 mt-3">
                <div>
                  <i className="fa-solid fa-folder-minus" style={{ cursor: 'pointer' }} onClick={() => unarchiveTask(task.id)}></i>{" "}
                </div>
                <div>
                  <i className="fa-solid fa-trash" style={{ color: 'red' }}></i>
                </div>
              </div>
            </Col>
          )) : (
            <div className="text-center" style={{ color: 'white' }}>
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
