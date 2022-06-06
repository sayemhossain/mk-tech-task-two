import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
