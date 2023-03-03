import React, { useState } from 'react'
import Signup from './Signup'
import ReactDOM from 'react-dom';



function User({setModal}) {
const[signup, setSignup]= useState(false);
const[login, setLogin]= useState({
  "email":"",
  "pass":""
});

const userLogin =()=>{
  let userDetail = JSON.parse(localStorage.getItem("userDetails"));
  let user = userDetail.filter((elem,i)=>{
    if((login.email === elem.email || login.email===elem.number) && login.pass === elem.password){
      userDetail[i].isLogin = true;
      return elem;
    }
  })
console.log(user);
  if(user.length ===1){
    localStorage.setItem("userDetails", JSON.stringify(userDetail));
    alert("Login Successfully....")
  }else{
    alert("Invalid user details....");
  }
}
  return ReactDOM.createPortal(
    <>
    {signup ? <Signup setSignup={setSignup} setModal={setModal}/> :
    <div className='user'>
      <div className='user_container'>
          <h1 className='user_heading'>Sign In</h1>
          <div ><input className='user_input' name='email' type={'text'} onChange={(e)=>setLogin({...login,[e.target.name]:e.target.value})} placeholder="Email or phone number"/></div>
          <div><input className='user_input' name='pass' type={'password'} onChange={(e)=>setLogin({...login,[e.target.name]:e.target.value})} placeholder="Password"/></div>
          <button className='user_btn' onClick={userLogin} type={'submit'} >Sign In</button>
          <div className='sign_cont'> 
              <div className='signup'>New here? <span><button onClick={()=>setSignup(true)}>Sign up now</button></span></div>
              <button className='close' onClick={()=>setModal(false)}>close</button>
          </div>
          <div className='thankyou'>
          ❤️❤️...Thank You For Joining Netflix...❤️❤️
          </div>
      </div> 
    </div>}
    </>,
    document.getElementById("modals")
  );
}

export default User