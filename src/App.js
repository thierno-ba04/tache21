// App.js
import Acceuil from "./pages/acceuil/Acceuil";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import CoachDashboard from "../src/pages/pagesCoach/CoachDashboard";
import EtuduantDashboard from "./pages/pagesEtudiant/EtudiantDashboard";
import Programmes from "./pages/pagesCoach/Programme";
import Dashboard from "./pages/pagesCoach/Dashbord";
import Etudiant from "./pages/pagesCoach/Etudiant";
import Message from "./pages/pagesCoach/Message";
import CoursArchive from "./pages/pagesCoach/CoursArchive";




function App() {
  return (
    <div>
      <Router>
        <Routes>
          
        <Route path="/" element={<Acceuil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CoachDashboard" element={<CoachDashboard />} />
          <Route path="/EtuduantDashboard" element={<EtuduantDashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Programme" element={<Programmes />} />
          <Route path="/etudiant" element={<Etudiant />} />
          <Route path="/message" element={<Message />} />
          <Route path="/coursArchive" element={<CoursArchive />} />

        </Routes>
      </Router>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
