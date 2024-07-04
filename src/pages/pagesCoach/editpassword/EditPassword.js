import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import '../../pagesCoach/editpassword/EditPassword';

const EditPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Enregistrez le nouveau mot de passe ici
      navigate('/updProfileCoach');
    } else {
      alert('Les mots de passe ne correspondent pas');
    }
  };

  return (
    <div className="edit-password-container">
      <h2>Modifier le Mot de Passe</h2>
      <form onSubmit={handleSubmit} className="edit-password-form">
        <div>
          <label>Nouveau Mot de Passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirmer le Mot de Passe:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="button" onClick={() => navigate('/updProfileCoach')}>Retour</button>
          <button type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  );
};

export default EditPassword;
