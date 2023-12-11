import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WebHeader from "./Components/WebHeader/WebHeader";
import ServicesList from "./Components/Services/ServicesList";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import JobPost from "./Components/JobPost/JobPost";
import JobList from "./Components/JobPost/JobList";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";

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
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<ServicesList />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/JobPost" element={<JobPost />} />
        <Route path="/JobList" element={<JobList />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
