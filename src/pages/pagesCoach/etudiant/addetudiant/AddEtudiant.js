import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { db } from '../../../../firebase/firebase';
import { Col, Container, Row } from 'react-bootstrap';
import { Link as RouterLink } from 'react-router-dom';
import "./addetudiant.css"

const AddEtudiant = (props) => {

    const navigate = useNavigate();

    const [newTable, setNewTable] = useState({
        Prenom: "",
        Nom: "",
        Téléphone: "",
        Email: "",
        Status: "",
    });

    const handleChange = (e) => {
        setNewTable({ ...newTable, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { Prenom, Nom, Téléphone, Email, Status } = newTable;

        // Vérification des champs vides
        if (!Prenom || !Nom || !Téléphone || !Email || !Status) {
            toast.error("Veuillez remplir tous les champs", {
                position: "top-center",
            });
            return;
        }

        try {
            // Ajout du doc dans firebase
            await addDoc(collection(db, "user"), {
                Prenom,
                Nom,
                Téléphone,
                Email,
                Status,
            });

            toast.success("Utilisateur ajouté avec succès", {
                position: "top-center",
            });
            setTimeout(() => {
                navigate("/etudiant"); // Changez ce chemin vers la page `Etudiant.js`
            }, 1000);
        } catch (error) {
            console.error("Erreur lors de l'ajout :", error);
            toast.error("Erreur lors de l'ajout de l'utilisateur", {
                position: "top-center",
            });
        }
    };

    const handleRetour = () => {
        navigate("/etudiant");
    };

    return (
        <div className='NewTables'>
            <h1 className='p-4'>Ajouter des Etudiants</h1>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <form className='NewTables1' onSubmit={handleSubmit}>
                            <div className='inpute'>
                            <input
                                    type="text"
                                    name='Prenom'
                                    id='Prenom'
                                    value={newTable.Prenom}
                                    onChange={handleChange}
                                    className='form-control'
                                    placeholder='Prénom'
                                />{" "}
                                <br />
                                <input
                                    type="text"
                                    name='Nom'
                                    id='Nom'
                                    value={newTable.Nom}
                                    onChange={handleChange}
                                    className='form-control'
                                    placeholder='Nom'
                                />{" "}
                                <br />
                                <input
                                    type="number"
                                    name='Téléphone'
                                    id='Téléphone'
                                    value={newTable.Téléphone}
                                    onChange={handleChange}
                                    className='form-control'
                                    placeholder='Téléphone'
                                />{" "}
                                <br />
                                <input
                                    type="email"
                                    name='Email'
                                    id='Email'
                                    value={newTable.Email}
                                    onChange={handleChange}
                                    className='form-control'
                                    placeholder='E-mail'
                                />{" "}
                                <br />
                                <input
                                    type="text"
                                    name='Status'
                                    id='Status'
                                    value={newTable.Status}
                                    onChange={handleChange}
                                    className='form-control'
                                    placeholder='Status'
                                />{" "}
                                <br />
                            </div>
                            <div className="">
                                <button className="btn btn-success" type="submit">
                                    Ajouter
                                </button>
                                <button className="btn btn-primary" type="button" onClick={handleRetour}>
                                    Retour
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            <ToastContainer
                position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ width: "auto", textAlign: "center" }}
            />
        </div>
    );
};

export default AddEtudiant;
