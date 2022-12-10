import "./App.css";
import Header from "./components/Header";
import SideNavbar from "./components/side-navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feeding";
import Walk from "./pages/Walks";
import Medical from "./pages/medical/Medical";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <SideNavbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feeding" element={<Feed />} />
          <Route path="/walks" element={<Walk />} />
          <Route path="/medical" element={<Medical />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
