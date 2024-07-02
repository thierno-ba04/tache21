
// App.js
import Acceuil from "./pages/acceuil/Acceuil";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import CoachDashboard from "./pages/pagesCoach/dashboardCoach/CoachDashboard";
import EtuduantDashboard from "./pages/pagesEtudiant/dashboardEtudiant/EtudiantDashboard";
import { ToastContainer } from "react-toastify";
// import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Acceuil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CoachDashboard" element={<CoachDashboard />} />
          <Route path="/EtuduantDashboard" element={<EtuduantDashboard />} />
        </Routes>
      </Router>
      {/* <ToastContainer /> */}
   </div>
  );
}

export default App;

