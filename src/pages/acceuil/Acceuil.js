import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../acceuil/accueil.css';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../firebase/firebase';

const Acceuil = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const userCollection = collection(db, 'users'); // Assurez-vous que le nom de la collection correspond à celui dans votre base de données

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(userCollection);
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setUsers(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des champs
    if (!name || !email || !message) {
      toast.error('Veuillez remplir tous les champs du formulaire.');
      return;
    }

    try {
      // Ajouter un nouveau document à la collection 'users'
      const docRef = await addDoc(userCollection, {
        name: name,
        email: email,
        message: message
      });

      toast.success('Message envoyé avec succès!');
      // Réinitialiser les champs du formulaire après l'envoi réussi
      setName('');
      setEmail('');
      setMessage('');
      getData(); // Rafraîchir la liste des utilisateurs après ajout d'un nouveau message
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className='body'>
      <ToastContainer />
      <Container>
        <Row className='mt-5'>
          <Col className="col-lg-6 col-md-6">
            <h2 className='fw-bold titre'>Bienvenue dans notre plateforme <br />
              <span>e-learning!</span>
            </h2>
            <div className='text-accl'>
              <p>
                Voulez-vous améliorer votre compétence dans le monde professionnel,
                nous sommes là pour vous accompagner à atteindre le sommet de votre carrière,
                vous êtes au bon endroit!
              </p>
              <h5>
                <span>Pourquoi nous...</span>
              </h5>
              <p>
                Nous proposons des cours de haute qualité que vous pouvez suivre dans divers domaines comme : <br />
                - Le Marketing Digital, <br />
                - Le Design, <br />
                - L'Informatique (Programmation, Bureautique...), <br />
                - L'Infographie. <br />
                Nos cours sont accessibles et flexibles, adaptés à tous les modes d'apprentissage.
              </p>
              <h5>
                <span>Communauté d'apprenants...</span>
              </h5>
              <p>
                Rejoignez une communauté dynamique pour échanger et collaborer.
                Après vos formations, vous recevrez des certificats qui valoriseront votre parcours professionnel.
                Ne laissez pas passer cette opportunité de vous former avec les meilleurs.
                Inscrivez-vous dès maintenant et commencez votre voyage vers l'excellence.
              </p>
            </div>
          </Col>
          <Col className="col-lg-6 col-md-6">
            <div className="form-container ms-auto">
              <p className="title">Welcome back</p>
              <form className="form pt-4" onSubmit={handleSubmit}>
                <input type="text" className="input" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea name="message" id="message" placeholder='Message' rows={4} cols={40} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <div className='d-flex justify-content-center align-items-center'>
                  <button type="submit" className="submit">Envoyer</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <div className='d-flex justify-content-center align-items-center mb-4'>
          <Link to="/login">
            <button className="form-button">Log In</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Acceuil;
