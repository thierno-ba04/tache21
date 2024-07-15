import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Modal, Button, Form } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link, useNavigate } from "react-router-dom";
import "./htmlcss.css";

const HtmlCss = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    return savedTasks || [
      // Your initial tasks...
    ];
  });

  const [showModal, setShowModal] = useState(false);
  const [newTaskUrl, setNewTaskUrl] = useState('');
  const [newTaskInstruction, setNewTaskInstruction] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const newTask = { id: tasks.length + 1, url: newTaskUrl, archived: false, instruction: newTaskInstruction };
    setTasks([...tasks, newTask]);
    setShowModal(false);
    setNewTaskUrl('');
    setNewTaskInstruction('');
  };

  const archiveTask = (id) => {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, archived: true } : task);
    setTasks(updatedTasks);
    const archivedTasks = updatedTasks.filter(task => task.archived);
    navigate('/coursarchive', { state: { archivedTasks } });
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="bodimg">
      <Container>
        <div className="boots d-flex justify-content-center" style={{ marginTop: '100px' }}>
          <div className="bootstrap bg-dark" style={{ color: 'white', borderRadius: '20px' }}>
            <h1 className="text-center">Cours Html Css & Bootstrap</h1>
          </div>
        </div>
        <div className="ajoutetache d-flex justify-content-center mt-5">
          <Button onClick={() => setShowModal(true)}>Ajouter une tâche</Button>
        </div>

        <Row className="vid gy-5 d-flex justify-content-center" style={{ marginTop: '80px' }}>
          {tasks.filter(task => !task.archived).map((task, index) => (
            <Col lg={6} md={12} key={task.id}>
              <h3 style={{ color: 'white' }}>Tâche: {index + 1}</h3>
              <div className="mt-3" style={{ color: 'white' }}>
                <strong>Consigne:</strong> {task.instruction}
              </div>
              <div className="clip mt-4">
                <ReactPlayer url={task.url} width="100%" />
              </div>
              <div className="archsup eye-pen d-flex justify-content-center gap-5 mt-3">
                <div>
                  <i className="fa-solid fa-folder-open" style={{ cursor: 'pointer' }} onClick={() => archiveTask(task.id)}></i>
                </div>
                <div>
                  <i className="fa-solid fa-trash" style={{ color: 'red', cursor: 'pointer' }} onClick={() => deleteTask(task.id)}></i>
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

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter une nouvelle tâche</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTaskInstruction">
                <Form.Label>Consigne de la tâche</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez les consignes de la tâche"
                  value={newTaskInstruction}
                  onChange={(e) => setNewTaskInstruction(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formTaskUrl">
                <Form.Label>URL de la tâche</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez l'URL de la tâche"
                  value={newTaskUrl}
                  onChange={(e) => setNewTaskUrl(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Annuler
            </Button>
            <Button variant="primary" onClick={addTask}>
              Ajouter
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>
    </div>
  );
};

export default HtmlCss;
