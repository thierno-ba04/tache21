import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { EyeFill, Link, PencilFill, TrashFill } from "react-bootstrap-icons";
import { db } from "../../../firebase/firebase";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
        }
    };

    const handleUpdateUser = (id) => {
       navigate(`/UpdateUser/${id}`);
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteDoc(doc(db, "user", id));
            getData();
            toast.success("utilisateur supprimé avec succés");
        } catch (error) {
            console.error("Error lors de la suppression de l'utilisateur", error);
        }
    };

    const currentItems = users.filter((user) =>
        user.Nom.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <Container className="glob">
                <Row className="titre">
                    <Col className="col-md-12">
                        <h2>Listes des étudiants</h2>
                        <button className="btn1">
                            <RouterLink to="/addetudiant" className="link">
                                ajouter
                            </RouterLink>
                        </button>
                        <form style={{ display: "inline" }}>
                            <input
                                type="text"
                                placeholder="Search Etudiant..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-12">
                        <table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Nom</th>
                                    <th>Téléphone</th>
                                    <th>E-mail</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.length > 0 ? (
                                    currentItems.map((user, index) => (
                                        <tr key={user.id}>
                                            <td>{index + 1}</td>
                                            <td>{user.Nom}</td>
                                            <td>{user.Téléphone}</td>
                                            <td>{user.email}</td>
                                            <td>{user.Status}</td>
                                            <td className="icons">
                                                <Link to={`/voir/${user.id}`}>
                                                    <EyeFill size={18} color="skyblue" className="ms-2" />
                                                </Link>
                                                <button
                                                    onClick={() => handleUpdateUser(user.id)}
                                                    className="button-delete"
                                                >
                                                    <PencilFill size={18} color="yellow" className="ms-2" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteUser(user.id)}
                                                    className="button-delete"
                                                >
                                                    <TrashFill size={18} color="red" className="ms-2" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                    <td colSpan="8" style={{ textAlign: "center", color: "red" }}>
                                      {error}
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
