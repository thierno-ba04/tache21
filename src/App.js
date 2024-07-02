// App.js
import Acceuil from "./pages/acceuil/Acceuil";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import CoachDashboard from "../src/pages/pagesCoach/CoachDashboard";
import EtuduantDashboard from "./pages/pagesEtudiant/EtudiantDashboard";
import Sidebar from "./components/Sidebar";
import  Navbar  from "./components/Navbar";
// import Acceuil from "./pages/acceuil/Acceuil";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          
        <Route path="/" element={<Acceuil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/navbar" element={<Navbar />} />

          <Route path="/CoachDashboard" element={<CoachDashboard />} />
          <Route path="/EtuduantDashboard" element={<EtuduantDashboard />} />
        </Routes>
      </Router>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
