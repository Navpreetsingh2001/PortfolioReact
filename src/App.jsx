
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
import Mywork from './Component/Mywork'
import Contact from './Component/Contact'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  
  

  return (
    <>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/mywork" element={<Mywork/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
