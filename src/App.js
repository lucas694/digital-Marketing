import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Blog from "./Components/Blog/Blog";
import BlogPost from "./Components/Blog/BlogPost";
import HeaderMobile from "./Components/HeaderMobile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <HeaderMobile />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Services"} element={<Services />} />
          <Route path={"/Blog"} element={<Blog />} />
          <Route path={"/BlogPost"} element={<BlogPost />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
