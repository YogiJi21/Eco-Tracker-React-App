import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
function Login(props) {
  // targeting elements
  const signup = useRef(null);
  const signup_form = useRef(null);
  const login = useRef(null);
  const login_form = useRef(null);
  const [front, setfront] = useState("");
  const [bac, setbac] = useState("");

  useEffect(() => {}, []);

  const change = () => {
    // setfront("lghoom");
    setbac("cardi-end");
  };
  const changeback = () => {
    // setfront("lghoom");
    setbac("");
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigate = useNavigate();
  function getFirstCharacter(str) {
    if (typeof str === 'string' && str.length > 0) {
      return str.charAt(0);
    } else {
      return '';
    }
  }
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [uname, setuname] = useState("");
  const collectdata=async ()=>{
    console.warn(uname,email,password);
    let result=await fetch('http://localhost:5000/register',{
      method:'post',
      body:JSON.stringify({username:uname,email,password}),
      headers:{
        'Content-Type':'application/json'
      },
    });
    result=await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result));
    // if(result){
    // }
    handleScrollToTop();
    console.log(getFirstCharacter(uname));
    props.naam(getFirstCharacter(uname));
    // navigate('/homepage');
  }
  return (
    <div className="login-background">
      <div className="login">
        <div className="coni">
          <div className={`cardi ${bac}`}>
            <div className="cardi-front">
              <h2>Login</h2>
              <div className="inputbox ">
                <span className="material-symbols-outlined">mail</span>
                <input type="email" id="floatingInput" placeholder=" " />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="inputbox">
                <span className="material-symbols-outlined">lock</span>
                <input type="password" id="floatingPassword" placeholder=" " />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="checkboxi">
                <span className="rem">
                  <input
                    id="yo"
                    className="clear-css"
                    name="yo"
                    type="checkbox"
                  />
                  <label className="clear-css" htmlFor="yo">
                    Remember me
                  </label>
                </span>
                <a href="/">Forgot Password?</a>
              </div>
              <button className="button-box">Login</button>
              <p>
                Don't have an account?{" "}
                <span ref={login} onClick={change}>
                  Signup
                </span>
              </p>
            </div>

            <div className="cardi-back">
              <h2>Signup</h2>

              <div className="inputbox">
                <span className="material-symbols-outlined"><i className="fa fa-user" aria-hidden="true"></i></span>
                <input type="text" id="" value={uname} onChange={(e)=>setuname(e.target.value)} placeholder=" " />
                <label htmlFor="">Enter Your Name</label>
              </div>
              <div className="inputbox ">
                <span className="material-symbols-outlined">mail</span>
                <input type="email" id="floatingInput" value={email} onChange={(e)=>setemail(e.target.value)} placeholder=" " />
                <label htmlFor="floatingInput">Enter your Email</label>
              </div>
              <div className="inputbox">
                <span className="material-symbols-outlined"><i className="fa fa-eye-slash" aria-hidden="true"></i></span>
                <input type="password" id="floatingPassword" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder=" " />
                <label htmlFor="floatingPassword">Create a Password</label>
              </div>
              

              <button onClick={collectdata} className="button-box">JOIN US</button>
              <p>
                Already have an account?{" "}
                <span onClick={changeback} ref={signup}>
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
