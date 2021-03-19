import React, { useState } from "react";
import Hamburger from "./Hamburger/Hamburger";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { Wrapper, Overlay } from "./styles";

const Header = () => {
  const [sidebar, toggle] = useState(false);
  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};

export default Header;
