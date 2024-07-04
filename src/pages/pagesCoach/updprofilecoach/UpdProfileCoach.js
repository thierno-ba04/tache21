import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../pagesCoach/updprofilecoach/UpdProfileCoach';
import { Col, Container, Row } from 'react-bootstrap';
// import defaultProfilePhoto from './default-profile-photo.jpg'; // Chemin vers une image par défaut

const UpdateProfileCoach = () => {
  const navigate = useNavigate();
  const initialData = {
    firstName: 'Coacher',
    lastName: 'Coach',
    phone: '771234567',
    email: 'coach@gmail.com',
    role: 'coach',
  };

  const [formData, setFormData] = useState({ ...initialData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enregistrez les modifications ici
    navigate('/editProfileCoach');
  };

  return (
    <div className="update-profile-container">
      <Container className="profile-info">
        <Row>
            <h1 className='text-center fw-bold mb-4'>Mon Profile</h1>
            <Col className="col-md-8">
            <div className="profile-details">
          <div className="profile-detail">
            <span className="detail-label">Prénom:</span> {formData.firstName}
          </div>
          <div className="profile-detail">
            <span className="detail-label">Nom:</span> {formData.lastName}
          </div>
          <div className="profile-detail">
            <span className="detail-label">Email:</span> {formData.email}
          </div>
          <div className="profile-detail">
            <span className="detail-label">Téléphone:</span> {formData.phone}
          </div>
          <div className="profile-detail">
            <span className="detail-label">Rôle:</span> {formData.role}
          </div>
          <div className='profile-detail'>
          <div className="change-password-button" onClick={() => navigate('/editPassword')}>
        Modifier mon mot de passe !
      </div>
          </div>
        </div>
      
      <form onSubmit={handleSubmit} className="update-profile-form">
        {/* Vos inputs ici, ils ne seront pas affichés */}
        <button type="button" onClick={() => navigate('/Dashboard')} className="btn btn-secondary mt-3">Retour</button>
        <button type="submit" className="btn btn-primary mt-3">Modifier le profil</button>
      </form>
            </Col>
        <Col className='col-md-4'>
        <div className="profile-photo-container">
        <img src="https://img.freepik.com/photos-gratuite/gros-plan-image-programmeur-travaillant-son-bureau-dans-bureau_1098-18707.jpg" alt="user" // Remplacez par formData.photo ou une autre source d'image
            
            className="profile-photo"
          />
        </div>
        </Col>
        
      </Row>
      </Container>

    </div>
  );
};

export default UpdateProfileCoach;
