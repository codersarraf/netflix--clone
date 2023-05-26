import React,{useState,Suspense,lazy} from "react";
import './App.css';
// import Row from "./Row";
// import requests from "./requests";
// import Banner from "./Banner";
import Navbar from "./Navbar";
import Notsigned from "./Notsigned";
import Loader from "./Loader";
// import RowAll from "./RowAll";

const RowAll = lazy(()=>import("./RowAll"));
const Banner = lazy(()=>import("./Banner"));

function App() {
  const[modal, setModal]=useState(false);
  // const [showLoader, setShowLoader] = useState(false);
  // const sampleData = [];

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setShowLoader(true);
  //   },2000);
  // },[sampleData]);


  let userDetail = JSON.parse(localStorage.getItem("userDetails"))
  
  return (
    <div className="App">
      <Navbar modal={modal} setModal ={setModal} />
      {userDetail ==null  ? <Notsigned modal={modal} setModal ={setModal} /> :
      <>
      <Banner/>
      <Suspense fallback={<Loader/>}>
        <RowAll/>
        
      </Suspense>
      </>
      }

    </div>
  );
}

export default App;


// c366e6afa97f35239d05c1b231db647d

// 

