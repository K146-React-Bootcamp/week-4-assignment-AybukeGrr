import "./App.css";
import TopNavbar from "./components/Navbar/TopNavbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Page404 from "./pages/Page404";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavbar></TopNavbar>
        <Routes>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/features" element={<Features />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>,
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
