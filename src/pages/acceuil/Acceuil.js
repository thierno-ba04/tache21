import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom"
import '../acceuil/accueil.css';



const Acceuil = () => {
  // const handleSend = () => {}
  return (
    <div className='body'>
      <Container> 
        <Row className='mt-4'>
        <Col className="col-lg-6 col-md-6">
        <h2 className='fw-bold titre'>Bienvenu dans notre plateforme <br /> 
          <span>e-learning!</span> 
          </h2>
        <div className='text-accl'>
        <p>
        Voulez-vous améliorer votre compétence dans le monde professionnel ,
      nous somme la pour vous accompagnez a atteindre le sommets de votre carière,
      vous estes au bon endroi!
        </p>
        <h5>
        <span>Pour quoi nous...</span>
        </h5>
        <p>
        Nous avons des cours de haut qualité vous pouvez accéder à une vaste selection de cours 
      dispencé par des expérs dans divers domaines comme: <br />
      - Le Marketing Digitale, <br />
      - Le Design <br />
      - L'Informatique (Programmation, Bureautique...) <br />
      - L'infographie. <br />
      Nos cours sont aussi accecible et flexible par n'importe quel moyen d'apprenantisage
        </p>
        <h5>
          <span>Communauter d'apprenant...</span>
        </h5>
        <p>
        Rejoignez un communauté dynamique pour échanger et collaborer

      Aprés vos cours de formations vous obtenez des certificats qui valorise 
      votre parcours professionnel.
      Ne laissez pas cet opportunité de vous former avec les meilleurs.
      Inscrivez-vous dés maintenant et commencer votre voyage vers l'excellence.
        </p>
        </div>
        </Col>
          <Col className="col-lg-6 col-md-6">
          <div class="form-container ms-auto">
      <p class="title">Welcome back</p>
      <form class="form pt-4">
      <input type="name" className="input" placeholder="name" />

        <input type="email" className="input" placeholder="Email" />
        <textarea name="message" id="message" placeholder='message' rows={4} cols={40}></textarea>

        <div className='d-flex justify-content-center align-items-center'>
        <button className="submit">Envoyer</button>
        </div>
      </form>
      <p class="sign-up-label">
        Don't have an account?<Link to="/signup" className="sign-up-link">Sign up</Link>
      </p>
    </div>
          </Col>
          
        </Row>
        <div className='d-flex justify-content-center align-items-center'>
        <Link to="/login">
          <button className="form-buttton">Log in</button>
          </Link>
        </div>

      </Container>
      
    </div>
  )
}

export default Acceuil;