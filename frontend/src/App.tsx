import './App.css'
import Home  from "./pages/Home";
import Prices from './pages/Preise';
import Contact from './pages/Kontakt';
import {Routes, Route} from "react-router-dom";
import AboutLoofable from './pages/AboutLoofable';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Layout from './Layout';

function App() {

  return (
    <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/preise" element={<Prices/>}/>
        <Route path="/kontakt" element={<Contact/>}/>
        <Route path="/about-loofable" element={<AboutLoofable/>}/>
        <Route path="/impressum" element={<Impressum/>}/>
        <Route path="/datenschutz" element={<Datenschutz/>}/>
      </Route>
    </Routes>
  )
}

export default App
