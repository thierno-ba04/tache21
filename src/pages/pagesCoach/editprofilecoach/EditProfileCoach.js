import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import '../../pagesCoach/editprofilecoach/EditProfileCoach';

const EditProfileCoach = () => {
  const navigate = useNavigate();
  const initialData = {
    firstName: 'Coach',
    lastName: 'Coach',
    phone: '771234567',
    email: 'coach@gmail.com',
    role: 'coach',
    // Ajoutez une clé pour la photo de profil si nécessaire
    // photo: 'chemin/vers/photo.jpg',
  };

  const [formData, setFormData] = useState({ ...initialData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    // Gérez ici le téléchargement du fichier (photo de profil)
    const file = e.target.files[0];
    // Faites ce que vous devez avec le fichier (par exemple, téléchargez-le vers un serveur)
    console.log('Fichier téléchargé :', file);
    // Si vous souhaitez afficher une prévisualisation de l'image, vous pouvez le faire ici
    // Assurez-vous de mettre à jour l'état du formulaire avec le chemin de la nouvelle image
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enregistrez les modifications ici
    navigate('/editPassword');
  };

  return (
    <div className="edit-profile-container">
      <Container className="profile-info">
        <Row>
          <h2 className="text-center">Modifier mon Profil</h2>
          <Col md={12}>
            <div className="profile-details">
              <form onSubmit={handleSubmit} className="edit-profile-form">
                <div className="form-group">
                  <label>Prénom:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Nom:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Téléphone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                {/* <div className="form-group">
                  <label>Rôle:</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                  <div className="change-password-button btn btn-link">Modifier mon mot de passe</div>
                </div> */}
                <div className="form-group">
                  <label>Modifier la photo de profil:</label>
                  <input
                    type="file"
                    name="profilePhoto"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="form-control"
                  />
                </div>
                <div className="button-group">
                  <button type="button" onClick={() => navigate('/updProfileCoach')} className="btn btn-secondary">Retour</button>
                  <button type="submit" className="btn btn-primary ms-auto">Modifier</button>
                </div>
              </form>
            </div>
          </Col>
          {/* <Col md={4}>
            <div className="profile-photo-container ms-auto">
              <img
                src="https://img.freepik.com/photos-gratuite/gros-plan-image-programmeur-travaillant-son-bureau-dans-bureau_1098-18707.jpg"
                alt="user"
                className="profile-photo"
              />
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default EditProfileCoach;
