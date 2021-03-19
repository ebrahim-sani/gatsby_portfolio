import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.8rem;
  display: none;
  z-index: 5;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  @media (max-width: 760px) {
    display: block;
  }

  ${({ sidebar }) =>
    sidebar &&
    `
        top: 18%;
        top: 1.4rem;

        @media (max-width: 960px) {
            position: fixed;
            right: 35%;

        }

        @media (max-width: 600px) {
            right: 66%;
        }
      `}
`;

export const Bar = styled.div`
  height: 0.15rem;
  width: 1.6rem;
  margin-bottom: 0.3rem;
  background-color: #fff;
  transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91), opacity 500ms,
    box-shadow 250ms, background-color 500ms;
  background-color: 500ms;

  @media (max-width: 600px) {
    width: 1.6rem;
  }

  ${({ top, sidebar, theme }) =>
    sidebar &&
    top &&
    ` background-color: ${theme === "light" ? "#212121" : "#fff"}; 
        transform: translateY(8px) rotate(-135deg);
      `}

  ${({ mid, sidebar }) => mid && sidebar && ` transform: scale(0);`}

  ${({ bottom, sidebar, theme }) =>
    bottom &&
    sidebar &&
    `background-color: ${
      theme === "light" ? "#212121" : "#fff"
    }; transform: translateY(-6px) rotate(-45deg);`}
`;
