import { Card } from "react-bootstrap";
import { IoIosContact } from "react-icons/io";
import img4 from "../../../assets/img/exercicevalidation.png";

const Dashboard = () => {
  return (
    <div className="p-4">
      <Card style={{ width: "40rem", margin: "10px"}}>
        <Card.Body>
          <Card.Title>
            <IoIosContact size={40} />
            Jeudi 4 juillet 2024 à 12h 39mn !
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            tache 1: Integration
          </Card.Subtitle>
          <p>Le capture de ce travail</p>
          <div>
            <img
              className="imge"
              src={img4}
              alt="image-capturer"
              style={{ width: "18rem" }}
            />
          </div>
        </Card.Body>
        <div className="ms-3">
          <Card.Link
            href=" https://exercice-de-validation2-int-gration-c72hsajr7-faty128s-projects.vercel.app/ "
            className="mt-4"
          >
            Clické sur ce lien pour voir mon déploiement
          </Card.Link>
          <div className="mb-2">
            <button
              className="btn btn-danger"
              style={{ width: "20%", marginTop: "20px" }}
            >
              Renvoyer
            </button>
          </div>
        </div>
      </Card>

      <Card style={{ width: "40rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>
            <IoIosContact size={40} />
            Jeudi 4 juillet 2024 à 12h 39mn !
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            tache 1: Integration
          </Card.Subtitle>
          <p>Le capture de ce travail</p>
          <div>
            <img
              className="imge"
              src={img4}
              alt="image-capturer"
              style={{ width: "18rem" }}
            />
          </div>
        </Card.Body>
        <div className="ms-3">
          <Card.Link
            href=" https://exercice-de-validation2-int-gration-c72hsajr7-faty128s-projects.vercel.app/ "
            className="mt-4"
          >
            Clické sur ce lien pour voir mon déploiement
          </Card.Link>
          <div className="mb-2">
            <button
              className="btn btn-danger"
              style={{ width: "20%", marginTop: "20px" }}
            >
              Renvoyer
            </button>
          </div>
        </div>
      </Card>

      <Card style={{ width: "40rem", margin: "10px" }}>
        <Card.Body>
          <Card.Title>
            <IoIosContact size={40} />
            Jeudi 4 juillet 2024 à 12h 39mn !
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            tache 1: Integration
          </Card.Subtitle>
          <p>Le capture de ce travail</p>
          <div>
            <img
              className="imge"
              src={img4}
              alt="image-capturer"
              style={{ width: "18rem" }}
            />
          </div>
        </Card.Body>
        <div className="ms-3">
          <Card.Link
            href=" https://exercice-de-validation2-int-gration-c72hsajr7-faty128s-projects.vercel.app/ "
            className="mt-4"
          >
            Clické sur ce lien pour voir mon déploiement
          </Card.Link>
          <div className="mb-2">
            <button
              className="btn btn-danger"
              style={{ width: "20%", marginTop: "20px" }}
            >
              Renvoyer
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
