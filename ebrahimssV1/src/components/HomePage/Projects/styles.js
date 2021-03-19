import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 50px 100px;
  padding-top: 260px;

  @media (max-width: 768px), (max-width: 960px) {
    margin: 0 50px;
  }

  @media (max-width: 680px) {
    margin: 0 30px;
  }
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 14px;

  &::last-child {
    margin-right: unset;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Content = styled.div`
  background-color: #332f2f;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
  border-radius: 4px;

  img {
    width: 90%;
    padding: 10px 16px;
  }
  p {
    color: #daccda;
    padding: 0 16px;
  }
`;

export const Heading = styled.h1`
  color: #daccda;
  font-size: 2.3rem;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const Icon = styled.div`
  display: flex;
  margin-right: 10px;
`;
