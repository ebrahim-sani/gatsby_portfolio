import { Link } from "gatsby";
import React, { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProviders";
import NavbarLinks from "../NavbarLinks/NavLinks";
import { Wrapper, Brand } from "./styles";

const Navbar = ({ Container }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container}>
      <Link to="/">
        <Brand theme={theme}>
          <h3>ebrahimss</h3>
        </Brand>
      </Link>
      <NavbarLinks Desktop />
    </Wrapper>
  );
};
export default Navbar;
