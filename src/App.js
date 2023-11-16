import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WebHeader from "./Components/WebHeader";
import ServicesList from "./Components/ServicesList";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#2f2a39",
        minHeight: "100px",
      }}
    >
      <WebHeader />
      {/* <ServicesList /> */}
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
