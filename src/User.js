import React, { useState } from 'react'
import Signup from './Signup'
import ReactDOM from 'react-dom';


function User({setModal}) {
const[signup, setSignup]= useState(false);
  return ReactDOM.createPortal(
    <>
    {signup ? <Signup setSignup={setSignup} setModal={setModal}/> :
    <div className='user'>
      <div className='user_container'>
          <h1 className='user_heading'>Sign In</h1>
          <div ><input className='user_input' type={'text'} placeholder="Email or phone number"/></div>
          <div><input className='user_input' type={'password'} placeholder="Password"/></div>
          <button className='user_btn' type={'submit'} >Sign In</button>
          <div className='sign_cont'> 
              <div className='signup'>New here? <span><button onClick={()=>setSignup(true)}>Sign up now</button></span></div>
              <div className='help'>Need help?</div>
          </div>
          <div className='thankyou'>
          ❤️❤️...Thank You For Joining Netflix...❤️❤️
          </div>
      </div> 
    </div>}
    {/* <div className='signup'>
      {signup ? <Signup /> : <User />}
    </div> */}
    </>,
    document.getElementById("modals")
  );
}

export default User