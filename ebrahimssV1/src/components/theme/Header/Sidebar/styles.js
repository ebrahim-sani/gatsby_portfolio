import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  right: -275px;
  top: 0;
  width: 0;
  opacity: 0;
  height: 100%;
  z-index: 4;
  overflow: auto;
  background-color: ${({ theme }) =>
    theme === "light" ? "#C816CE" : "#212121"};
  transition: all 350ms cubic-bezier(0.6, 0.5, 0.28, 0.92);

  ${({ active }) =>
    active &&
    `   
        opacity: 1;
        width: 20%;
        right: 0px;


        @media (max-width: 960px) {
            width: 40%;
        }

        @media (max-width: 600px) {
            width: 75%;
        }

    `}
`;
