import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./htmlcss.css";

const HtmlCss = () => {
  const [tasks, setTasks] = useState([
    { id: 1, url: "https://www.youtube.com/watch?v=Y80juYcu3ZI&list=PLwLsbqvBlImHG5yeUCXJ1aqNMgUKi1NK3", archived: false },
    { id: 2, url: "https://www.youtube.com/watch?v=6hCGTJCo_Uo", archived: false },
    { id: 3, url: "https://www.youtube.com/watch?v=EFBufG7TKRE", archived: false },
    { id: 4, url: "https://www.youtube.com/watch?v=O_9u1P5YjVc&list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&index=1", archived: false },
    { id: 5, url: "https://www.youtube.com/watch?v=Sjd3_e2la7Q", archived: false },
    { id: 6, url: "https://www.youtube.com/watch?v=h2jVZ8ans_o", archived: false }
  ]);

  const archiveTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, archived: true } : task));
  };

  return (
    <div className="bodimg">
      <Container>
        <div className="boots d-flex justify-content-center" style={{ marginTop: "100px" }}>
          <div className="bootstrap bg-dark" style={{ color: "white", borderRadius: "20px" }}>
            <h1 className="text-center">Cours Html Css & Bootstrap</h1>
          </div>
        </div>
        <div className="ajoutetache d-flex justify-content-center mt-5">
          <button>ajouter une tache</button>
        </div>

        <Row className="vid gy-5 d-flex justify-content-center" style={{ marginTop: "80px" }}>
          {tasks.filter(task => !task.archived).map((task, index) => (
            <Col lg={6} md={12} key={task.id}>
              <h3 style={{ color: "white" }}>Tache: {index + 1}</h3>
              <div className="">
                <ReactPlayer url={task.url} />
              </div>
              <div className="archsup eye-pen d-flex justify-content-center gap-5  mt-3">
                <div>
                  <i className="fa-solid fa-folder-open" style={{ cursor: "pointer" }} onClick={() => archiveTask(task.id)}></i>{" "}
                </div>
                <div>
                  <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
                </div>
              </div>
            </Col>
          ))}
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
