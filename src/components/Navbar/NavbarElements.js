import styled from "styled-components";
import logo from "../../images/capres.jpg";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #bcbcbc;
  height: 10vh;
  /* margin-top: -10vh; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  font-size: 1.125rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 60rem) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  z-index: 1;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  display: flex;
  padding: 0.625rem;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  margin-left: 1rem;
`;

export const LogoCapres = styled.img.attrs({
  src: `${logo}`,
})`
  width: 5rem;
  padding-left: 0.25rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 48rem) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translated(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #4f6eae;
    padding-right: 0.25rem;
    position: relative;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
  text-align: center;
  margin-right: -1.375rem;

  @media screen and (max-width: 48rem) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 4.5rem;
`;

export const NavLink = styled(Link)`
  color: #4f6eae;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 0.1875rem solid #4f6eae;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 3.125rem;
  background: #4f6eae;
  white-space: nowrap;
  padding: 0.625rem 1.375rem;
  color: #f2f2f2;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: f2f2f2;
    color: #4f6eae;
  }
`;
