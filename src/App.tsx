import { Route, Routes } from "react-router-dom";
import Home from "./pages/Landing";
import Browse from "./pages/Browse";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/browse" Component={Browse}></Route>
    </Routes>
  );
}

export default App;
