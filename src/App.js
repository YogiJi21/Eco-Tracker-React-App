import "./App.css";
import Navbar from "./components/Navbar";
import Selection from "./components/Selection";
// import vid from "./iou.mp4"
import Tesz from "./Tesz";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SlidingPage from "./components/SlidingPage";
import Footer from "./components/Footer";
import Center from "./components/Center";
import Todoo from "./components/Todoo";
import Login from "./components/Login";
import ContentDiaplay from "./components/ContentDiaplay";
import ThreeDcube from "./components/ThreeDcube";
import TakeClimate from "./components/TakeClimate";
import ProtOcean from "./components/ProtOcean";
import Food from "./components/Food";
import Perspactive from "./components/Perspactive";
import Tools from "./components/Tools";

function App() {
  const [mode, setmode] = useState("rgba(0,0,0,0)");
  const [fname, setfname] = useState('E');
  const modes = () => {
    if (mode === "rgba(0,0,0,.1)") {
      setmode("rgba(0,0,0,.9)");
    } else {
      setmode("rgba(0,0,0,.1)");
    }
  };
  const updateFname = (newName) => {
    setfname(newName);
  };
  return (
    <div className="back">
      {/* // <ThreeDcube/> */}
    <Router>
        {/* <video src={vid} autoPlay loop muted/> */}
        <Navbar
          mode={mode}
          title="Eco Track"
          opt1="Home"
          opt2="Problem"
          opt3="Carbon Footprint"
          opt4="About Us"
          modes={modes}
          lname={fname}
          />
          
          <Routes>
          <Route path="/homepage" element={<SlidingPage />} />
          <Route path="/takle" element={<TakeClimate/>} />
          <Route path="/protocean" element={<ProtOcean/>} />
          <Route path="/food" element={<Food/>} />
          <Route path="/purse" element={<Perspactive/>} />
          <Route path="/tools" element={<Tools/>} />
        </Routes>
        
        <Center />
        <Selection />

        <div style={{ overflow: "hidden", position: "relative", width:"100%",height:'100vh'}}> <ContentDiaplay /></div>
        
        {/* <div style={{ overflowX: "hidden" }}>  <Todoo /> </div> */}
        <Login
        naam={updateFname}
        />
        <Footer />
      </Router>
          </div>
  );
}
export default App;
