import React from 'react'

function Signup({setSignup, setModal}) {
  return (
    <div className='user'>
      <div className='user_container'>
          <h1 className='user_heading'>Sign Up Now...</h1>
          <div ><input className='user_input' type={'text'} placeholder="Email or phone number"/></div>
          <div><input className='user_input' type={'password'} placeholder="Password"/></div>
          <button className='user_btn' type={'submit'} >Sign Up</button>
          <button className='close_btn' onClick={()=>{setSignup(false);setModal(false)}}>Close</button>
      </div>
    </div>
  )
}

export default Signup