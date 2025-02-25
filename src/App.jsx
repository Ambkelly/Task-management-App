import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from "./signIn";
import Home from "./Container";
import SignUp from "./signUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />        
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} /> {/* Corrected the path for SignUp */}
      </Routes>
    </Router>
  );
}

export default App;