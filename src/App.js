import Acceuil from "./pages/acceuil/Acceuil";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import CoachDashboard from "./pages/pagesCoach/coachdasboard/CoachDashboard";
import Programme from "./pages/pagesCoach/programme/Programme";
import Dashboard from "./pages/pagesCoach/dashboards/Dashbord";
import Etudiant from "./pages/pagesCoach/etudiant/Etudiant";
import Message from "./pages/pagesCoach/message/Message";
import CoursArchive from "./pages/pagesCoach/coursarchive/CoursArchive";
import UpdProfileCoach from "./pages/pagesCoach/updprofilecoach/UpdProfileCoach";
import EditProfileCoach from "./pages/pagesCoach/editprofilecoach/EditProfileCoach";
import EditPassword from "./pages/pagesCoach/editpassword/EditPassword";
// import SidebarCoach from "./components/SidebarCoach";
import AdminDashboard from "./pages/pagesadmin/AdminDashboard";
import EtudiantDashboard from "./pages/pagesEtudiant/etudianddashboard/EtudiantDashboard";
import LayoutCoach from "./layout/LayoutCoach";
import LayoutEtudiant from "./layout/LayoutEtudiant";
import LayoutAdmin from "./layout/LayoutAdmin";
import DashboardEtud from "./pages/pagesEtudiant/dashboard/DashboardEtud";
import MesLivaisons from "./pages/pagesEtudiant/meslivraison/MesLivraisons";
import Messages from "./pages/pagesEtudiant/messages/Messages";
import NousRejoidre from "./pages/pagesEtudiant/nousrejoindre/NousRejoindre";
import AllCoach from "./pages/pagesEtudiant/allcoach/AllCoachs";
import ProgrammesEtud from "./pages/pagesEtudiant/programmes/ProgrammesEtud";
import CoursProgram from "./pages/pagesCoach/coursprogrammation/CoursProgram";
import HtmlCss from "./pages/pagesCoach/coursprogrammation/courshtmlcss/HtmlCss";
import AddEtudiant from "./pages/pagesCoach/etudiant/addetudiant/AddEtudiant";
import UpdateUser from "./pages/pagesCoach/etudiant/updateuser/UpdateUser";
import Voir from "./pages/pagesCoach/etudiant/voir/Voir";
import CoachView from "./pages/pagesCoach/coursprogrammation/courshtmlcss/coachview/CoachView";
import Javascript from "./pages/pagesCoach/coursprogrammation/coursjavascript/Javascript";
import { ToastContainer } from "react-toastify";
import { TaskProvider } from "./pages/pagesCoach/taskContext/TaskContext";

function App() {
  return (
    <div>
      <TaskProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/login" element={<Login />} />

            {/* Route Admin */}
            <Route element={<LayoutAdmin />}>
              <Route path="/AdminDashboard" element={<AdminDashboard />} />
            </Route>

            {/* Route coach */}
            <Route element={<LayoutCoach />}>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/CoachDashboard" element={<CoachDashboard />} />
              <Route path="/updProfileCoach" element={<UpdProfileCoach />} />
              <Route path="/editProfileCoach" element={<EditProfileCoach />} />
              <Route path="/editPassword" element={<EditPassword />} />
              <Route path="/Programme" element={<Programme />} />
              <Route path="/etudiant" element={<Etudiant />} />
              <Route path="/addetudiant" element={<AddEtudiant />} />
              <Route path="/UpdateUser/:id" element={<UpdateUser />} />
              <Route path="/voir/:id" element={<Voir />} />
              <Route path="/message" element={<Message />} />
              <Route path="/coursArchive" element={<CoursArchive />} />
              <Route path="/coursprogram" element={<CoursProgram />} />
              <Route path="/htmlcss" element={<HtmlCss />} />
              <Route path="/coachview" element={<CoachView />} />
              <Route path="/javascript" element={<Javascript />} />
            </Route>

            {/* Route Etudiant */}
            <Route element={<LayoutEtudiant />}>
              <Route path="/etudiantDashboard" element={<EtudiantDashboard />} />
              <Route path="/DashboardEtud" element={<DashboardEtud />} />
              <Route path="/allcoach" element={<AllCoach />} />
              <Route path="/meslivraisons" element={<MesLivaisons />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/nousrejoindre" element={<NousRejoidre />} />
              <Route path="/programmesetud" element={<ProgrammesEtud />} />
            </Route>
          </Routes>
        </Router>
        <ToastContainer />
      </TaskProvider>
    </div>
  );
}

export default App;
