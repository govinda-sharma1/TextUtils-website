import React from 'react'
import Alert from './component/Alert'
import {useState} from 'react'
import About from './component/About'
import Navbar from './component/Navbar'
import TextForm from './component/TextForm'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App() {

   const [mood, SetMood] = useState('light');
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);

   }

   const toggleMode = () =>{
    if(mood === 'light'){
      SetMood('dark');
      document.body.style.backgroundColor = '#11214c';
      showAlert("Dark mode has been enabled", "success");
       }
    else{
      SetMood('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      }  
   }

  return (
    <>

    <Router>
    <Navbar TextHeading="TextUtils" mood={mood} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Switch>
          <Route path="/about">
            <About mode={mood}/>
          </Route>
          <Route path="/">
          <TextForm heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mood={mood} showAlert={showAlert}/>       
          </Route>
        </Switch>
        </div>
     </Router>
     </>
  )
}
