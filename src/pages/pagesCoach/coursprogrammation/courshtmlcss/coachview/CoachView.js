import React, { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { firebaseConfig } from '../../../../../firebase/firebase'; // Chemin ajusté ici
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

const CoachView = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const db = getFirestore(firebaseConfig);

  useEffect(() => {
    const tasksCollection = collection(db, 'tasks');
    const unsubscribe = onSnapshot(tasksCollection, (snapshot) => {
      const tasksData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(tasksData);
      setLoading(false);
    }, (error) => {
      setError(error.message);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [db]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center mt-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center mt-5">
        <Alert variant="danger">
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        {tasks.map((task) => (
          <Col key={task.id} lg={6} md={12}>
            <h3>Tâche: {task.id}</h3>
            <p>{task.instruction}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoachView;
