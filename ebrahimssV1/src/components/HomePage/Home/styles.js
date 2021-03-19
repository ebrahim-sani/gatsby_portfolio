import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  margin: 0 100px;

  @media (max-width: 768px), (max-width: 960px) {
    margin: 0 50px;
  }
  @media (max-width: 680px) {
    margin: 0 30px;
  }
`;
export const HeroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2.3rem;
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#DACCDA")};

    span {
      color: #8e208e;
    }

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }
  p {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#DACCDA")};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme === "light" ? "unset" : "difference"};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
    filter: drop-shadow(2px 4px 8px #ededed);
  }
`;
