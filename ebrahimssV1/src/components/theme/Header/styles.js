import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: transparent;
`;
export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;
  background: rgba(0, 0, 0, 0.7);

  ${({ sidebar }) => sidebar && `display: block; z-index: 4;`}
`;
