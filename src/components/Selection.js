import React, { useEffect, useRef, useState } from "react";
import travel_icon from './icons/travel-grey.svg'
import start_icon from './icons/get_started-grey.svg'
import home_icon from './icons/home-grey.svg'
import food_icon from './icons/food-green.svg'
import shopping_icon from './icons/shopping-grey.svg'
import yourfootprint_icon from './icons/footprint-grey.svg'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../App.css"
function Selection() {
  const [tab_index, settab_index] = useState(1);
  const [tabsize, settabsize] = useState(105);

  // Global variables
  // for( let a=1;a<=5;a++){console.log(a);}
  // for started-tab
  const per_person_co2_india=1.96;
  const avg_household_co2_india=(per_person_co2_india*4.4).toFixed(2);
  



  // states for content display
  const [my_household_footprint, setmy_household_footprint] = useState(0);
  const [my_household_percentage, setmy_household_percentage] = useState(0);
const [travel_footprint, settravel_footprint] = useState(0);
const [travel_percentage, settravel_percentage] = useState(0);
const [home_footprint, sethome_footprint] = useState(0);
const [food_footprint, setfood_footprint] = useState(0);
const [shopping_footprint, setshopping_footprint] = useState(0);
const [total_footprint, settotal_footprint] = useState(0);
// console.log('mai total hoon : '+total_footprint);


// barChart data 
  const data = [
    {name:'Household',sectors:my_household_footprint},
    {name:'Travel',sectors:travel_footprint},
    {name:'Home',sectors:home_footprint},
    {name:'Food',sectors:food_footprint},
    {name:'Goods',sectors:shopping_footprint},
    {name:'Services',sectors:shopping_footprint},
  ];


  // select tab
  const activate=(num)=>{
    settab_index(num);
    if(num===3){settabsize(165)}
    else if(num===4){settabsize(205)}
    else if(num===5){settabsize(112)}
    else if(num===6){settabsize(125)}
    else if(num===2){settabsize(130);}
    else{settabsize(105)}
  }

  // initilize slider
  const slider_initializer=()=>{
    
    started_slider1.current.value=0;
    started_slider2.current.value=0;
    home_slider1.current.value=0;
    home_slider2.current.value=0;
    food_slider1.current.value=0;
    food_slider2.current.value=0;
    food_slider3.current.value=0;
    food_slider4.current.value=0;
    food_slider5.current.value=0;
    shop_slider1.current.value=0;
    shop_slider2.current.value=0;
  }

  useEffect(() => {
    slider_initializer();
    // console.log(consumtion_unit.current.value);
  }, [])
  
  // home_tab ref's
const home_slider1 = useRef(null);
const home_slider2 = useRef(null);
const home_label_elecricity= useRef(null);
const home_label_naturalgas= useRef(null);
const home_label_cookingoil= useRef(null);
const home_label_livingspace= useRef(null);
const home_label1 = useRef(null);
const home_label2 = useRef(null);
const home_electricity = useRef(null);
const home_naturalgas = useRef(null);
const home_cookingoil = useRef(null);
const home_livingspace = useRef(null);
  
  // shopping_tab ref's
const shop_slider1 = useRef(null);
const shop_slider2 = useRef(null);
const shop_label1 = useRef(null);
const shop_label2 = useRef(null);
  
  // food_tab ref's
const food_slider1 = useRef(null);
const food_slider2 = useRef(null);
const food_slider3 = useRef(null);
const food_slider4 = useRef(null);
const food_slider5 = useRef(null);
const food_label1 = useRef(null);
const food_label2 = useRef(null);
const food_label3 = useRef(null);
const food_label4 = useRef(null);
const food_label5 = useRef(null);
  
  // tarvel_tab ref's
  const fuel_type = useRef(null);
  const consumtion_unit = useRef(null);
  const my_vehicle_km_per_year = useRef(null);
  const my_bus_km_per_year = useRef(null);
  const my_train_km_per_year = useRef(null);
  const my_metro_km_per_year = useRef(null);
  const my_airT_km_per_year = useRef(null);
  const vehicle_label = useRef(null);
  const bus_label = useRef(null);
  const train_label = useRef(null);
  const metro_label = useRef(null);
  const air_label = useRef(null);

  // travel module
  /*
  A 2019 survey by the Society of Indian Automobile Manufacturers (SIAM) found that the average annual car travel per household in India was around 12,000 km, which translates to roughly 3,000 km per person assuming a household size of 4

  A 2023 study by the Centre for Science and Environment (CSE) based on passenger origin-destination data suggests an average travel distance of 380 km per person per year.

  A 2017 study by the International Energy Agency (IEA) estimated average annual bus travel per person in India to be around 400 km.
A 2019 survey by the Society of Indian Automobile Manufacturers (SIAM) found that the average annual bus travel per household in India was around 3,000 km, which translates to roughly 750 km per person assuming a household size of 4.

the average annual air travel distance per person in India likely falls between 500 km and 1000 km. Remember, this is just an average, and individual travel patterns will vary significantly
  */ 
 const avg_car_travel_footprint = 3000 * 0.1401;
 const avg_bus_travel_footprint = 750 * 0.105;
 const avg_train_travel_footprint = 380 * 0.07;
 const avg_metro_travel_footprint = 150 * 0.035;
 const avg_air_travel_footprint = 750 * 0.115;
 const avg_travel_footprint = (avg_car_travel_footprint + avg_bus_travel_footprint + avg_train_travel_footprint + avg_metro_travel_footprint + avg_air_travel_footprint) / 1000;

  let car_travel=0;
  let bus_travel=0;
  let train_travel=0;
  let metro_travel=0;
  let air_travel=0;
  let my_total_travel=0;
  // function
  const calTravel=(num)=>{
     
  const avg_petrol_vehicle_co2_footprint_per_km=0.1314;  
  const avg_diesel_vehicle_co2_footprint_per_km=0.1488;  
  const avg_bus_transport_co2_footprint_per_km=0.105;  
  const avg_train_transport_co2_footprint_per_km=0.07;  
  const avg_metro_transport_co2_footprint_per_km=0.035;  
  const avg_air_transport_co2_footprint_per_km=0.115;  


  // for vehicle 
  const vehicle_footprint=()=>{
    /* for travel-tab
   burning 1 liter of petrol typically releases around 2.3 kilograms (kg) of CO2.
   India: As of 2020-21, the Bureau of Energy Efficiency (BEE) reported an average 17.5 km/L for petrol cars in India
   India: As of 2020-21, the Bureau of Energy Efficiency (BEE) reported an average 18 km/L for diesel cars in India
   CO2 emissions per kilometer = (CO2 emission per liter of petrol or diesel) / (fuel efficiency)
   CO2 emissions per kilometer(petrol) = (2.3 kg/l) / (17.5 km/l)
   CO2 emissions per kilometer(petrol) ≈ 0.1314 kg/km
   CO2 emissions per kilometer(diesel) = (2.68 kg/l) / (18 km/l)
   CO2 emissions per kilometer(diesel) ≈ 0.1488 kg/km
   */
    if(consumtion_unit.current.selectedIndex===0){
      if(fuel_type.current.selectedIndex===1){
        car_travel=my_vehicle_km_per_year.current.value * avg_petrol_vehicle_co2_footprint_per_km;
        vehicle_label.current.innerText= car_travel.toFixed(2) + ' kg';
      }
      else if(fuel_type.current.selectedIndex===0){
        car_travel=my_vehicle_km_per_year.current.value * avg_diesel_vehicle_co2_footprint_per_km;
        vehicle_label.current.innerText= car_travel.toFixed(2) + ' kg';
      }
    }
  }

  // for Bus(public transport)
  const bus_footprint=()=>{
    /*
    Diesel-powered buses, which are common in India, typically emit around 0.09 to 0.12 kg CO2 per passenger kilometer traveled (pkm)
    Average CO2 emissions per passenger kilometer for a diesel bus: (0.09 + 0.12) / 2  = 0.105 kg CO2/pkm
    */
   bus_travel= my_bus_km_per_year.current.value * avg_bus_transport_co2_footprint_per_km;
   bus_label.current.innerText= bus_travel.toFixed(2) + ' kg';
  }
  const train_footprint=()=>{
    /*
    A diesel trains: 49 to 91 grams of CO2 per passenger kilometer
    so the average would be = (49+91) / 2 => 70 gm per km
    */ 
   train_travel= my_train_km_per_year.current.value * avg_train_transport_co2_footprint_per_km;
   train_label.current.innerText= train_travel.toFixed(2) + ' kg';
 }
  const metro_footprint=()=>{
    /*
    A regualr metro in india emits around 35g of CO2 per passenger kilometer(Estimated value)
    */ 
   metro_travel= my_metro_km_per_year.current.value * avg_metro_transport_co2_footprint_per_km;
   metro_label.current.innerText= metro_travel.toFixed(2) + ' kg';
 }
  const air_footprint=()=>{
    /*
        by-https://www.carbonindependent.org/22.html
    A Boeing 737-400 jet is typically used for short international flights.

For a distance of 926 km, the amount of fuel used is estimated to be 3.61 tonnes [1], including taxiing, take-off, cruising and landing.

Using a seating capacity of 164 [Wikipedia, viewed 28.2.08] and an average seat occupancy (or 'load factor') of 65% [2], this gives a fuel use of 36.6 g per passenger per km.

CO2 emissions from aviation fuel are 3.15 grams per gram of fuel [1], which gives CO2 emissions from a Boeing 737-400 of 115 g per passenger per km.

At a cruising speed of 780 km per hour [Wikipedia, 28.2.08], this is equivalent to 90 kg CO2 per passenger per hour.

The corresponding figures (same sources) for a Boeing 747-400 (used for long distance international flights) are:
Distance: 5556 km
Fuel used: 59.6 tonnes
Seats: 416
Seat occupancy: 80%
Average number of passengers: 333
Fuel use per passenger km: 59.6 tonnes / (5556km x 333) = 32.2 g per passenger per km
CO2 emissions: 101 g per passenger per km (multiplying by 3.15 g CO2 per g fuel)
Cruising speed: 910 km per hour
CO2 emissions: 92 kg CO2 per passenger per hour

So for both aircraft, the emissions are around 90 kg CO2 per passenger per hour.
    */ 
   air_travel= my_airT_km_per_year.current.value * avg_air_transport_co2_footprint_per_km;
   air_label.current.innerText= air_travel.toFixed(2) + ' kg';
 }


  vehicle_footprint();
  bus_footprint();
  train_footprint();
  metro_footprint();
  air_footprint();

  my_total_travel = car_travel + bus_travel + train_travel + metro_travel + air_travel;
  settravel_percentage((((avg_travel_footprint - (my_total_travel / 1000)) / avg_travel_footprint) * 100).toFixed(2));
  // setting up my total travel value into travel usestate hook
  let tmp=(my_total_travel / 1000).toFixed(2);
  settravel_footprint(tmp);
  // setttl(parseFloat((my_total_travel / 1000).toFixed(2)));
  let ttl=parseFloat(my_household_footprint) + parseFloat(tmp) + parseFloat(home_footprint) + parseFloat(shopping_footprint) + parseFloat(food_footprint);
  // console.log(ttl);
  settotal_footprint(ttl);
  }

  // Home Module
  const electricity_foot=()=>{
    //.85
    //6.5
    // let temp=parseFloat(home_footprint);
    const total_units_consumed=home_electricity.current.value / 6.5;
    // temp+=(parseFloat(total_units_consumed * .85).toFixed(2));
    home_label_elecricity.current.innerText= (total_units_consumed * .85).toFixed(2) + " kg";
    // sethome_footprint(temp);
    return (total_units_consumed * .85).toFixed(2);
  }
  const naturalgas_foot=()=>{
    //.40
    //6.5
    console.log("ottyyy")
    const total_units_consumed=home_naturalgas.current.value / 6.5;
    home_label_naturalgas.current.innerText=(total_units_consumed * .40).toFixed(2) + " kg";
    return (total_units_consumed * .40).toFixed(2);
  }
  const cookingoil_foot=()=>{
    //1
    //150
    const total_cookoil_liter=home_cookingoil.current.value / 150;
    home_label_cookingoil.current.innerText=(total_cookoil_liter).toFixed(2) + " kg";
    return (total_cookoil_liter).toFixed(2)
  }
  const sqaurefeet_foot=()=>{
    //2 kg per sq feet co2
    //10000 avg per square feet price
    const total_squarefeet_foot=(home_livingspace.current.value / 10000) * 2;
    home_label_livingspace.current.innerText=(total_squarefeet_foot).toFixed(2) + " kg";
    return (total_squarefeet_foot).toFixed(2);
  }
const homi=()=>{
  let temp=0;
  sqaurefeet_foot();
  temp=parseFloat(parseFloat(electricity_foot()) + parseFloat(naturalgas_foot()) + parseFloat(cookingoil_foot()));
  sethome_footprint((temp/1000).toFixed(2));
}

//food module
const cal_meat_food=()=>{
  //.0025
  // console.log(food_slider1.current.value);
  let temp = (food_slider1.current.value * 530) * .0025;
  setfood_footprint((temp.toFixed(2))/1000);
}
const cal_grain_food=()=>{
  //.0025
  // console.log(food_slider1.current.value);
  let temp = (food_slider2.current.value * 669) * .0010;
  setfood_footprint((temp.toFixed(2))/1000);
}

//shopping module

const cal_goods_foot=()=>{
  //.0025
  console.log(food_slider1.current.value * 1311);
  let temp = (shop_slider1.current.value * 1311) * .90;
  setshopping_footprint((temp.toFixed(2))/1000);
}

  // started_tab ref's
const started_slider1 = useRef(null);
const started_slider2 = useRef(null);
const started_label = useRef(null);

  // for slider calculating loss of trees
  const treecal=()=>{
    started_label.current.innerText=started_slider2.current.value +' kg paper = '+(started_slider2.current.value*0.017).toFixed(1) +' trees';
  }
  const rangeSlide=()=>{
    // console.log(ttl);
    cal_meat_food();
    cal_grain_food();
    cal_goods_foot();
    // started-tab
    let temp;
    temp=started_slider1.current.value * per_person_co2_india;
    // ttl= parseFloat(temp.toFixed(2));
    // console.log(ttl);
    setmy_household_footprint((temp).toFixed(2));
    console.log(temp);
    let ttl=(parseFloat(temp)) + parseFloat(travel_footprint) + parseFloat(home_footprint) + parseFloat(shopping_footprint) + parseFloat(food_footprint);
    temp=(avg_household_co2_india - temp).toFixed(2);
    temp=((temp/avg_household_co2_india)*100).toFixed(0);
    setmy_household_percentage(temp);
  settotal_footprint(ttl);
    

    home_label1.current.innerText=(home_slider1.current.value) +'%';
    home_label2.current.innerText=(home_slider2.current.value) +' litres/perDay';
    food_label1.current.innerText=(food_slider1.current.value*530) +' Daily calories per person';
    food_label2.current.innerText=(food_slider2.current.value*669) +' Daily calories per person';
    food_label3.current.innerText=(food_slider3.current.value*286) +' Daily calories per person';
    food_label4.current.innerText=(food_slider4.current.value*271) +' Daily calories per person';
    food_label5.current.innerText=(food_slider5.current.value*736) +' Daily calories per person';
    shop_label1.current.innerText='₹'+(shop_slider1.current.value*1311) +' / month';
    shop_label2.current.innerText='₹'+(shop_slider2.current.value*2413) +' / month';
  }

  return (
    <>
    <h1 style={{textAlign:'center',textShadow:'0 5px 10px #0004',lineHeight:'120px',fontSize:'3.2rem',color:'#fff',fontWeight:'700'}}>Calculate Your Carbon Footprint</h1>
    <ul className={`nav nav-tabs category`} id="myTab" role="tablist">
  <li className={`nav-item`} role="presentation">
    <button onClick={()=>activate(1)} className={`nav-link ${tab_index===1 ?'activate':'' }`} ><i className="fa fa-tree" aria-hidden="true"></i> Getting Started</button>
  </li>
  <li className={`nav-item`} role="presentation">
    <button onClick={()=>activate(2)} className={`nav-link ${tab_index===2 ?'activate':'' }`} ><i className="fa fa-plane" aria-hidden="true"></i> Travel</button>
  </li>
  <li className={`nav-item`} role="presentation">
    <button onClick={()=>activate(3)} className={`nav-link ${tab_index===3 ?'activate':'' }`}><i className="fa fa-home" aria-hidden="true"></i> Home</button>
  </li>
  <li className={`nav-item`} role="presentation">
    <button onClick={()=>activate(4)} className={`nav-link ${tab_index===4 ?'activate':'' }`}><i className="fa fa-cutlery" aria-hidden="true"></i> Food</button>
  </li>
  <li className={`nav-item`} role="presentation">
    <button onClick={()=>activate(5)} className={`nav-link ${tab_index===5 ?'activate':'' }`} ><i className="fa fa-shopping-cart" aria-hidden="true"></i> Shopping</button>
  </li>
  <li className={`nav-item`} role="presentation">
    <button onClick={()=>activate(6)} className={`nav-link ${tab_index===6 ?'activate':'' }`} ><i className="fa fa-paw" aria-hidden="true"></i> Your Footprint</button>
  </li>
</ul>
<div style={{height:`${tabsize}vh`}} className={`selected_tab`}>

  <div className={`started_tab ${tab_index===1?'showtab':'byetab'}`}>

  <div className="category_logo">
  <img src={start_icon} alt="" />
  <div>Getting Started</div>
  </div>

  <div className="questions">
  <h5 style={{marginTop:'40px'}}>How many people live in your household?</h5>

  <div style={{margin:'10% 0'}}>
  <input ref={started_slider1} type="range" min="0" max="8" onChange={rangeSlide} id="range" /> 

  <div className="sliderticks">
  <span>Avg(4.4)</span>
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
  <span>5</span>
  <span>6</span>
  <span>7</span>
  <span>8+</span>
  </div>

</div>

  <h5>Calculate how many trees it took to create paper.</h5>

<div style={{margin:'6% 0',position:'relative',border:'2px solid none'}}>
<label ref={started_label} style={{margin:'15px 0',border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px',borderRadius:'6px',position:'relative',left:'50%',transform:'translateX(-50%)'}}>0 Trees</label>
  <input ref={started_slider2} type="range" min="0" max="1400" step="50" onChange={treecal} id="range1" /> 

  <div className="sliderticks">
  <span>0kg</span>
  <span>200kg</span>
  <span>400kg</span>
  <span>600kg</span>
  <span>800kg</span>
  <span>1000kg</span>
  <span>1200kg</span>
  <span>1400kg</span>
  </div>

</div>
<button onClick={()=>activate(2)} style={{display:'block',margin:'auto'}} className="tab_button">Next</button>
  </div>

    <div className="emissions-data">
      {/* row1 */}
      <div className="c1r1 data-grid-items1">{my_household_footprint}  tons CO2/year</div>
      <div className="c2r1 data-grid-items1">{avg_household_co2_india}  tons CO2/year</div>
      <div className="c3r1 data-grid-items1">{my_household_percentage<0?'0':my_household_percentage} %</div>
      <div className="c4r1 data-grid-items1">{total_footprint}  tons CO2/year</div>
      {/* row2 */}
      <div className="c1r2 data-grid-items2">Your Household Footprint</div>
      <div className="c2r2 data-grid-items2">Average Household Footprint</div>
      <div className="c2r2 data-grid-items2">Better than Average</div>
      <div className="c2r2 data-grid-items2">Total Footprint</div>
    </div>

  </div>

  <div className={`travel_tab ${tab_index===2?'showtab':'byetab'}`}>

  <div className="category_logo">
  <img width={120}  src={travel_icon} alt="" />
  <div>Travel</div>
  </div>

  <div className="questions">
  <h5 style={{textAlign:'center',marginTop:'40px'}}> How Do You Get Around?</h5>

  <div style={{margin:'6% 0'}}>
  <div className="travel_box">
    <div style={{display:'flex',flexFlow:'row wrap'}} className="box_nav">
      <div style={{flexBasis:'25%'}} className="box_title">Your vehicles
      <button  style={{border:'none',marginLeft:'10px',backgroundColor:'transparent',border:'1px solid #e9ecef',color:'#e9ecef',padding:'5px',borderRadius:'5px'}}><i className="fa fa-plus" aria-hidden="true"></i> add</button>
      </div>
      <div style={{flexBasis:'72%',display:'flex',alignItems:'center',justifyContent:'center'}} className="box_remain">
        Consumption Unit : &nbsp;
        <select ref={consumtion_unit}>
<option >km per litre</option>
<option>miles per litre</option>
</select>
      </div>
    </div>

    <div className="box_content">
      <div  className="box_converter">
      <select ref={fuel_type}>
<option>Diesel</option>
<option>Petrol</option>
</select>
<input onChange={()=>calTravel(1)} ref={my_vehicle_km_per_year} type="text" />
<label style={{backgroundColor:'rgba(0,0,0,.3)'}}>km/year</label>
<label className="clos">X</label>

      </div>
      <label ref={vehicle_label} style={{border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px',borderRadius:'6px',position:'relative',left:'50%',transform:'translateX(-50%)'}}>Vehicle emissions</label>
    </div>
  </div>
  <div className="travel_box">
    <div style={{display:'flex',flexFlow:'row wrap'}} className="box_nav">
      <div style={{flexBasis:'25%'}} className="box_title">Public Transit
      </div>
      <div style={{flexBasis:'72%',display:'flex',alignItems:'center',justifyContent:'center'}} className="box_remain">
      </div>
    </div>

    <div className="box_content1">

      <div style={{gridTemplateColumns:'15% 12% 63% 10%'}}  className="box_converter">
<label >Bus Transit</label>
    <label ref={bus_label} style={{border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px'}}>0 kg</label>
<input onChange={()=>calTravel(2)} ref={my_bus_km_per_year} style={{lineHeight:'30px'}} type="text" />
<label>km/year</label>
      </div>

      <div style={{gridTemplateColumns:'15% 12% 63% 10%'}}  className="box_converter">
<label >Rail Transit</label>
    <label ref={train_label} style={{border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px'}}>0 kg</label>
<input onChange={()=>calTravel(3)} ref={my_train_km_per_year} style={{lineHeight:'30px'}} type="text" />
<label>km/year</label>
      </div>

      <div style={{gridTemplateColumns:'15% 12% 63% 10%'}}  className="box_converter">
<label >Metro Transit</label>
    <label ref={metro_label} style={{border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px'}}>0 kg</label>
<input onChange={()=>calTravel(4)} ref={my_metro_km_per_year} style={{lineHeight:'30px'}} type="text" />
<label>km/year</label>
      </div>



    </div>
  </div>

  <div className="travel_box">
    <div style={{display:'flex',flexFlow:'row wrap'}} className="box_nav">
      <div style={{flexBasis:'25%'}} className="box_title">Air Travel
      </div>
      <div style={{flexBasis:'72%',display:'flex',alignItems:'center',justifyContent:'center'}} className="box_remain">
      </div>
    </div>

    <div className="box_content1">
      <div style={{gridTemplateColumns:'12% 78% 10%'}}  className="box_converter">
      <label ref={air_label} style={{border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'.3rem'}}>0 kg</label>
<input onChange={()=>calTravel(5)} ref={my_airT_km_per_year} style={{lineHeight:'30px'}} type="text" />
<label>km/year</label>

      </div>
    </div>
  </div>

</div>

<div className="button_contain">
<button onClick={()=>activate(1)} className="tab_button" >{'<'}Previous</button>
<button onClick={()=>activate(3)} className="tab_button" >Next{'>'}</button>
</div>

  </div>

  <div className="emissions-data">
      {/* row1 */}
      <div className="c1r1 data-grid-items1">{travel_footprint}  tons CO2/year</div>
      <div className="c2r1 data-grid-items1">{avg_travel_footprint.toFixed(2)} tons CO2/year</div>
      <div className="c3r1 data-grid-items1">{travel_percentage<0?'0':travel_percentage} %</div>
      <div className="c4r1 data-grid-items1">{total_footprint}  tons CO2/year</div>
      {/* row2 */}
      <div className="c1r2 data-grid-items2">Your Travel Footprint</div>
      <div className="c2r2 data-grid-items2">Average Travel Footprint</div>
      <div className="c2r2 data-grid-items2">Better than Average</div>
      <div className="c2r2 data-grid-items2">Total Footprint</div>
    </div>

  </div>

  <div className={`home_tab ${tab_index===3?'showtab':'byetab'}`}>

  <div className="category_logo">
  <img width={120}  src={home_icon} alt="" />
  <div>Home</div>
  </div>

  <div className="questions">
  <h5 style={{textAlign:'center',marginTop:'40px'}}> HOW MUCH DO YOU USE IN YOUR HOME?</h5>

  <div style={{margin:'6% 0'}}>
  <div className="travel_box">
    <div style={{display:'flex',flexFlow:'row wrap'}} className="box_nav">
      <div style={{flexBasis:'25%'}} className="box_title">Electricity
      </div>
      <div style={{flexBasis:'72%',display:'flex',alignItems:'center',justifyContent:'center'}} className="box_remain">
      </div>
    </div>

    <div className="box_content1">
      <div style={{gridTemplateColumns:'10% 80% 10%'}}  className="box_converter">
      <label ref={home_label_elecricity} style={{border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px'}}>0 kg</label>
<input onChange={()=>homi()} ref={home_electricity} style={{lineHeight:'25px'}} type="text" />
<label>₹/year</label>

      </div>
    </div>
  </div>

  <h5>Percent purchased from a clean energy program</h5>
  <label ref={home_label1} style={{marginTop:'10px',border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px',borderRadius:'6px',position:'absolute',left:'50%',transform:'translateX(-50%)'}}> 0 %</label>

  <div style={{margin:'6% 0'}}>
  <input ref={home_slider1} type="range" min="0" max="100" step="5" onChange={rangeSlide} id="range" /> 

  <div className="sliderticks">
  <span>0</span>
  <span>20</span>
  <span>40</span>
  <span>60</span>
  <span>80</span>
  <span>100</span>
  </div>

</div>

  <div className="travel_box">
    <div style={{display:'flex',flexFlow:'row wrap'}} className="box_nav">
      <div style={{flexBasis:'25%'}} className="box_title">Natural Gas </div>
      <div style={{flexBasis:'72%',display:'flex',alignItems:'center',justifyContent:'center'}} className="box_remain">
      </div>
    </div>

    <div className="box_content1">
      <div style={{gridTemplateColumns:'10% 80% 10%'}}  className="box_converter">
      <label ref={home_label_naturalgas} style={{border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px'}}>0 kg</label>
<input onChange={()=>homi()} ref={home_naturalgas} style={{lineHeight:'25px'}} type="text" />
<label>₹/year</label>

      </div>
    </div>
  </div>

  <div className="travel_box">
    <div style={{display:'flex',flexFlow:'row wrap'}} className="box_nav">
      <div style={{flexBasis:'25%'}} className="box_title">Heating Oil & Other Fuels
      </div>
      <div style={{flexBasis:'72%',display:'flex',alignItems:'center',justifyContent:'center'}} className="box_remain">
      </div>
    </div>

    <div className="box_content1">
      <div style={{gridTemplateColumns:'10% 80% 10%'}}  className="box_converter">
      <label ref={home_label_cookingoil} style={{border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px'}}>0 kg</label>
<input onChange={()=>homi()} ref={home_cookingoil} style={{lineHeight:'25px'}} type="text" />
<label>₹/year</label>

      </div>
    </div>
  </div>

  <div className="travel_box">
    <div style={{display:'flex',flexFlow:'row wrap'}} className="box_nav">
      <div style={{flexBasis:'25%'}} className="box_title">Square ft. of living space
      </div>
      <div style={{flexBasis:'72%',display:'flex',alignItems:'center',justifyContent:'center'}} className="box_remain">
      </div>
    </div>

    <div className="box_content1">
      <div style={{gridTemplateColumns:'10% 80% 10%'}}  className="box_converter">
      <label ref={home_label_livingspace} style={{border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px'}}>0 kg</label>
<input onChange={()=>homi()} ref={home_livingspace} style={{lineHeight:'25px'}} type="text" />
<label>₹/year</label>

      </div>
    </div>
  </div>

  <h6 style={{fontWeight:400}}>Water Usage</h6>
  <label ref={home_label2} style={{marginTop:'10px',border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px',borderRadius:'6px',position:'absolute',left:'50%',transform:'translateX(-50%)'}}>liters/perDay</label>

  <div style={{margin:'6% 0'}}>
  <input ref={home_slider2} type="range" min="0" max="150" step="1" onChange={rangeSlide} id="range" /> 

  <div className="sliderticks">
  <span>0</span>
  <span>30</span>
  <span>60</span>
  <span>90</span>
  <span>120</span>
  <span>150</span>
  </div>

</div>


</div>
{/* tabindex-3 */}
<div className="button_contain">
<button onClick={()=>activate(2)} className="tab_button" >{'<'}Previous</button>
<button onClick={()=>activate(4)} className="tab_button" >Next{'>'}</button>
</div>

  </div>

  <div className="emissions-data">
      {/* row1 */}
      <div className="c1r1 data-grid-items1">{home_footprint}  tons CO2/year</div>
      <div className="c2r1 data-grid-items1">15  tons CO2/year</div>
      <div className="c3r1 data-grid-items1">87%</div>
      <div className="c4r1 data-grid-items1">{total_footprint}  tons CO2/year</div>
      {/* row2 */}
      <div className="c1r2 data-grid-items2">Your Home Footprint</div>
      <div className="c2r2 data-grid-items2">Average Home Footprint</div>
      <div className="c2r2 data-grid-items2">Better than Average</div>
      <div className="c2r2 data-grid-items2">Total Footprint</div>
    </div>

  </div>

  <div className={`food_tab ${tab_index===4?'showtab':'byetab'}`}>

  <div className="category_logo">
  <img width={160} src={food_icon} alt="" />
  <div>Food</div>
  </div>

  <div className="questions">
  <h5 style={{textAlign:'center',marginTop:'40px'}}>HOW MUCH DO YOU CONSUME OF EACH OF THE FOLLOWING?</h5>
  <h5 style={{marginTop:'30px',fontWeight:'500'}}> Meat, fish, eggs</h5>
  <label ref={food_label1} style={{marginTop:'10px',border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px',borderRadius:'6px',position:'absolute',left:'50%',transform:'translateX(-50%)'}}>530 Daily calories per person</label>
  <div style={{margin:'10% 0'}}>
  <input ref={food_slider1} type="range" min="1" max="5" step=".5" onChange={rangeSlide} id="range" /> 

  <div className="sliderticks">
  <span>Avg</span>
  <span>2x</span>
  <span>3x</span>
  <span>4x</span>
  <span>5x</span>
  </div>

</div>

  <h5 >Grains & baked goods</h5>
  <label ref={food_label2} style={{marginTop:'10px',border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px',borderRadius:'6px',position:'absolute',left:'50%',transform:'translateX(-50%)'}}>669 Daily calories per person</label>
  <div style={{margin:'10% 0'}}>
  <input ref={food_slider2} type="range" min="1" max="5" step=".5" onChange={rangeSlide} id="range" /> 

  <div className="sliderticks">
  <span>Avg</span>
  <span>2x</span>
  <span>3x</span>
  <span>4x</span>
  <span>5x</span>
  </div>

</div>

  <h5 >Dairy</h5>
  <label ref={food_label3} style={{marginTop:'10px',border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px',borderRadius:'6px',position:'absolute',left:'50%',transform:'translateX(-50%)'}}>286 Daily calories per person</label>
  <div style={{margin:'10% 0'}}>
  <input ref={food_slider3} type="range" min="1" max="5" step=".5" onChange={rangeSlide} id="range" /> 

  <div className="sliderticks">
  <span>Avg</span>
  <span>2x</span>
  <span>3x</span>
  <span>4x</span>
  <span>5x</span>
  </div>

</div>

  <h5 >Fruits & vegetables</h5>
  <label ref={food_label4} style={{marginTop:'10px',border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px',borderRadius:'6px',position:'absolute',left:'50%',transform:'translateX(-50%)'}}>271 Daily calories per person</label>
  <div style={{margin:'10% 0'}}>
  <input ref={food_slider4} type="range" min="1" max="5" step=".5" onChange={rangeSlide} id="range" /> 

  <div className="sliderticks">
  <span>Avg</span>
  <span>2x</span>
  <span>3x</span>
  <span>4x</span>
  <span>5x</span>
  </div>

</div>

  <h5 >Snacks, drinks, etc...</h5>
  <label ref={food_label5} style={{marginTop:'10px',border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px',borderRadius:'6px',position:'absolute',left:'50%',transform:'translateX(-50%)'}}>736 Daily calories per person</label>
  <div style={{margin:'10% 0'}}>
  <input ref={food_slider5} type="range" min="1" max="5" step=".5" onChange={rangeSlide} id="range" /> 

  <div className="sliderticks">
  <span>Avg</span>
  <span>2x</span>
  <span>3x</span>
  <span>4x</span>
  <span>5x</span>
  </div>

</div>



<div className="button_contain">
<button onClick={()=>activate(3)} className="tab_button" >{'<'}Previous</button>
<button onClick={()=>activate(5)} className="tab_button" >Next{'>'}</button>
</div>
  </div>

  <div className="emissions-data">
      {/* row1 */}
      <div className="c1r1 data-grid-items1">{food_footprint}  tons CO2/year</div>
      <div className="c2r1 data-grid-items1">15  tons CO2/year</div>
      <div className="c3r1 data-grid-items1">87%</div>
      <div className="c4r1 data-grid-items1">{total_footprint}  tons CO2/year</div>
      {/* row2 */}
      <div className="c1r2 data-grid-items2">Your Food Footprint</div>
      <div className="c2r2 data-grid-items2">Average Food Footprint</div>
      <div className="c2r2 data-grid-items2">Better than Average</div>
      <div className="c2r2 data-grid-items2">Total Footprint</div>
    </div>

  </div>

  <div className={`shopping_tab ${tab_index===5?'showtab':'byetab'}`}>

  <div className="category_logo">
  <img width={160} src={shopping_icon} alt="" />
  <div>Shopping</div>
  </div>

  <div className="questions">
  <h5 style={{textAlign:'center',marginTop:'40px'}}>HOW MUCH DO YOU SPEND ON EACH OF THE FOLLOWING?</h5>


  <h5 style={{marginTop:'30px',fontWeight:'500'}}> Goods</h5>
  <label ref={shop_label1} style={{marginTop:'10px',border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px',borderRadius:'6px',position:'absolute',left:'50%',transform:'translateX(-50%)'}}>₹1,311 / month</label>
  <div style={{margin:'10% 0'}}>
  <input ref={shop_slider1} type="range" min="1" max="5" step=".5" onChange={rangeSlide} id="range" /> 

  <div className="sliderticks">
  <span>Avg</span>
  <span>2x</span>
  <span>3x</span>
  <span>4x</span>
  <span>5x</span>
  </div>

</div>

  <h5 >Services</h5>
  <label ref={shop_label2} style={{marginTop:'10px',border:'1px solid none',backgroundColor:'rgba(0,0,0,.3)',padding:'4px',borderRadius:'6px',position:'absolute',left:'50%',transform:'translateX(-50%)'}}>₹2,413 / month</label>
  <div style={{margin:'10% 0'}}>
  <input ref={shop_slider2} type="range" min="1" max="5" step=".5" onChange={rangeSlide} id="range" /> 

  <div className="sliderticks">
  <span>Avg</span>
  <span>2x</span>
  <span>3x</span>
  <span>4x</span>
  <span>5x</span>
  </div>

</div>


<div className="button_contain">
<button onClick={()=>activate(4)} className="tab_button" >{'<'}Previous</button>
<button onClick={()=>activate(6)} className="tab_button" >Next{'>'}</button>
</div>
  </div>

  <div className="emissions-data">
      {/* row1 */}
      <div className="c1r1 data-grid-items1">{shopping_footprint}  tons CO2/year</div>
      <div className="c2r1 data-grid-items1">15  tons CO2/year</div>
      <div className="c3r1 data-grid-items1">87%</div>
      <div className="c4r1 data-grid-items1">{total_footprint}  tons CO2/year</div>
      {/* row2 */}
      <div className="c1r2 data-grid-items2">Your Shopping Footprint</div>
      <div className="c2r2 data-grid-items2">Average Shopping Footprint</div>
      <div className="c2r2 data-grid-items2">Better than Average</div>
      <div className="c2r2 data-grid-items2">Total Footprint</div>
    </div>

  </div>

  <div className={`yourfootprint_tab ${tab_index===6?'showtab':'byetab'}`}>

  <div className="category_logo">
  <img width={160} src={yourfootprint_icon} alt="" />
  <div>Your Footprint</div>
  </div>

  <div className="questions">
<button style={{margin:'40px 0',position:'relative',left:'50%',transform:'translateX(-50%)'}} className="tab_button" >See how you compare <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>
</button>

<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',margin:'30px 0'}}>

<div>
  <div><strong style={{fontSize:'3rem'}}>{total_footprint}</strong> tons CO2/year</div>
  <strong>Total Footprint</strong>
</div>

<div>
  <div><strong style={{fontSize:'3rem'}}>35%</strong></div>
  <strong>Better than Average</strong>
</div>

</div>
<div style={{display:'grid',gridTemplateColumns:'auto auto',width:'max-content',margin:'auto',backgroundColor:'rgba(0,0,0,.2)'}}>
<i style={{padding:'5px',color:'#51f737',fontSize:'1.4rem',backgroundColor:'rgba(0,0,0,.3)'}} className="fa fa-bar-chart" aria-hidden="true"></i>
<i style={{padding:'5px',color:'#dee2e6',fontSize:'1.4rem'}} className="fa fa-pie-chart" aria-hidden="true"></i>

</div>

<div style={{
  backgroundColor:'rgba(0,0,0,.5)',
  borderRadius:'15px',
  width:'max-content',
  margin:'30px auto',
  padding:'30px 30px 0px 0',
}}>
 <BarChart 
          width={500}
          height={300}
          data={data}
          barSize={35}
          >
          <XAxis  dataKey="name" stroke="#fff" scale="point" padding={{ left: 30, right: 20 }} />
          <YAxis tickFormatter={(val)=>val+' t'} stroke="#fff" />
          <Tooltip contentStyle={{backgroundColor:'rgba(255,255,255,.3)',borderRadius:'5px'}} />
          <Legend />
          {/* <CartesianGrid strokeDasharray="3 3"  /> */}
          <Bar  dataKey="sectors" fill="lime"   />
        </BarChart> 
          </div>
      
          <button style={{margin:'40px 0',position:'relative',left:'50%',transform:'translateX(-50%)'}} className="tab_button" >Take Action
</button>
            


  </div>

  </div>

</div>
    </>
  );
}

export default Selection;
