import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import About from "./screens/About";
import Contact from "./screens/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
