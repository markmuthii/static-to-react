import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:uuid" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
