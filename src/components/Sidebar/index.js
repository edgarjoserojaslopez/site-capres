import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" exact="true">
            Principal
          </SidebarLink>
          <SidebarLink to="/nosotros">Nosotros</SidebarLink>
          <SidebarLink to="/servicios">Servicios</SidebarLink>
          <SidebarLink to="/socios">Socios</SidebarLink>
          <SidebarLink to="/contacto">Contacto</SidebarLink>
          <SidebarLink to="/registro">Registro</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login">Log In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
