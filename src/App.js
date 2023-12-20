import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WebHeader from "./Components/WebHeader/WebHeader";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import ServicesPage from "./Components/Services/ServicesPage";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import MainHomePage from "./Components/HomePage/MainHomePage";
import RequestServicePage from "./Components/RequestService/RequestServicePage";

function App() {
  return (
    <div
      style={{
        //hello
        backgroundColor: "#2f2a39",
        minHeight: "100px",
      }}
    >
      <WebHeader />
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<ServicesList/>}/>
        <Route path="/SignUp" element={<Signup />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
