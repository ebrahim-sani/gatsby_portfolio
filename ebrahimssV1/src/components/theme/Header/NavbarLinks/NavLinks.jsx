import { Link } from "gatsby";
import React, { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProviders";
import { Wrapper } from "./styles";

const NavbarLinks = ({ Desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={Desktop} theme={theme}>
      <Link to="/#about">
        <span>About</span>
      </Link>
      <Link to="/#project">
        <span>Projects</span>
      </Link>
      <Link to="/#testimonial">
        <span>Testiomonials</span>
      </Link>
      <Link to="/blog">
        <span>Blog</span>
      </Link>
    </Wrapper>
  );
};

export default NavbarLinks;
