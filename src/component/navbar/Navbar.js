import Light from "../light/Light";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Contact from "../contact/Contact";
import About from "../about/About";
import "../navbar/Navbar.css";

const Navbar = () => {
  return(
    

<BrowserRouter>
    <div className="navbar">
      <ul>    
          <li id ="logo">
            Navbar
          </li>
          <li>
            <Link to = '/about'>About</Link>
          </li>
          <li>
            <Link to ='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/light'>Light-Mode</Link>
          </li>
      </ul>
    </div>

  
    <Routes>
    <Route exact path="/about"  element={<About />}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/light" element={<Light/>}/>
    </Routes>
</BrowserRouter>
    


)
}

export default Navbar;