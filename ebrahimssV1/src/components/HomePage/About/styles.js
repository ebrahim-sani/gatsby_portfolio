import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 100px;
  padding-top: 300px;

  @media (max-width: 768px), (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 50px;
    padding-top: 50px;
  }
  @media (max-width: 680px) {
    margin: 0 30px;
  }
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.6;

  h1 {
    font-size: 2rem;
    color: #daccda;
    margin-bottom: 8px;
  }

  p {
    font-size: 1.1rem;
    line-height: 24px;
    font-weight: 500;
    color: #daccda;
    margin-bottom: 8px;
  }
  span {
    color: #8e208e;
  }
`;

export const Image = styled.div`
  display: flex;
  flex: 0.4;
  img {
    width: 60%;
    border-radius: 30px;
    margin-left: 120px;

    @media (max-width: 680px) {
      margin-left: 70px;
      margin-top: 40px;
    }
  }
`;
