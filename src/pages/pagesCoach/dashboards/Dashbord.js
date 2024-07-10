import React, { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import { IoIosContact } from "react-icons/io";
import img4 from "../../../assets/img/exercicevalidation.png";


const initialCardData = [
  {
    id: 1,
    title: "Jeudi 4 juillet 2024 à 12h 39mn !",
    subtitle: "tache 1: Integration",
    imgSrc: img4,
    link: "https://exercice-de-validation2-int-gration-c72hsajr7-faty128s-projects.vercel.app/",
    buttonText: "Renvoyer"
  },
  {
    id: 2,
    title: "Jeudi 4 juillet 2024 à 12h 39mn !",
    subtitle: "tache 1: Integration",
    imgSrc: img4,
    link: "https://exercice-de-validation2-int-gration-c72hsajr7-faty128s-projects.vercel.app/",
    buttonText: "Renvoyer"
  },
  {
    id: 3,
    title: "Jeudi 4 juillet 2024 à 12h 39mn !",
    subtitle: "tache 1: Integration",
    imgSrc: img4,
    link: "https://exercice-de-validation2-int-gration-c72hsajr7-faty128s-projects.vercel.app/",
    buttonText: "Renvoyer"
  }
];

const Dashboard = ({ sidebarOpen , token, userIdToken }) => {
  const [cardData, setCardData] = useState(initialCardData);
  const [marginLeft, setMarginLeft] = useState(sidebarOpen ? '200px' : '110px');
  const [comments, setComments] = useState({});

  const handleButtonClick = (cardId) => {
    // Filter out the clicked card
    const updatedCardData = cardData.filter(card => card.id !== cardId);
    setCardData(updatedCardData);
    // Remove comment for the deleted card
    const { [cardId]: deletedComment, ...updatedComments } = comments;
    setComments(updatedComments);
  };

  useEffect(() => {
    setMarginLeft(sidebarOpen ? '200px' : '110px');
  }, [sidebarOpen]);

  const handleCommentChange = (cardId, e) => {
    setComments({ ...comments, [cardId]: e.target.value });
  };

  return (
    <div className="outlet" style={{ marginLeft }}>
      {cardData.map((card) => (
        <div key={card.id}>
          <Card style={{ width: "45rem", margin: "10px" }}>
            <Card.Body>
              <Card.Title>
                <IoIosContact size={40} />
                {card.title}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {card.subtitle}
              </Card.Subtitle>
              <p>Le capture de ce travail</p>
              <div>
                <img
                  className="imge"
                  src={card.imgSrc}
                  alt="image-capturer"
                  style={{ width: "18rem" }}
                />
              </div>
            </Card.Body>
            <div className="ms-3">
              <Card.Link
                href={card.link}
                className="mt-4"
              >
                Clické sur ce lien pour voir mon déploiement
              </Card.Link>
              <div className="mb-2">
                <button
                  className="btn btn-danger"
                  style={{ width: "20%", marginTop: "20px" }}
                  onClick={() => handleButtonClick(card.id)}
                >
                  {card.buttonText}
                </button>
              </div>
              
            </div>

          </Card>
          <div className=" ">
                  <div className="input-group border rounded-4">
                    <input type="text" className="new-message-input form-control" 
                      placeholder="Ecrire un commentaire" 
                      value={comments[card.id] || ''} 
                      onChange={(e) => handleCommentChange(card.id, e)}
                    />
                    <button type="submit" className="btn btn-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"></path>
                      </svg>
                    </button>
                  </div>
              </div>

              <div className='commentaire border mt-3 p-3'>
                <form action="">
                  <p>
                    Etudiant: Thierno Ba
                  </p>
                  <p className='text-blue'>
                    reponde
                  </p>
                  <p>
                    Good Job
                    
                  </p>
                </form>
              </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
