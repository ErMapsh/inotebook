import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

export default function App() {
  return (
    <>
      <NoteState>{/* notestate is context */}
        <Router>
          <Navbar />
          <Alert />
          <div className="container my-5">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

