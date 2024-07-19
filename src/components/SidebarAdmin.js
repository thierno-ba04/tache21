// import React, { useContext, useState, useEffect } from "react";
// import { Dropdown } from "react-bootstrap";
// import {
//   BoxArrowLeft,
//   ListNested,
//   JournalCode,
//   SendCheckFill,
//   PeopleFill,
//   Envelope,
//   BarChartFill,
//   Diagram3Fill,
//   Archive,
//   PersonAdd,
//   Calendar2DateFill,
//   CashCoin,
// } from "react-bootstrap-icons";
// import { MdDashboard, MdNotifications } from "react-icons/md";
// import { Link } from "react-router-dom";
// import {
//   collection,
//   getDocs,
//   onSnapshot,
//   query,
//   where,
// } from "firebase/firestore";
// import { auth, db } from "../firebase/firebase";
// import "./sidebar.css";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";

// const SidebarAdmin= () => {

//   const navigate = useNavigate();

//   const logOut = async () => {
//     try {
//       await signOut(auth);
//       navigate("/");
//     } catch {
//       alert(
//         "for some reason can't deconnect, please check your internet connection and retry"
//       );
//     }
//   };

//   const [isSidebarActive, setSidebarActive] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [unreadMessages, setUnreadMessages] = useState(0);
//   const [newMessageNotification, setNewMessageNotification] = useState(false);

//   useEffect(() => {
//     const q = query(collection(db, "messages"), where("read", "==", false));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       setUnreadMessages(snapshot.docs.length);

//       if (snapshot.docs.length > 0) {
//         setNewMessageNotification(true);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarActive(!isSidebarActive);
//   };

//   return (
//     <div className="mysiderbar">
//       <header className="fixed-top">
//         <div className="toggle ms-md-3 d-flex gap-3" onClick={toggleSidebar}>
//           <span>
//             <ListNested size={20} />
//           </span>
//         </div>

//         <div className="fw-bold me-md-4 d-flex align-items-center gap-4">
//           <span>
//             <Link to="/updProfileCoach">
//               <div>
//                 <div className="userIcon me-3 d-flex align-items-center">
//                   <div className="me-md-4 me-3 nomUser">
//                     {users && (
//                       <div className="text-light">
//                         {users.prenom} {users.nom}
//                       </div>
//                     )}
//                   </div>
//                   <div className=" d-flex user-profile gap-4">
//                     <p className="text-light">Coacher coach</p>
//                         <img src="https://img.freepik.com/photos-gratuite/gros-plan-image-programmeur-travaillant-son-bureau-dans-bureau_1098-18707.jpg" alt="user" height='40px' width='40px' className='rounded'/>
//                       </div>
//                 </div>
//               </div>
//             </Link>
//           </span>
//         </div>
//       </header>

//       <nav className={`sidebar ${isSidebarActive ? "active" : ""}`}>
//         <ul>
//           <li>
//             <Link className="toggle" onClick={toggleSidebar}>
//               <span className="icon">
//                 <ListNested size={20} />
//               </span>
//               <span className="title">Menu</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/DashboardAdmin">
//               <span className="icon">
//                 <MdDashboard size={20} />
//               </span>
//               <span className="title">Dashboard</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/programmeAdmin">
//               <span className="icon">
//                 <JournalCode size={20} />
//               </span>
//               <span className="title">Programmes Admin</span>
//             </Link>
//           </li>
//           <li>
//             <span className="a">
//             <Link to="/Users">
//               <span className="icon">
//                 <PeopleFill size={20} />
//               </span>
//               <span className='title'>
//               <Dropdown>
//                 <Dropdown.Toggle variant="light" id="dropdown-basic">
//                   Users
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Link className='ms-3' to="/ListesCoachs">Coachs</Link>
//                   <Dropdown.Divider />
//                   <Link className='ms-3' to="/ListesEtudiants">Etudiants</Link>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </span>
//             </Link>
//             </span>
//           </li>
//           <li>
//             <Link to="/Categorie">
//             <span className='icon'><Diagram3Fill size={20}/></span>
//               <span className='title'>
//               <Dropdown>
//                 <Dropdown.Toggle variant="light" id="dropdown-basic">
//                   Categorie
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Link className='ms-3' to="/action-1">Programmer</Link>
//                   <Dropdown.Divider />
//                   <Link className='ms-3' to="/action-2">Design</Link>
//                   <Dropdown.Divider />
//                   <Link className='ms-3' to="/action-3">Marketing</Link>
//                   <Dropdown.Divider />
//                   <Link className='ms-3' to="/action-4">Burautique</Link>
//                 </Dropdown.Menu>

//               </Dropdown>
//             </span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/AjouterUser">
//               <span className="icon">
//               <PersonAdd size={20}/>
//               </span>
//               <span className="title">Ajouter Un Users</span>
//             </Link>
//           </li>
//           <li>
//           </li>
//           <li>
//             <Link to="/Calendar">
//               <span className="icon">
//               <Calendar2DateFill size={20}/>
//               </span>
//               <span className="title">Calendrier</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="Budget">
//               <span className="icon">
//               <CashCoin size={20}/>
//               </span>
//             <span className="title">Budget</span>

//             </Link>
//           </li>
//           <li>
//             <Link className="out" onClick={logOut}>
//               <span className="icon">
//                 <BoxArrowLeft size={30} />
//               </span>
//               <span className="title">Deconnecter</span>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default SidebarAdmin;

import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import "./sidebaradmin.css";

const SidebarAdmin = ({openSidebarToggle}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon-header" /> SHOP
        </div>
        <span className="icon close_icon">X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Categories
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Inventory
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarAdmin;
