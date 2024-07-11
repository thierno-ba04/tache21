import React, { useState } from 'react';
import { Card, Col, Row, Modal, Button } from "react-bootstrap";
import { IoIosContact } from "react-icons/io";
import img4 from "../../../assets/img/exercicevalidation.png";
import img5 from "../../../assets/img/tache-validation-crud.png";
import img6 from "../../../assets/img/Crud-firease.png";

import "./dashoard.css";

const initialCardData = [
  {
    id: 1,
    title: "Jeudi 4 juillet 2024 à 12h 39mn !",
    subtitle: "tache 1: exercicevalidation",
    imgSrc: img4,
    link: "https://exercice-de-validation2-int-gration-c72hsajr7-faty128s-projects.vercel.app/",
    buttonText: "Renvoyer"
  },
  {
    id: 2,
    title: "Jeudi 4 juillet 2024 à 12h 39mn !",
    subtitle: "tache 1: tache-validation-crud",
    imgSrc: img5,
    link: "https://tache-validation-avqupnj7u-faty128s-projects.vercel.app/",
    buttonText: "Renvoyer"
  },
  {
    id: 3,
    title: "Jeudi 4 juillet 2024 à 12h 39mn !",
    subtitle: "tache 1: Crud-firebase",
    imgSrc: img6,
    link: "https://crud-firebase-gru8.vercel.app/",
    buttonText: "Renvoyer"
  }
];

const Dashboard = ({ sidebarOpen }) => {
  const [cardData, setCardData] = useState(initialCardData);
  const [comments, setComments] = useState({});
  const [replyCardId, setReplyCardId] = useState(null); // Track which card's reply button is clicked
  const [replies, setReplies] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (cardId) => {
    const updatedCardData = cardData.filter(card => card.id !== cardId);
    setCardData(updatedCardData);
    const { [cardId]: deletedComment, ...updatedComments } = comments;
    setComments(updatedComments);
  };

  const handleCommentChange = (cardId, e) => {
    setComments({ ...comments, [cardId]: e.target.value });
  };

  const handleReplyClick = (cardId) => {
    setReplyCardId(cardId);
    setShowModal(true); // Show the modal when reply is clicked
  };

  const handleReplyChange = (e) => {
    setReplies({ ...replies, [replyCardId]: e.target.value });
  };

  const handleReplySubmit = () => {
    setReplies({ ...replies, [replyCardId]: '' });
    setReplyCardId(null);
    setShowModal(false); // Close the modal after submitting reply
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal if canceled
  };

  return (
    <div className='body2'>
      <div className='container'>
      <Row className="outlet">
        {cardData.map((card) => (
          <div key={card.id}>
            <Col className='col-md-12' style={{ width: "80%", margin: "auto" }}>
              <Card.Title className='mt-4'>
                <IoIosContact size={40} />
                {card.title}
              </Card.Title>
              <Card.Subtitle className="mb-2 ms-2 text-white fw-bold">
                {card.subtitle}
              </Card.Subtitle>
              <p className='ms-2 text-mued fw-bold'>Le capture de ce travail</p>
              <div>
                <img
                  className="imge"
                  src={card.imgSrc}
                  alt="image-capturer"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="ms-3 mt-3">
                <Card.Link href={card.link} className="mt-4 text-white">
                  Lien du déploiement
                </Card.Link>
                <div className="mb-2">
                  <button
                    className="btn btn-danger"
                    style={{ width: "100px", marginTop: "20px" }}
                    onClick={() => handleButtonClick(card.id)}
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            </Col>
            <div>
              <div className="input-group rounded-4">
                <input
                  type="text"
                  className="new-message-input form-control"
                  placeholder="Écrire un commentaire"
                  value={comments[card.id] || ''}
                  onChange={(e) => handleCommentChange(card.id, e)}
                />
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={() => handleReplyClick(card.id)}
                >
                  <i className="fas fa-envelope"></i> Commentaires
                </button>
              </div>
            </div>
          </div>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Commentaire :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Tache1: Intégration</h6>
          <p>Coach : Assane Géye</p>
          <p>Est-ce qu'il est responsive ?</p>
          <input
            type="text"
            className="form-control"
            placeholder="@Votre réponse"
            value={replies[replyCardId] || ''}
            onChange={handleReplyChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleReplySubmit}>
            Répondre
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
