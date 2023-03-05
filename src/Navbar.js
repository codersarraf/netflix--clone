import React, { useEffect, useState } from 'react'
import User from './User';

function Navbar({modal,setModal}) {

    const[show,setShow] = useState(false);
    // const[modal, setModal]=useState(false);

   

    

    // useEffect(()=>{
    //     // for showing navbar dark background only after scroll > 100
    //     window.addEventListener("scroll",()=>{
    //         if(window.scrollY > 80){
    //             setShow(true);
    //         }
    //         else{
    //             setShow(false);
    //         }
            
    //     });
    //     // return ()=>{
    //     //     window.removeEventListener("scroll");
    //     // };
    // },[]);

    // // const notShow = ()=>setModal(false);

  return (
    <>
        <div className={show ? "nav_dark" : "nav"}>
        <img className='nav_img'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png'
            alt='nav_logo'    
        />
        <img className='nav_user'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='nav_logo' onClick={()=>setModal(!modal)}  
        />
    </div>
    {modal && 
      <User setModal={setModal} />}
    </>
    
  )
}

export default Navbar