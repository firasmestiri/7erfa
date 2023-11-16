import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WebHeader from "./Components/WebHeader";
import ServicesList from "./Components/ServicesList";
import Login from "./Components/Login";

function App() {
  return (
    <body style={{ backgroundColor: "#2f2a39", minHeight: "100vh" }}>
      <div>
        <WebHeader />
        {/* <ServicesList /> */}
        <Login />
      </div>
    </body>
  );
}

export default App;
