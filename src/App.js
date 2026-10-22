// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
// // import About from './Components/About';
// import React, {useState} from 'react';



// function App() {
// const[mode,setMode]=useState('light');

//   const toggleMode=()=>{
//     if(mode==='light'){
//       setMode('dark');
//       document.body.style.backgroundColor='#042743';
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor='white';
//     }
//   }

//   return (
    
  //     <ul className="nav nav-tabs">
  //     <li className="nav-item">
  //     <a className="nav-link active" aria-current="page" href="/home">Active</a>
  // </li>
  // <li className="nav-item">
  //   <a className="nav-link" href="/contact">Link</a>
  // </li>
  // <li className="nav-item">
  //   <a className="nav-link" href="/about">Link</a>
  // </li>
  // <li className="nav-item">
  //   <span className="nav-link disabled" aria-disabled="true">Disabled</span>
  // </li>
  //</ul>


  // <>
  //     <Navbar title="TextUtils" abouttext="About"  />
  //     <div className='container my-3'>
  //       <TextForm heading="Enter the text to analyze below" />
  //     </div>
  // </>   
  
  


    //  <About/>

//     <>
//       <Navbar title="textutils" mode={mode} toggleMode={toggleMode}/> 
//       <div className="container my-3">
//         <TextForm heading="Enter the text to analyze below" mode={mode}/>
//       </div>
//     </>
//   );
// }




// #13
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
import Alert from './Components/Alert';

function App(){
    const[mode,setMode]=useState('light');
    const[alert,setAlert]=useState(null);

      const showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(()=>{
            setAlert(null);
        },1500);
    }

    const toggleMode=()=>{
        if(mode==='light')
        {
            setMode('dark');
            document.body.style.backgroundColor='#042743';
            showAlert("Dark mode has been enabled","success");  
        }
        else{
            setMode('light');
            document.getElementById('myBox').style.backgroundColor='white';
            showAlert("Light mode has been enabled","success");
        }
    }
  
    return(
        <>
          <Navbar title="textutils" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-3">
            <TextForm heading="Enter the text to analyze below"  showalert={showAlert} mode= {mode}>  </TextForm>
          </div>
        </>
    )
  
}

export default App