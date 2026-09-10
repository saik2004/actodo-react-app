import Header from "./components/Header";
import Card from "./components/Card";
import Todocontainer from "./components/Todocontainer";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Signup from "./Pages/signup";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react";

function App(){
    const [user,setuser] = useState([
          {
              username:"sai",
              pass:123
          }
      ])

  return(
<div>
  <BrowserRouter>
  
  <Routes>
   <Route path='/' element={<Login user={user} setuser={setuser} />}></Route>
   <Route path='/signup' element={<Signup user={user} setuser={setuser}/>}></Route>
   <Route path='/landing' element={<LandingPage/>}></Route>
  
 </Routes>

 </BrowserRouter>
</div>

  )
}


export default App;
