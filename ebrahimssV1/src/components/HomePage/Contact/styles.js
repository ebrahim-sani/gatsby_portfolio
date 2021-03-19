import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 200px 100px;

  @media (max-width: 768px), (max-width: 960px) {
    margin: 100px 50px;
    padding: 80px 0;
  }

  @media (max-width: 680px) {
    margin: 50px 30px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    font-size: 1rem;
    line-height: 24px;
    font-weight: 500;
    padding: 20px 18rem;
    margin: 0;

    @media (max-width: 768px), (max-width: 960px) {
      padding: 10px 18px;
    }
    @media (min-width: 960px) {
      padding: 10px 14rem;
    }
  }
  span {
    font-size: 0.8rem;
    color: #8e208e;
  }
`;

export const Heading = styled.h1`
  font-size: 2.3rem;
  font-weight: 600;
  margin: 0;
`;

export const Btn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 680px), (max-width: 768px) {
    margin: 20px 0;
  }
`;
