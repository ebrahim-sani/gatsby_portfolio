import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  h3 {
    color: ${({ theme }) => (theme === "light" ? "#000" : "#DACCDA")};
    font-weight: 600;
    font-size: 25px;
    margin-top: 20px;

    @media (max-width: 960) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }
  }
`;
