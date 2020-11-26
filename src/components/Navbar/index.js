import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  LogoCapres,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <LogoCapres />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/" exact="true">
                Principal
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/nosotros">Nosotros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/servicios">Servicios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/socios">Socios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contacto">Contacto</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/registro">Registro</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Log In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
