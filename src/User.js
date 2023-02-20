import React from 'react'

function User({notShow}) {

  return (
    <div className='user_container'>
        <h1 className='user_heading'>Sign In</h1>
        <div ><input className='user_input' type={'text'} placeholder="Email or phone number"/></div>
        <div><input className='user_input' type={'password'} placeholder="Password"/></div>
        <button className='user_btn' type={'submit'} >Sign In</button>
        <div className='sign_cont'> 
            <div className='signup'>New here? <span>Sign up now</span></div>
            <div className='help'>Need help?</div>
        </div>
        <div className='thankyou'>
        ❤️❤️...Thank You For Joining Netflix...❤️❤️
        </div>
    </div>
  )
}

export default User