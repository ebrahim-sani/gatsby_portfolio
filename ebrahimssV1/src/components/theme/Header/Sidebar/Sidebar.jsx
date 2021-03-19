import React, { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProviders";
import NavbarLinks from "../NavbarLinks/NavLinks";
import { Wrapper } from "./styles";

const Sidebar = ({ sidebar, toggle }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper active={sidebar} onClick={toggle} theme={theme}>
      <NavbarLinks />
    </Wrapper>
  );
};

export default Sidebar;
