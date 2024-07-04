import React, { useContext, useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import {
  BoxArrowLeft,
  ListNested,
  JournalCode,
  SendCheckFill,
  PeopleFill,
  Envelope,
  BarChartFill,
  Diagram3Fill,
  Archive,
} from "react-bootstrap-icons";
import { MdDashboard, MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import "./sidebar.css";
// import { upload } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { IoIosContact } from "react-icons/io";
import { update } from "firebase/database";
// import {  UserContext } from "../dashboard/usercontext";

const SidebarEtudiant = () => {
  //   const {currentUser} =  useContext(UserContext);
  //   const [photo, setPhoto] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert(
        "for some reason can't deconnect, please check your internet connection and retry"
      );
    }
  };

  //   function handleChange(e) {
  //     if (e.target.files[0]) {
  //       setPhoto(e.target.files[0])
  //     }
  //   }

  //   function handleClick() {
  //     upload(photo, currentUser, setLoading);
  //   }

  //   useEffect(() => {
  //     if (currentUser.email) {
  //       getData(currentUser.email);
  //     }
  //     if (currentUser.photoURL) {
  //       setPhotoURL(currentUser.photoURL);
  //     }
  //   }, [currentUser]);

  const [isSidebarActive, setSidebarActive] = useState(false);
  const [users, setUsers] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [newMessageNotification, setNewMessageNotification] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "messages"), where("read", "==", false));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUnreadMessages(snapshot.docs.length);

      if (snapshot.docs.length > 0) {
        setNewMessageNotification(true);
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };


  return (
    // <div className="body">
    <div className="mysiderbar">
      <header className="fixed-top">
        <div className="toggle ms-md-3 d-flex gap-3" onClick={toggleSidebar}>
          <span>
            <ListNested size={20} />
          </span>
        </div>

        <div className="fw-bold me-md-4 d-flex align-items-center gap-4">
          <span>
            <Link to="/upladProfile">
              <div>
                <div className="userIcon me-3 d-flex align-items-center">
                  <div className="me-md-4 me-3 nomUser">
                    {users && (
                      <div className="text-light">
                        {users.prenom} {users.nom}
                      </div>
                    )}
                  </div>
                  <div className="user-profile">
                        <img src={update} alt="user" height='40px' width='40px' className='rounded'/>
                  </div>
                </div>
              </div>
            </Link>
          </span>
        </div>
      </header>

      <nav className={`sidebar ${isSidebarActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link className="toggle" onClick={toggleSidebar}>
              <span className="icon">
                <ListNested size={20} />
              </span>
              <span className="title">Menu</span>
            </Link>
          </li>
          <li>
            <Link to="/DashboardEtud">
              <span className="icon">
                <MdDashboard size={20} />
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/programmesetud">
              <span className="icon">
                <JournalCode size={20} />
              </span>
              <span className="title">Programmes</span>
            </Link>
          </li>
          <li>
            <Link to='/allCoach'>
              <span className='icon'><PeopleFill size={20} /></span>
              <span className='title'>Coachs</span>
            </Link>
          </li>
          <li>
            <Link to="/Messages">
              <span className="icon">
                <Envelope size={20} />
              </span>
              <span className="title">Message</span>
            </Link>
          </li>
          <li>
            <Link to="/meslivraisons">
              <span className='icon'><SendCheckFill size={20} /></span>
              <span className='title'>Mes livraisons</span>
            </Link>
          </li>
          <li>
            <Link to="/nousrejoindre  ">
              <span className='icon'><IoIosContact size={20} /></span>
              <span className='title'>Nous rejoindre</span>
            </Link>
          </li>
          <li>
            <Link className="out" onClick={logOut}>
              <span className="icon">
                <BoxArrowLeft size={30} />
              </span>
              <span className="title">Deconnecter</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    // </div>
  );
};

export default SidebarEtudiant;
