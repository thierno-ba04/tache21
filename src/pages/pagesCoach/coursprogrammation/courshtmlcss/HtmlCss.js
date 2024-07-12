import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./htmlcss.css";





const HtmlCss = () => {
  return (
    <div className="bod">
      <Container>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "100px" }}
        >
          <div
            className="bootstrap bg-dark "
            style={{ color: "white", width: "55%", borderRadius: "20px" }}
          >
            <h1 className="text-center">Cours Html Css & Bootstrap</h1>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
        <button>ajouter une tache</button>
        </div>

        <Row className="gy-5 d-flex justify-content-center" style={{ marginTop: "120px" }}>
          <Col lg={6} md={12}>
            <div className="video">
              <ReactPlayer url="https://www.youtube.com/watch?v=Y80juYcu3ZI&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3" />
            </div>
            <div className="eye-pen d-flex justify-content-center gap-5 w-25 mt-3">
              <div>
                <i class="fa-solid fa-folder-open"></i>{" "}
              </div>
              <div>
                <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
          <div className="video">
          <ReactPlayer url="https://www.youtube.com/watch?v=6hCGTJCo_Uo" />
          </div>
          <div className="eye-pen d-flex justify-content-center gap-5 w-25 mt-3">
              <div>
                <i class="fa-solid fa-folder-open"></i>{" "}
              </div>
              <div>
                <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center" style={{ marginTop: "120px" }}>
          <Col lg={6} md={12}>
          <div className="video">
          <ReactPlayer url="https://www.youtube.com/watch?v=EFBufG7TKRE" />
          </div>
          <div className="eye-pen d-flex justify-content-center gap-5 w-25 mt-3">
              <div>
                <i class="fa-solid fa-folder-open"></i>{" "}
              </div>
              <div>
                <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
              </div>
            </div>
          </Col>
          
          <Col lg={6} md={12}>
          <div className="video">
          <ReactPlayer url="https://www.youtube.com/watch?v=O_9u1P5YjVc&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&index=1" />
          </div>
          <div className="eye-pen d-flex justify-content-center gap-5 w-25 mt-3">
              <div>
                <i class="fa-solid fa-folder-open"></i>{" "}
              </div>
              <div>
                <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center" style={{ marginTop: "120px" }}>
          <Col lg={6} md={12}>
          <div className="video">
          <ReactPlayer url="https://www.youtube.com/watch?v=Sjd3_e2la7Q" />
          </div>
          <div className="eye-pen d-flex justify-content-center gap-5 w-25 mt-3">
              <div>
                <i class="fa-solid fa-folder-open"></i>{" "}
              </div>
              <div>
                <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
          <div className="video">
          <ReactPlayer url="https://www.youtube.com/watch?v=h2jVZ8ans_o" />
          </div>
          <div className="eye-pen d-flex justify-content-center gap-5 w-25 mt-3">
              <div>
                <i class="fa-solid fa-folder-open"></i>{" "}
              </div>
              <div>
                <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
              </div>
            </div>
          </Col>
        </Row>
        <Link to="/coursprogram">
          <div className="mt-5 d-flex justify-content-center">
            <button className="retourn mt-5">Retour</button>
          </div>
        </Link>
      </Container>
    </div>
  );
};

export default HtmlCss;
