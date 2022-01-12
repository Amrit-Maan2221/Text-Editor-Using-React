import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import { Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, typeOfMsg) => {
    setAlert({
      msg: message,
      typeOfMsg: typeOfMsg
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Text Editor- Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "Text Editor- Light Mode";
    }
  }
  return (
    <>
      <Navbar title="Amrit Editor" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Textbox heading="Enter your text here to analize" mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
