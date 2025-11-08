import Signup from "./Signup"
import Login from "./Login"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./home"
import Navbar from "./Navbar"
import toast, { Toaster } from 'react-hot-toast'


function App(){
  return(
    <BrowserRouter>
    <Toaster />
    <Navbar/>
    <Routes>
 
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}
export default App