import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { db } from '../../../../firebase/firebase';
import "./voir.css";

const Voir = () => {
    const { id } = useParams();

    const [seeUser, setSeeUser] = useState({
        Prenom: "",
        Nom: "",
        Téléphone: "",
        Email: "",
        Status: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSeeData = async () => {
            try {
                const userDf = doc(db, "user", id);
                const queryUser = await getDoc(userDf);
                if (queryUser.exists()) {
                    const data = queryUser.data();
                    setSeeUser(data);
                } else {
                    console.error("No user found with ID:", id);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        getSeeData();
    }, [id]);

    if (loading) {
        return <h1>Loading user details...</h1>;
    }

    return (
        <div className='text-center user-details'>
            <h1>User Details</h1>
            <Form className='text-start justify-content-center bg-light details'>
                <Form.Group className='mb-3'>
                    <Form.Label>Prénom: {seeUser.Prenom}</Form.Label>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Nom: {seeUser.Nom}</Form.Label>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Téléphone: {seeUser.Téléphone}</Form.Label>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Email: {seeUser.Email}</Form.Label>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Status: {seeUser.Status}</Form.Label>
                </Form.Group>
            </Form>
            <RouterLink to="/etudiant">
                <Button className='btn btn-edit'>Go Back</Button>
            </RouterLink>
        </div>
    );
};

export default Voir;
