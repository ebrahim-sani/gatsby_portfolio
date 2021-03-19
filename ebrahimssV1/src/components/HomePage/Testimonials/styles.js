import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 100px;
  padding-top: 250px;

  @media (max-width: 768px), (max-width: 960px) {
    margin: 0 50px;
  }
  @media (max-width: 680px) {
    margin: 0 30px;
  }
`;

export const Heading = styled.h2`
  font-size: 2.3rem;
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 14px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 14px 0 14px;
  border: 1px solid gray;
  border-radius: 7px;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
  background-color: #332f2f;
  p {
    font-size: 1.1.rem;
  }
  span {
    font-size: 0.78rem;
  }
  h3 {
    font-size: 1.2rem;
    padding-top: 5px;
  }
`;
