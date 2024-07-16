import { Col, Container, Row } from "react-bootstrap";
import "./coursprogram.css";
import { Link } from "react-router-dom";

const CoursProgram = () => {
  return (
    <div className="bodimg">
      <Container>
        <div className="d-flex justify-content-center" style={{marginTop:"100px"}}>
          <div
            className="programmation bg-dark "
            style={{ color: "white", borderRadius: "20px" }}
          >
            <h1 className="text-center">Cours Programmation</h1>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-center">
        <h2>FRONT END</h2>
        </div>
        <Row className="mt-5 gy-5 d-flex ms-1">
          <Col md={4}>
            <div
              className="htmlcss"
              style={{ borderRadius: "25px", height: "10rem" }}
            >
              <div className="d-flex  justify-content-center">
                <h4 className="mt-2">HTML & CSS</h4>
              </div>
              <div className="d-flex gap-4 justify-content-center mt-3">
                <div className="html">
                  <i class="fa-brands fa-html5"></i>
                </div>
                <div className="css">
                  <i class="fa-brands fa-css3-alt"></i>
                </div>
              </div>
              <Link to="/htmlcss">
              <div className="mt-3 d-flex justify-content-center">
                <button>Voir les cours</button>
              </div>
              </Link>
            </div>
          </Col>

          <Col md={4}>
            <div
              className="htmlcss"
              style={{ borderRadius: "25px", height: "10rem" }}
            >
              <div className="d-flex  justify-content-center">
                <h4 className="mt-2">JAVASCRIPT</h4>
              </div>
              <div className="d-flex gap-4 justify-content-center mt-3">
                <div className="js">
                <i class="fa-brands fa-js"></i>
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <Link to="/javascript">
                <button>Voir les cours</button>
                </Link>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div
              className="htmlcss"
              style={{ borderRadius: "25px", height: "10rem" }}
            >
              <div className="d-flex  justify-content-center">
                <h4 className="mt-2">REACTJS</h4>
              </div>
              <div className="d-flex gap-4 justify-content-center mt-3">
                <div className="react">
                  <i class="fa-brands fa-react"></i>
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <button>Voir les cours</button>
              </div>
            </div>
          </Col>
        </Row>

        <div className="mt-5 d-flex justify-content-center">
        <h2>BACK END</h2>
        </div>
        <Row className="mt-5  gy-5 ms-1">
       
          <Col md={4}>
            <div
              className="htmlcss"
              style={{ borderRadius: "25px", height: "10rem" }}
            >
              <div className="d-flex  justify-content-center">
                <h4 className="mt-2">PHP</h4>
              </div>
              <div className="d-flex gap-4 justify-content-center mt-3">
                <div className="php">
                <i class="fa-brands fa-php"></i>    
               </div>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <button>Voir les cours</button>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div
              className="htmlcss"
              style={{ borderRadius: "25px", height: "10rem" }}
            >
              <div className="d-flex  justify-content-center">
                <h4 className="mt-2">PYTHON</h4>
              </div>
              <div className="d-flex gap-4 justify-content-center mt-3">
                <div className="js">
                  <i class="fa-brands fa-python"></i>
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <button>Voir les cours</button>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div
              className="htmlcss"
              style={{ borderRadius: "25px", height: "10rem" }}
            >
              <div className="d-flex  justify-content-center">
                <h4 className="mt-2">LARAVEL</h4>
              </div>
              <div className="d-flex gap-4 justify-content-center mt-3">
                <div className="laravel">
                  <i class="fa-brands fa-laravel"></i>
                </div>
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <button>Voir les cours</button>
              </div>
            </div>
          </Col>
        </Row>
        <Link to="/programme">
        <div className="mt-5 d-flex justify-content-center">
        <button className="retourn mt-5">
            Retour
        </button>
        </div>
        </Link>
      </Container>
    </div>
  );
};

export default CoursProgram;
