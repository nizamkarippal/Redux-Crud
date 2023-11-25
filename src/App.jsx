// import { useState } from 'react'
import Home from "./Home"
import Edit from "./Edit";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes , Route ,} from 'react-router-dom'
import Create from "./Create";

function App() {
  // const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
      
    <Route path="/" element={<Home/>}></Route>
    <Route path="/create" element={<Create />}></Route>
    <Route path="/edit/:id" element={<Edit />}></Route>  
      

      
    </Routes>
   </BrowserRouter>
  )
   
}

export default App
