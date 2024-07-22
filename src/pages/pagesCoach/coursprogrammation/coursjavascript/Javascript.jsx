// Javascript.js
import React, { useState, useContext } from "react";
import {
  Col,
  Container,
  Row,
  Modal,
  Button,
  Form,
  Spinner,
  Alert,
} from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { toast } from "react-toastify";
import { TaskContext } from "../../taskContext/TaskContext";

const Javascript = () => {
  const { tasks, setTasks, loading, error } = useContext(TaskContext);
  const [showModal, setShowModal] = useState(false);
  const [newTaskUrl, setNewTaskUrl] = useState("");
  const [newTaskInstruction, setNewTaskInstruction] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const navigate = useNavigate();

  const addTask = async () => {
    try {
      const newTask = {
        url: newTaskUrl,
        archived: false,
        instruction: newTaskInstruction,
        createdAt: serverTimestamp(),
      };
      await addDoc(collection(db, "tasksjavascrip"), newTask);
      resetModal();
      toast.success("Tâche ajoutée avec succès");
    } catch (error) {
      toast.error("Erreur lors de l'ajout de la tâche");
    }
  };

  const updateTask = async () => {
    try {
      const taskDoc = doc(db, "tasksjavascrip", editingTaskId);
      await updateDoc(taskDoc, {
        url: newTaskUrl,
        instruction: newTaskInstruction,
      });
      resetModal();
      toast.success("Tâche mise à jour avec succès");
    } catch (error) {
      toast.error("Erreur lors de la mise à jour de la tâche");
    }
  };

  const resetModal = () => {
    setShowModal(false);
    setNewTaskUrl("");
    setNewTaskInstruction("");
    setEditingTaskId(null);
  };

  const openEditModal = (task) => {
    setNewTaskUrl(task.url);
    setNewTaskInstruction(task.instruction);
    setEditingTaskId(task.id);
    setShowModal(true);
  };

  const archiveTask = async (id) => {
    try {
      const taskDoc = doc(db, "tasksjavascrip", id);
      await updateDoc(taskDoc, { archived: true });
      toast.success("Tâche archivée avec succès");
      navigate("/coursarchive");
    } catch (error) {
      toast.error("Erreur lors de l'archivage de la tâche");
    }
  };

  const deleteTask = async (id) => {
    try {
      const taskDoc = doc(db, "tasksjavascrip", id);
      await deleteDoc(taskDoc);
      toast.success("Tâche supprimée avec succès");
    } catch (error) {
      toast.error("Erreur lors de la suppression de la tâche");
    }
  };

  return (
    <div className="bodimg">
      <Container>
        <div
          className="boots d-flex justify-content-center"
          style={{ marginTop: "100px" }}
        >
          <div
            className="bootstrap bg-dark"
            style={{ color: "white", borderRadius: "20px" }}
          >
            <h1 className="text-center">Cours Javascript</h1>
          </div>
        </div>
        <div className="ajoutetache d-flex justify-content-center mt-5">
          <Button onClick={() => setShowModal(true)}>Ajouter une tâche</Button>
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

        <div className="text" style={{ background: "white" }}>
          <div className="mt-5 ms-4">
            <h4>Programme Javascript</h4>
          </div>
          <div
            className="mt-5 ms-4"
            style={{ background: "black", color: "white" }}
          >
            <h5>Débutant</h5>
          </div>
          <div className="mt-5 ms-4">
            <h5>définition</h5>
            <p>
              JavaScript est un langage de programmation de scripts
              principalement employé dans les pages web interactives et une
              partie essentielle des applications web. Avec les langages HTML et
              CSS, JavaScript est au cœur des langages utilisés par les
              développeurs web.
            </p>
          </div>
          <div className="mt-5 ms-4">
            <h5>Conditions préalables</h5>
            <p>
              Avant de poursuivre avec ce programme sur JavaScript, l'etudiant
              doit 'avoir :
            </p>
            <ul>
              <li>Compréhension de base de HTML et CSS.</li>
              <li>Pouvoir utiliser sublimeText et/ou visual Studio Code</li>
            </ul>
            <h5>Objectifs</h5>
            <p>A la fin de ce programme l'etudiant doit être en mesure de:</p>
            <ul>
              <li>Utiliser les variables</li>
              <li>Prendre en main les boucles et les conditions</li>
              <li>Créer des fonctions et les méthodes</li>
              <li>Manipuler les donnéesobjets paramètres</li>
              <li>Utiliser javascript dans des pages web</li>
              <li>Créer des scripts</li>
            </ul>
          </div>
        </div>

        <Row
          className="vid gy-5 d-flex justify-content-center"
          style={{ marginTop: "80px" }}
        >
          {tasks
            .filter((task) => !task.archived)
            .map((task, index) => (
              <Col lg={6} md={12} key={task.id}>
                <h3>Tâche: {index + 1}</h3>
                <div className="mt-3">
                  <strong>Consigne:</strong> {task.instruction}
                </div>
                <div className="clip mt-4">
                  <ReactPlayer url={task.url} width="100%" />
                </div>
                <div className="archsup eye-pen d-flex justify-content-center gap-5 mt-3">
                  <div>
                    <i
                      className="fa-solid fa-folder-open"
                      style={{ cursor: "pointer" }}
                      onClick={() => archiveTask(task.id)}
                    ></i>
                  </div>
                  <div>
                    <i
                      className="fa-solid fa-pencil"
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => openEditModal(task)}
                    ></i>
                  </div>
                  <div>
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => deleteTask(task.id)}
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

        <Modal show={showModal} onHide={resetModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editingTaskId
                ? "Modifier la tâche"
                : "Ajouter une nouvelle tâche"}
            </Modal.Title>
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
            <Button variant="secondary" onClick={resetModal}>
              Annuler
            </Button>
            <Button
              variant="primary"
              onClick={editingTaskId ? updateTask : addTask}
            >
              {editingTaskId ? "Modifier" : "Ajouter"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Javascript;
