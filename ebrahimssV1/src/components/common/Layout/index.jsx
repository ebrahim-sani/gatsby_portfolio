import React, { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProviders";
import { Global } from "./styles";

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      {children}
    </>
  );
};
