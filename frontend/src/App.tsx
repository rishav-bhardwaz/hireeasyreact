import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landingpages } from "./pages/Landingpages";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ApplicationDb from "./pages/ApplicationDb";
import Postjob from "./pages/Postjob";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpages />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/responses" element={<ApplicationDb />} />
        <Route path="/admin/postjob" element={<Postjob />} />
      </Routes>
    </Router>
  );
}

export default App;
