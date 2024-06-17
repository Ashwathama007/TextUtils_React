import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from "react";
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)}
    ,1500);

  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" home="Home" about='About'/>
    <Alert alert={alert}/>
    
      <div className='container my-3'>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Textform showAlert={showAlert} text="Enter your text here" />} />
          <Route path='/home' element={<Textform showAlert={showAlert} text="Enter your text here" />} />
        </Routes>
      </div>
    </Router>
    
</>
  );
}

export default App;
