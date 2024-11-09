import React, { useEffect, useRef } from "react";
import "./SlidingPage.css";

import img1 from "./image/SliderPage/img1.jpg";
import img3 from "./image/SliderPage/img3.jpg";
import img2 from "./image/SliderPage/img2.jpg";
import img4 from "./image/SliderPage/img4.jpg";
function SlidingPage() {
  useEffect(() => {
    sab = document.querySelectorAll(".common");
    if (once === 1) {
      // Begins
      start();
      once = 0;
    }
  }, []);
  // variables
  const list = useRef(null);
  const topic = useRef(null);
  const des = useRef(null);

  // to make the function run in useeffect only one because use runs 2 times due to tsrict mode
  let once = 1;

  let counter = 0;
  let cnt = 0;
  let sab;
  const data = [
    {
      topic: "ANIMAL",
      desciption:
        "Carbon emissions are wreaking havoc on animal species in a multitude of ways. Rising temperatures disrupt ecosystems, melt glaciers and permafrost, and acidify oceans, all of which can lead to habitat loss, food shortages, and mass die-offs.To prevent this catastrophe, we must drastically reduce our carbon footprint. This means transitioning to renewable energy sources like solar and wind power, improving energy efficiency, and protecting forests that absorb carbon dioxide.",
    },
    {
      topic: "FOREST",
      desciption:
        "Protecting forests is key to battling carbon emissions. Preventing deforestation requires stricter regulations, economic incentives for sustainable practices, and empowering local communities who depend on the forests. Restoration involves replanting trees in degraded areas, adopting agroforestry techniques, and promoting the use of sustainably harvested wood products. By conserving these natural carbon sinks, we can lock away emissions and combat climate change.",
    },
    {
      topic: "MARINE",
      desciption:
        "Carbon emissions are silently suffocating our oceans. As they rise, they dissolve in the water, making it more acidic. This process, known as ocean acidification, is wreaking havoc on marine life, particularly shellfish and coral reefs. These organisms build their shells and skeletons from calcium carbonate, which becomes increasingly difficult in acidic waters.The consequences are dire: coral reefs, the vibrant underwater rainforests, are bleaching and dying, while shellfish struggle to grow and reproduce.",
    },
    {
      topic: "CLIMATE",
      desciption:
        "The warming up of our planet due to excess use of fossil fuel is disrupting our climate, leading to more extreme weather events like heat waves, droughts, floods, and stronger storms.Changes in rainfall patterns are a major concern. In some places, it's raining more than ever, causing floods and landslides. In other places, it's not raining enough, leading to droughts and wildfires. These changes are harming ecosystems, displacing people, and threatening food security.",
    },
  ];

  //printing the description and topic
  const printData = (vl) => {
    cnt += vl;
    // console.log(cnt);
    if (cnt > 3) {
      cnt = 0;
    } else if (cnt < 0) {
      cnt = 3;
    }

    // element.style.border='2px solid red';
    sab.forEach((element) => {
      element.animate(
        [
          // key frames
          { transform: "translateY(50px)", filter: "blur(20px)", opacity: 0 },

          { transform: "translateY(0px)", filter: "blur(0px)", opacity: 1 },
        ],
        {
          // sync options
          duration: 1000,
          iterations: 1,
        }
      );
    });
    des.current.textContent = data[cnt].desciption;
    topic.current.textContent = data[cnt].topic;
  };

  // disabling button feature
  function waitChange() {
    document.getElementById("next").disabled = true;
    document.getElementById("prev").disabled = true;
    setTimeout(function () {
      document.getElementById("next").disabled = false;
      document.getElementById("prev").disabled = false;
    }, 2000);
  }

  // auto sliding feature
  const start = () => {
    setTimeout(() => {
      // Again
      // console.log(counter);
      agey(1);
      start();
      // Every 10 sec
    }, 10000);
  };

  // click to slide iamge
  const agey = (val) => {
    // console.log(des);
    // console.log(sab);
    waitChange();
    if (val === 1) {
      printData(1);
      if (counter <= -300) {
        counter = 0;
        list.current.style.marginLeft = counter + "%";
      } else {
        counter -= 100;
        list.current.style.marginLeft = counter + "%";
      }
    } else {
      printData(-1);
      if (counter >= 0) {
        counter = -300;
        list.current.style.marginLeft = counter + "%";
      } else {
        counter += 100;
        list.current.style.marginLeft = counter + "%";
      }
    }
  };
  // console.log(list.current.current);
  return (
    <div className="slider">
      <div ref={list} className="list">
        <div className="item">
          <img src={img1} alt="" />
        </div>
        <div className="item">
          <img src={img2} alt="" />
        </div>
        <div className="item">
          <img src={img3} alt="" />
        </div>
        <div className="item">
          <img src={img4} alt="" />
        </div>
      </div>
      <main>
        <div className="author common">EARTH US</div>
        <div className="title common">WHAT TO DO</div>
        <div ref={topic} className="topic common">
        ANIMAL
        </div>
        <div ref={des} className="des common">
        Carbon emissions are wreaking havoc on animal species in a multitude of ways. Rising temperatures disrupt ecosystems, melt glaciers and permafrost, and acidify oceans, all of which can lead to habitat loss, food shortages, and mass die-offs.To prevent this catastrophe, we must drastically reduce our carbon footprint. This means transitioning to renewable energy sources like solar and wind power, improving energy efficiency, and protecting forests that absorb carbon dioxide.
          {/* <!-- something will be written by js --> */}
        </div>
        <div className="buttons common">
          <button>SEE MORE</button>
          <button>JOIN US</button>
        </div>
      </main>
      <div className="aerrows">
        <button onClick={() => agey(0)} id="prev">
          {"<"}
        </button>
        <button onClick={() => agey(1)} id="next">
          {">"}
        </button>
      </div>
      <div className="social-icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-twitter"></i>
        <i className="fa fa-linkedin"></i>
        <i className="fa fa-google-plus" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default SlidingPage;
