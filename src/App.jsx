import {Routes, Route} from "react-router-dom"
import Register from "./Components/Register"
import Home from "./Components/Home"
import Login from "./Components/Login"


function App() {
   return (
    <Routes> 
      <Route path='/' element={<Home/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Login' element={<Login/>} />
    </Routes>     
   )
}


export default App
