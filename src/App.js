// import "./App.css";
import Acceuil from "./pages/acceuil/Acceuil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import Login from "./pages/auth/Login";
// import { AuthContextProvider } from "./context/AuthContext";
// import Sidebar from "./pages/dashbboard-etudiants/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <AuthContextProvider> */}


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/login" element = {<Login />}  />         
             {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/sidebar" element={<Sidebar />} /> */}
          </Routes>
        </BrowserRouter>


      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;

