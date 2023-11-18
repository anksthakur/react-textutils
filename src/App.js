
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React ,{useState} from 'react';
import Alert from './components/Alert';
// react router code
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); // whether dark mode is enable or not

  const [alert,setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042747'; // jab darkmode on kre tab backgrorund ka color bhi change ho
      showAlert("Dark mode has been enabled","success"); // ki jab dark mode enabled krenge tab alert aaye
      document.title = 'TextUtils - Dark Mode';
      //title ko blink krne ke ley
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'install now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';// jab darkmode on kre tab backgrorund ka color bhi change ho
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode'; // title ke sath m likha huya aa jaye light mode
    }
  }
  return (
    <>
    {/* props = aisa react component bna leya hai jiska hum title change kar skte hai ki hme doosri website bhi bnani pad gyi to hum title change krke esi navbar ko utilize kar skte hai */}
{/* <Navbar title="TextUtils" aboutText="About Us" /> */}
{/* <Navbar /> */}
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
{/* alert ko pass kar deya isme */}
<Alert alert={alert} /> 
<div className="container my-3">
  {/* react router code */}
  <Routes>
    <Route exact path="/About" element={<About/>} />
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter you text here" mode={mode}/>} />
  </Routes>
  </div>
  </Router>
  {/* alert ko button ke sath bhi dekhna hai to uhske ley showAlert ko textform m pass kr dena hai */}
  {/* <TextForm showAlert={showAlert} heading="Enter you text here" mode={mode}/> */}
{/* <About/> */}
    </>
  );
}
export default App;