import React, {useState} from 'react'

function Signup({setSignup, setModal}) {
  const [newUser, setNewUser]= useState({
    "email" : "",
    "number": "",
    "username":"",
    "age":"",
    "password":"",
    "isLogin":false
  });

  const clickSignup =()=>{
    let userDetail = localStorage.getItem("userDetails");
    if(userDetail==null){
      userDetail=[];
      userDetail.push(newUser);
      localStorage.setItem("userDetails",JSON.stringify(userDetail));
      // alert("Signup Successfully...");
    }
    else{
      let oldDetailsArr = JSON.parse(userDetail);
      oldDetailsArr.push(newUser);
      localStorage.setItem("userDetails", JSON.stringify(oldDetailsArr));
      // alert("Signup Successfully...");
    }
  }

  return (
    <div className='user'>
      <form className='user_container'>
          <h1 className='user_heading'>Sign Up Now...</h1>
          <div ><input name='email' className='user_input' type={'text'} onChange={(e)=>setNewUser({...newUser, [e.target.name] : e.target.value})} required placeholder="Enter your email"/></div>
          <div ><input name='number' className='user_input' type={'text'} onChange={(e)=>setNewUser({...newUser, [e.target.name]: e.target.value})} required placeholder="Enter Your phone number"/></div>
          <div ><input name='username' className='user_input' type={'text'} onChange={(e)=>setNewUser({...newUser, [e.target.name]: e.target.value})} required placeholder="UserName"/></div>
          <div ><input name='age' className='user_input' type={'text'} onChange={(e)=>setNewUser({...newUser, [e.target.name]: e.target.value})} required placeholder="Age"/></div>
          <div><input name='password' className='user_input' type="password" onChange={(e)=>setNewUser({...newUser, [e.target.name]: e.target.value})} required placeholder="Password"/></div>
          <button className='user_btn' onClick={clickSignup} type={'submit'} >Sign Up</button>
          <button className='close_btn' onClick={()=>{setSignup(false);setModal(false)}} >Close</button>
      </form>
    </div>
  )
}

export default Signup;