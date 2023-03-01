import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Homepage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
