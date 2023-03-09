import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/About"} element={<About />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
