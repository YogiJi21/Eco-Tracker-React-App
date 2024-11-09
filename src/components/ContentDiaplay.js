import React, {useRef, useState } from "react";
import "./ContentDiaplay.css";
import saveanimal from "./image/SliderPage/saveanimal.jpg";
import biodiversity from "./image/SliderPage/biodiversity.jpg";
import savewater from "./image/SliderPage/savewater.jpg";
import flood from "./image/SliderPage/floods.jpg";
import drought from "./image/SliderPage/drought.jpg";
import hurricane from "./image/SliderPage/hurricane.jpg";
import wildfire from "./image/SliderPage/wildfire.jpg";
import arctic from "./image/SliderPage/arctic.jpg";

function Sliding() {

    const next = useRef(null);
    const prev = useRef(null);
    const main_contain = useRef(null);
    const [bgindex, setbgindex] = useState(1);
    const [bgurl, setbgurl] = useState(NaN);
    


    
    // set background
const setbkgrnd=()=>{
    
  let newIndex = bgindex + 1;
    let newUrl;

    if(newIndex===1){
      newUrl=saveanimal;
    }
    else if(newIndex===2){
      newUrl=biodiversity;
    }
    else if(newIndex===3){
      newUrl=savewater;
    }
    else if(newIndex===4){
      newUrl=flood;
    }
    else if(newIndex===5){
      newUrl=drought;
    }
    else if(newIndex===6){
      newUrl=hurricane;
    }
    else if(newIndex===7){
      newUrl=wildfire;
    }
    else if(newIndex===8){
      newUrl=arctic;
      newIndex=0;
    }
    

    console.log(newIndex);
    setbgindex(newIndex);
    setbgurl(newUrl);
    main_contain.current.style.background=`url(${bgurl}) no-repeat center fixed`;
    main_contain.current.style.backgroundSize="cover";
  }

  const next_content = () => {
    let items = document.querySelectorAll(".content-items");
    document.querySelector(".content-slider").appendChild(items[0]);
    setbkgrnd();
  };
  const prev_content = () => {
    let items = document.querySelectorAll(".content-items");
    document.querySelector(".content-slider").prepend(items[items.length - 1]);
  };

  return (
    <div  className="main-container">
      <div ref={main_contain} className="content-slider">

        <div className="content-items" style={{ backgroundImage: `url(${saveanimal})` }}>
          <div className="contant">
            <div className="name">Animal Species</div>
            <div className="dec">
              It&#39;s about far more than just the polar bears: Half of all
              animal species in the world&#39;s most biodiverse places, like the
              Amazon rainforest and the Galapagos Islands, are at risk of ...
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${biodiversity})` }}>
          <div className="contant">
            <div className="name">Biodiversity</div>
            <div className="dec">
            Climate change is happening so fast that many plants and animal
              species are struggling to cope. There is clear evidence to show
              that biodiversity is already responding to climate change and will
              continue to do so. Direct ...
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${savewater})` }}>
          <div className="contant">
            <div className="name">Availability of fresh water</div>
            <div className="dec">
            As the climate heats up, rainfall patterns change, evaporation
              increases, glaciers melt and sea levels rise. All these factors
              affect the availability of fresh water. More frequent and severe
              droughts and rising water temperatures are expected to cause ...
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${flood})` }}>
          <div className="contant">
            <div className="name">Floods</div>
            <div className="dec">
            Climate change is expected to lead an increase of precipitation in
              many areas. Increased rainfall over extended periods will mainly
              lead to fluvial (river) flooding, while short, intense cloudbursts
              can cause pluvial floods, where extreme rainfall causes flooding
              without any body of water overflowing.
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${drought})` }}>
          <div className="contant">
            <div className="name">Drought</div>
            <div className="dec">
            Water deficits are fast becoming the new normal. Over the last
              half century, extreme “dry rainfall shocks” – i.e., below-average
              rainfall -- have increased 233% in certain regions. A dry shock
              that is one standard deviation from the norm is normally ...
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${hurricane})` }}>
          <div className="contant">
            <div className="name">Hurricanes Will Become Stronger and More Intense</div>
            <div className="dec">
            Evaporation intensifies as temperatures rise, and so does the
              transfer of heat from the oceans to the air. As the storms travel
              across warm oceans, they pull in more water vapor and heat.
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${wildfire})` }}>
          <div className="contant">
            <div className="name">Longer Wildfire Season</div>
            <div className="dec">
            Although wildfires are a natural occurrence within some forest
              ecosystems, fire seasons are becoming more extreme and widespread,
              even in tropical rainforests where fires are atypical and
              particularly damaging. Hotter, drier weather caused by ...
            </div>
            <button>See More</button>
          </div>
        </div>

        <div className="content-items" style={{ backgroundImage: `url(${arctic})` }}>
          <div className="contant">
            <div className="name">Arctic Is Very Likely to Become Ice-Free</div>
            <div className="dec">
            Ice acts like a protective cover over the Earth and our oceans.
              These bright white spots reflect excess heat back into space and
              keep the planet cooler. In theory, the Arctic remains colder than
              the equator because more of the heat from the sun is reflected off
              the ice, back into space.
            </div>
            <button>See More</button>
          </div>
        </div>

        
      </div>

      <div className="arrows">
        <button onClick={prev_content} ref={prev}>
          {"<"}
        </button>
        <button onClick={next_content} ref={next}>
          {">"}
        </button>
      </div>

    </div>
  );
}

export default Sliding;
