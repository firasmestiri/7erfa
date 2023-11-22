import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WebHeader from "./Components/WebHeader/WebHeader";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import MainHomePage from "./Components/HomePage/MainHomePage";

function App() {
  return (
    <div
      style={{
        minHeight: "100px",
      }}
    >
      <WebHeader />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<MainHomePage />} />
        <Route
          path="/SignUp"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Signup />
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
