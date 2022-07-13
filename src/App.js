import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import Anasayfa from './components/Anasayfa';
import Iletisim from './components/Iletisim';
import Hakkimizda from './components/Hakkimizda';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Route,Routes} from 'react-router-dom'
import { Nav,NavItem,NavLink,NavbarText,Navbar,NavbarBrand,Collapse,NavbarToggler } from "reactstrap";


function App() {
  return (
    <div className='App'>

<Navbar color="light" expand="md" light>
    <NavbarBrand>
    <Link to="/">Anasayfa</Link> 
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink>
          <Link to="/Hakkimizda">Hakkimizda</Link>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink>
          <Link to="/Iletisim">Iletisim</Link> 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
          <Link to="/LoginForm">LoginForm</Link> 
          </NavLink>
        </NavItem>
        
       
      </Nav>
      <NavbarText>
      <NavLink href="https://github.com/ferhatyyaman">
            GitHub
          </NavLink>
      </NavbarText>
    </Collapse>
  </Navbar>


  <Routes>
         <Route path="/Anasayfa"  element={<Anasayfa/>}></Route>
        <Route path="/Iletisim" element={<Iletisim/>}></Route>
        <Route path="/Hakkimizda" element={<Hakkimizda/>}></Route>
        <Route path="/LoginForm" element={ <LoginForm/>}></Route>
</Routes>


     





    </div>
  );
}

export default App;
