<<<<<<< HEAD

=======
>>>>>>> 63d1e9ec89799ed2456dc962c0421daf36d6602e
// App.js
import Acceuil from "./pages/acceuil/Acceuil";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import CoachDashboard from "./pages/pagesCoach/dashboardCoach/CoachDashboard";
import EtuduantDashboard from "./pages/pagesEtudiant/dashboardEtudiant/EtudiantDashboard";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
// import { AuthContextProvider } from "./context/AuthContext";
=======
import Acceuil from "./pages/acceuil/Acceuil";
// import { ToastContainer } from "react-toastify";
>>>>>>> 63d1e9ec89799ed2456dc962c0421daf36d6602e

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Acceuil />} />
<<<<<<< HEAD
=======

>>>>>>> 63d1e9ec89799ed2456dc962c0421daf36d6602e
          <Route path="/login" element={<Login />} />
          <Route path="/CoachDashboard" element={<CoachDashboard />} />
          <Route path="/EtuduantDashboard" element={<EtuduantDashboard />} />
        </Routes>
      </Router>
      {/* <ToastContainer /> */}
<<<<<<< HEAD
   </div>
=======
    </div>
>>>>>>> 63d1e9ec89799ed2456dc962c0421daf36d6602e
  );
}

export default App;

