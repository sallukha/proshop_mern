
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import About from "./Pages/About";
import LoginForm from "./Pages/LoginForm";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import Contact from "./Pages/Contact";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign_up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


