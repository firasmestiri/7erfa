import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WebHeader from "./Components/WebHeader";
import ServicesItems from "./Components/ServicesItems";

function App() {
  return (
    <div style={{ backgroundColor: "#2f2a39", minHeight: "100vh" }}>
      <WebHeader />
      <h3 style={{ color: "#e4ca79", margin: "20px" }}>
        The easy, reliable way to take care of your home.
      </h3>{" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ServicesItems />
        <ServicesItems />
        <ServicesItems />
      </div>
      //aaa
    </div>
  );
}

export default App;
