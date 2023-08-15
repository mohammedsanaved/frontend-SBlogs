import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import About from "./screens/About";
import Contact from "./screens/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/index";
import Dashboard from "./screens/user/Dashboard";

function App() {
  return (
    <UserProvider>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
