import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import About from "./pages/About"
import Erro from "./pages/Erro"
import Favoritos from "./pages/Favoritos"
import Home from "./pages/Home"


function RoutesApp() {
    return(

       <BrowserRouter>
         <Header/>
         <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/favoritos" element={<Favoritos/>}/>
               <Route path="/about/:id" element={<About/>}/>


               <Route path="*" element={<Erro/>}/>
         </Routes>
       
       
       </BrowserRouter>

    )
}

export default RoutesApp