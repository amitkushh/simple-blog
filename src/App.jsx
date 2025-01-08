import "./App.css";
import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Features from "./pages/Features";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/features" element={<Features />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
    </>
  );
}

export default App;
