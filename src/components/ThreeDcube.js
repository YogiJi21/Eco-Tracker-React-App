import React from 'react'
import "./ThreeDcube.css"
import img1 from "./image/SliderPage/img1.jpg";
import img2 from "./image/SliderPage/img2.jpg";
import img3 from "./image/SliderPage/img3.jpg";
import img4 from "./image/SliderPage/img4.jpg";
function ThreeDcube() {
  return (
    <div className="ThreeDbody">

<div className="ThreeDcontainer">
   
        <div className="ThreeDbox">

        <div className="ThreeDcard" style={{'--i': 1}}>
            <div className="imgbox"><img src={img1} alt="" /></div>
            <h2>Yogi Singh <br /><span>Creator</span></h2>
        </div>

        <div className="ThreeDcard" style={{'--i': 2}}>
            <div className="imgbox"><img src={img2} alt="" /></div>
            <h2>Yogi Singh <br /><span>Creator</span></h2>
        </div>

        <div className="ThreeDcard" style={{'--i': 3}}>
            <div className="imgbox"><img src={img3} alt="" /></div>
            <h2>Yogi Singh <br /><span>Creator</span></h2>
        </div>

        <div className="ThreeDcard" style={{'--i': 4}}>
            <div className="imgbox"><img src={img4} alt="" /></div>
            <h2>Yogi Singh <br /><span>Creator</span></h2>
        </div>

        </div>

 
        </div>
    </div>
  )
}

export default ThreeDcube;