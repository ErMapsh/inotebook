import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (

    <>
      <Router>
        <Navbar id={"iNotebook"} />
        <Alert />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
