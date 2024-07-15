import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Col, Container, Row, InputGroup, FormControl } from "react-bootstrap";
import { EyeFill, PencilFill, TrashFill, Search } from "react-bootstrap-icons";
import { db } from "../../../firebase/firebase";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./etudiant.css";

const Etudiant = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const userCollection = collection(db, "user");

    const getData = async () => {
        try {
            const querySnapshot = await getDocs(userCollection);
            const data = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .filter((user) => !user.filter); // Filtrer
            setUsers(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Erreur lors de la récupération des données.");
        }
    };

    const handleUpdateUser = (id) => {
        navigate(`/UpdateUser/${id}`);
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteDoc(doc(db, "user", id));
            getData();
            toast.success("Utilisateur supprimé avec succès");
        } catch (error) {
            console.error("Erreur lors de la suppression de l'utilisateur:", error);
            setError("Erreur lors de la suppression de l'utilisateur.");
        }
    };

    const filteredUsers = users.filter((user) => {
        return (
            (user.Prenom && user.Prenom.toLowerCase().includes(search.toLowerCase())) ||
            (user.Nom && user.Nom.toLowerCase().includes(search.toLowerCase())) ||
            (user.Téléphone && user.Téléphone.toLowerCase().includes(search.toLowerCase())) ||
            (user.Email && user.Email.toLowerCase().includes(search.toLowerCase())) ||
            (user.Status && user.Status.toLowerCase().includes(search.toLowerCase()))
        );
    });

    useEffect(() => {
        if (search && filteredUsers.length === 0) {
            setError("Aucun utilisateur n'est trouvé");
        } else {
            setError("");
        }
    }, [search, filteredUsers]);

    return (
        <div>
            <Container className="glob">
                <Row>
                    <Col xs={12} className="d-flex flex-md-row align-items-md-center mt-3">
                        <h2 className="titre mb-3 mb-md-0">Liste des étudiants</h2>
                        <form style={{ display: "inline", marginLeft: "auto" }}>
                            <InputGroup>
                                <FormControl
                                    type="text"
                                    placeholder="Rechercher étudiant..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="form-control"
                                />
                                <InputGroup.Text>
                                    <Search />
                                </InputGroup.Text>
                            </InputGroup>
                        </form>
                    </Col>
                    <Col xs={12} className="text-md-end mt-3 mt-md-0">
                        <RouterLink to="/addetudiant" className="btn1 RouterLink">
                            Ajouter
                        </RouterLink>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <table className="tableau-style w-80">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Prenom</th>
                                    <th>Nom</th>
                                    <th>Téléphone</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((user, index) => (
                                        <tr key={user.id}>
                                            <td>{index + 1}</td>
                                            <td>{user.Prenom}</td>
                                            <td>{user.Nom}</td>
                                            <td>{user.Téléphone}</td>
                                            <td>{user.Email}</td>
                                            <td>{user.Status}</td>
                                            <td className="icons">
                                                <RouterLink to={`/voir/${user.id}`} className="mt-2">
                                                    <EyeFill size={18} color="skyblue" />
                                                </RouterLink>
                                                <button
                                                    onClick={() => handleUpdateUser(user.id)}
                                                    className="button-edit"
                                                >
                                                    <PencilFill size={18} color="yellow" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteUser(user.id)}
                                                    className="button-delete"
                                                >
                                                    <TrashFill size={18} color="red" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" style={{ textAlign: "center", color: "red" }}>
                                            {error || "Aucun étudiant trouvé."}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Etudiant;
