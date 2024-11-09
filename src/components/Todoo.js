import React, { useEffect, useRef } from 'react'
import biodiversity from './image/SliderPage/biodiversity.jpg'
import savewater from './image/SliderPage/savewater.jpg'
import saveanimal from './image/SliderPage/saveanimal.jpg'
import flood from './image/SliderPage/floods.jpg'
import drought from './image/SliderPage/drought.jpg'
import hurricane from './image/SliderPage/hurricane.jpg'
import wildfire from './image/SliderPage/wildfire.jpg'
import arctic from './image/SliderPage/arctic.jpg'
import './Todoo.css'
function Todoo() {
    let track;
    useEffect(() => {
       track = document.getElementById("image-track");
      //  console.log(topic.current);
    }, [])
    

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image1")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

// states for content
const topic = useRef(null);
const content = useRef(null);
const fill_content=(num)=>{
  // console.log(topic.current);
  if(num==0){
    topic.current.innerText=effect_content[num].topic;
    content.current.innerText=effect_content[num].content;
  }
  else if(num==1){
    topic.current.innerText=effect_content[num].topic;
    content.current.innerText=effect_content[num].content;
  }
  else if(num==2){
    topic.current.innerText=effect_content[num].topic;
    content.current.innerText=effect_content[num].content;
  }
  else if(num==3){
    topic.current.innerText=effect_content[num].topic;
    content.current.innerText=effect_content[num].content;
  }
  else if(num==4){
    topic.current.innerText=effect_content[num].topic;
    content.current.innerText=effect_content[num].content;
  }
  else if(num==5){
    topic.current.innerText=effect_content[num].topic;
    content.current.innerText=effect_content[num].content;
  }
  else if(num==6){
    topic.current.innerText=effect_content[num].topic;
    content.current.innerText=effect_content[num].content;
  }
  else if(num==7){
    topic.current.innerText=effect_content[num].topic;
    content.current.innerText=effect_content[num].content;
  }
}

// content 
const effect_content=[
  {
    topic:"Biodiversity",
    content:"Climate change is happening so fast that many plants and animal species are struggling to cope. There is clear evidence to show that biodiversity is already responding to climate change and will continue to do so. Direct impacts include changes in phenology (the behaviour and lifecycles of animal and plant species), species abundance and distribution, community composition, habitat structure and ecosystem processes. \n\n Climate change is also leading to indirect impacts on biodiversity through changes in the use of land and other resources. These may be more damaging than the direct impacts due to their scale, scope and speed. The indirect impacts include: habitat fragmentation and loss; over-exploitation; pollution of air, water and soil; and the spread of invasive species. They will further reduce the resilience of ecosystems to climate change and their capacity to deliver essential services; such as climate regulation, food, clean air and water, and the control of floods or erosion."
  },
  
  {
    topic:"Availability of fresh water",
    content:"As the climate heats up, rainfall patterns change, evaporation increases, glaciers melt and sea levels rise. All these factors affect the availability of fresh water.    More frequent and severe droughts and rising water temperatures are expected to cause a decrease in water quality. Such conditions encourage the growth of toxic algae and bacteria, which will worsen the problem of water scarcity that has been largely caused by human activity. \n\n The increase of cloudburst events (sudden extreme rainfall) is also likely to influence the quality and quantity of fresh water available, as storm water can cause uncleaned sewage to enter surface water. \n\n India’s rivers generally originate in mountainous areas, and Most of India’s fresh water comes from the Himalyan region. However, changes in snow and glacier dynamics, and patterns of rainfall may lead to temporary water shortages across India. Changes to river flows due to drought may also affect inland shipping and the production of hydroelectric power."
  },
  
  {
    topic:"Animal Species",
    content:"It’s about far more than just the polar bears: Half of all animal species in the world’s most biodiverse places, like the Amazon rainforest and the Galapagos Islands, are at risk of extinction from climate change. And climate change is threatening species that are already suffering from the biodiversity crisis, which is driven primarily by changes in land and ocean use (like converting wild places to farmland) and direct exploitation of species (like overfishing and wildlife trade).\n\n With species already in rough shape—more than 500,000 species have insufficient habitat for long-term survival—unchecked climate change is poised to push millions over the edge."
  },
  
  {
    topic:"Floods",
    content:"Climate change is expected to lead an increase of precipitation in many areas. Increased rainfall over extended periods will mainly lead to fluvial (river) flooding, while short, intense cloudbursts can cause pluvial floods, where extreme rainfall causes flooding without any body of water overflowing.  \n\n  River flooding is a common natural disaster in India, which has, along with storms, resulted in fatalities, affected millions of people and incurred massive economic losses in the last three decades. Climate change is likely to increase the frequency of flooding across India in the coming years.\n\n    Heavy rainstorms are projected to become more common and more intense due to higher temperatures, with flash floods expected to become more frequent across India.    In some regions, certain risks such as early spring floods could decrease in the short term with less winter snowfall, but the increased risk of flash flooding in mountain areas overloading the river system may offset those effects in the medium term."
  },
  
  {
    topic:"Drought",
    content:"Water deficits are fast becoming the new normal. Over the last half century, extreme “dry rainfall shocks” – i.e., below-average rainfall -- have increased 233% in certain regions. A dry shock that is one standard deviation from the norm is normally a rare event that could be expected to include 15 of the driest episodes in a century. A dry shock that is two standard deviations from the norm is even rarer and includes the driest 2.5 years in a century. Such dry episodes should be intermittent, but they are occurring more frequently. At the same time, areas with above-average rainfall are in decline.  \n\n   Our empirical observations are consistent with other scientific projections that by the late 21st century the land area and population facing extreme droughts could more than double globally. While projections of future rainfall are highly uncertain, climate change models are unanimous that rainfall will become more erratic and extreme with rising temperatures."
  },
  
  {
    topic:"Hurricanes Will Become Stronger and More Intense",
    content:"Evaporation intensifies as temperatures rise, and so does the transfer of heat from the oceans to the air. As the storms travel across warm oceans, they pull in more water vapor and heat. \n\n Scientists project that hurricane-associated storm intensity and rainfall rates will increase as the climate continues to warm. Moreover, as sea level continues to rise, the severity of storm surges will escalate, exacerbating flooding caused by heavy rainfall, leading to heightened damage."
  },
  
  {
    topic:"Longer Wildfire Season",
    content:"Although wildfires are a natural occurrence within some forest ecosystems, fire seasons are becoming more extreme and widespread, even in tropical rainforests where fires are atypical and particularly damaging. Hotter, drier weather caused by climate change and poor land management create conditions favorable for more frequent, larger and higher-intensity wildfires.\n\nGlobally, fire weather seasons have lengthened. Drought remains the dominant driver of fire emissions, but recently there has been increased fire activity in some tropical and temperate regions due to warmer temperatures that increase vegetation flammability. The northern boreal zone (Earth's northernmost forests) near the Arctic is also experiencing larger and more frequent fires, and this may increase under a warmer climate."
  },
  
  {
    topic:"Arctic Is Very Likely to Become Ice-Free",
    content:"Ice acts like a protective cover over the Earth and our oceans. These bright white spots reflect excess heat back into space and keep the planet cooler. In theory, the Arctic remains colder than the equator because more of the heat from the sun is reflected off the ice, back into space. \n\n  Since the early 1900s, many glaciers around the world have been rapidly melting. Human activities are at the root of this phenomenon. Specifically, since the industrial revolution, carbon dioxide and other greenhouse gas emissions have raised temperatures, even higher in the poles, and as a result, glaciers are rapidly melting, calving off into the sea and retreating on land.\n\n Sea ice cover in the Arctic Ocean is expected to continue decreasing, and the Arctic Ocean will very likely become essentially ice-free in late summer if current projections hold. This change is expected to occur before mid-century."
  },
]

  return (
    <div className='iskabase'>
      <h1>Effects of Climate Change</h1>
    <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
      
      <div className="image">
    <img className='image1' src={biodiversity} draggable="false" />

    <div onClick={()=>fill_content(0)} className="dupli">
      <button>Biodiversity</button>
    </div>

      </div>
      
      <div className="image">
    <img className='image1' src={savewater} draggable="false" />

    <div onClick={()=>fill_content(1)} className="dupli">
      <button>Fresh Water</button>
    </div>

      </div>
      
      <div className="image">
    <img className='image1' src={saveanimal} draggable="false" />

    <div onClick={()=>fill_content(2)} className="dupli">
      <button>Animal Species</button>
    </div>

      </div>
      
      <div className="image">
    <img className='image1' src={flood} draggable="false" />

    <div onClick={()=>fill_content(3)} className="dupli">
      <button>Floods</button>
    </div>

      </div>
      
      <div className="image">
    <img className='image1' src={drought} draggable="false" />

    <div onClick={()=>fill_content(4)} className="dupli">
      <button>Drought</button>
    </div>

      </div>

      <div className="image">
    <img className='image1' src={hurricane} draggable="false" />

    <div onClick={()=>fill_content(5)} className="dupli">
      <button>Hurricanes</button>
    </div>

      </div>

      <div className="image">
    <img className='image1' src={wildfire} draggable="false" />

    <div onClick={()=>fill_content(6)} className="dupli">
      <button>Wildfire</button>
    </div>

      </div>

      <div className="image">
    <img className='image1' src={arctic} draggable="false" />

    <div onClick={()=>fill_content(7)} className="dupli">
      <button>Arctic</button>
    </div>

      </div>

  </div>
  <div className="teesra">
<h3 ref={topic}>Earth Will Continue to Warm and the Effects Will Be Profound </h3>
<p ref={content}>Global climate change is not a future problem. Changes to Earth’s climate driven by increased human emissions of heat-trapping greenhouse gases are already having widespread effects on the environment: glaciers and ice sheets are shrinking, river and lake ice is breaking up earlier, plant and animal geographic ranges are shifting, and plants and trees are blooming sooner. <br /><br />
Effects that scientists had long predicted would result from global climate change are now occurring, such as sea ice loss, accelerated sea level rise, and longer, more intense heat waves.</p>
  </div>
  
{/*   
  <a id="source-link" className="meta-link" href="https://camillemormal.com" target="_blank">
    <i className="fa-solid fa-link"></i>
    <span>Source</span>
  </a>
  
  <a id="yt-link" className="meta-link" href="https://youtu.be/PkADl0HubMY" target="_blank">
    <i className="fa-brands fa-youtube"></i>
    <span>7 min tutorial</span>
  </a> */}
    </div>
  )
}

export default Todoo