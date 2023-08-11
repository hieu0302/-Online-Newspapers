import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home/home";
import NavBar from "./Component/navBar/navBar";
import Source from "./Page/srcSearch/src";
import SearchNews from "./Page/SearchPage/searchPage";
import Sports from "./Page/Sport/sport";
import Technology from "./Page/technology/technology";
import Business from "./Page/Business/Business";
import Entertainment from "./Page/Entertaiment/entertaiment";
import footerMain from "./Component/footer/footer";
import FooterMain from "./Component/footer/footer";
import Recently from "./Page/recently/recently";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soure" element={<Source />} />
          <Route path="/search" element={<SearchNews />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/recently" element={<Recently />} />
        </Routes>
        <div className="footer">
          <FooterMain />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
