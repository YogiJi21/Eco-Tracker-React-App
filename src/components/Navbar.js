import React, { useState } from "react";
import "./Navbar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Navbar(props) {
  const [navcolor, setnavcolor] = useState('rgba(0,0,0,0)');
  const [blur, setblur] = useState(1);
  const [extender, setextender] = useState(10);
  const [mobileview, setmobileview] = useState(0);
  const [sub_option, setsub_option] = useState(0);
  const changeBackground=()=>{
    // console.log(window.scrollY);
    if(window.scrollY>=700){
      setnavcolor('rgba(0,0,0,0)');
      setblur(8);
    }else{
      setnavcolor('rgba(0,0,0,0)');
      setblur(1);
    }
  }

  const display_option=(num)=>{
    if(sub_option===num){
      setsub_option(0);
    }else{
      setsub_option(num);
    }
  }

  const changeview=()=>{
    let screenWidth = window.innerWidth;
    
    // console.log(window.scrollY);
    if(mobileview===0){
      setmobileview(1);
      setextender(screenWidth-50);
    }else{
      setsub_option(0);
      setmobileview(0);
      setextender(10);
    }

// Output the screen width to the console
// console.log("Current screen width: " + screenWidth + "px");
  }

  window.addEventListener('scroll',changeBackground);
  return (
    <div className="changenav">
        <i onClick={changeview} style={{left:`${extender}px`}} class="fa fa-bars" aria-hidden="true"></i>

    
    <nav className={`${mobileview===1 ?'navi_baar':'' }`} style={{backgroundColor:`${navcolor}`,backdropFilter:`blur(${blur}px)`}}>
      <div className="extend">
        {/* <i onClick={changeview} style={{left:`${extender}px`}} class="fa fa-bars" aria-hidden="true"></i> */}
        </div>
      <div className="logo"><span style={{color:'#20c997'}}>Eco</span>&nbsp;Track</div>
      <div className="option">
        <Link className="opti" to="/homepage">
          {props.opt1}
        </Link>
        <div onClick={()=>display_option(1)} className="dropdown">
          <a className="opti " href="#" role="button" aria-expanded="false">Categories</a>
          <div className={`dmenu ${sub_option===1?'subpart-1':''}`}>
            <a className="dropdown-item" href="#">Travel</a>
            <a className="dropdown-item" href="#">Home</a>
            <a className="dropdown-item" href="#">Food</a>
            <a className="dropdown-item" href="#">Shoping</a>
            <a className="dropdown-item" href="#">Your Footprint</a>
          </div>
        </div>
        <div onClick={()=>display_option(2)} className="dropdown">
          <a className="opti" href="#" role="button" aria-expanded="false">What We Do</a>
          <div className={`dmenu1 ${sub_option===2?'subpart-2':''}`}>
            <div className="r1">
            <Link className="hud" to="/">Our Priorities</Link>
            <Link  to="/takle">Tackle Climate change</Link>
            <Link to="/protocean">Protect Ocean, Land & Fresh Water</Link>
            <Link to="/food">Provide Food & Water Sustainably</Link>
            </div>
            <div className="r2">
            <Link className="hud" href="#">Our Insights</Link>
            <Link to="/purse">Perspectives</Link>
            <Link to="/tools">Data & Tools</Link>
            <Link to="#">Other Services</Link>
            </div>
          </div>
        </div>
        {/* <Link className="opti" to="/problems">
          {props.opt2}
        </Link> */}
        {/* <Link className="opti" to="/">
          {props.opt3}
        </Link> */}
        <Link className="opti" to="/">
          {props.opt4}
        </Link>
        <Link className="opti oggy" to="/">
          {props.lname}
        </Link>
      </div>
    </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  opt1: PropTypes.string.isRequired,
  opt2: PropTypes.string.isRequired,
  opt3: PropTypes.string.isRequired,
  opt4: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Title",
  opt1: "Option1",
  opt2: "Option2",
  opt3: "Option3",
  opt4: "Option4",
};
export default Navbar;
