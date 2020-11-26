import React, { useState } from "react";
import "./App.css";
import FooterContainer from "./containers/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Principal from "./components/pages/Principal";
import Nosotros from "./components/pages/Nosotros";
import Servicios from "./components/pages/Servicios";
import Socios from "./components/pages/Socios";
import Contacto from "./components/pages/Contacto";
import Registro from "./components/pages/Registro";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Principal} />

        <Route path="/nosotros" component={Nosotros} />

        <Route path="/servicios" component={Servicios} />

        <Route path="/socios" component={Socios} />

        <Route path="/contacto" component={Contacto} />

        <Route path="/registro" component={Registro} />
      </Switch>
      <FooterContainer />
    </Router>
  );
}

export default App;
