import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WebHeader from "./Components/WebHeader/WebHeader";
import Login from "./Components/sign-in/Login";
import Signup from "./Components/sign-up/Signup";
import ServicesPage from "./Components/Services/ServicesPage";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import MainHomePage from "./Components/HomePage/MainHomePage";
import RequestServicePage from "./Components/RequestService/RequestServicePage";
import JobPost from "./Components/JobPost/JobPost";
import JobList from "./Components/JobPost/JobList";
import TTeam from "./Components/Team/TTeam";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import WorkerSignUp from "./Components/sign-up/WorkerSignUp/WorkerSignUp";
import ClientSignUp from "./Components/sign-up/ClientSignUp/ClientSignUp";
import DataTest from "./Components/ViewProfile/DataTest";
//omk
function App() {
  return (
    <div className="app-wrapper"
      style={{
        minHeight: "100px",
      }}
    >

      <WebHeader />
      <Routes>
        <Route path="/" element={<MainHomePage />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/Login" element={<DataTest />} />
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
        <Route path="/WorkerSignUp" element={<WorkerSignUp />} />
        <Route path="/ClientSignUp" element={<ClientSignUp />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />
        <Route
          path="/RequestServicePage"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <RequestServicePage />
            </div>
          }
        />
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/how_it_works" element={<HowItWorks/>}></Route>

      </Routes>
<span></span>
      <Footer />
    </div>
  );
}

export default App;
