import './App.css'
import Home  from "./pages/Home";
import Prices from './pages/Preise';
import Contact from './pages/Kontakt';
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/preise" element={<Prices/>}/>
      <Route path="/kontakt" element={<Contact/>}/>
      <Route path="/about-loofable" />
      <Route path="/impressum" />
      <Route path="/datenschutz" />
    </Routes>
  )
}

export default App
