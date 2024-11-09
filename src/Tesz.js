import React,{useState} from 'react'
// import './Tesz.css'
function Tesz(props) {
    const dalji=(event)=>{
        settext(event.target.value);
    }
    const [text,settext]=useState("Hola");
  return (
    <div className='uit'>
        <h2>{text.toUpperCase()}</h2>
        <textarea id="ty" value={text} onChange={dalji} cols="80" rows="10"></textarea>
        <br/>
        <button onClick={props.modes} >Click me</button>
    </div>
  )
}


export default Tesz