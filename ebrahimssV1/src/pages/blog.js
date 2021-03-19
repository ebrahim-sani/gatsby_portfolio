import * as React from "react";
import styled from "styled-components";
import undraw_coding from "../assets/illustrations/undraw_coding.svg";
import Layout from "../components/common/Layout/index";
import Navbar from "../components/theme/Header/Navbar/Navbar";

//styles
const Wrapper = styled.div`
  margin: 0px 100px;

  @media (max-width: 768px), (max-width: 960px) {
    margin: 0px 50px;
  }

  @media (max-width: 680px) {
    margin: 8px 30px;
  }
`;

const InnerWrpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  img {
    width: 40%;

    @media (max-width: 768px), (max-width: 680px) {
      width: 60%;
    }
  }
`;

const Message = styled.div`
  h3 {
    font-size: 2.6rem;
    font-weight: 600;
    color: #c816ce;

    span {
      color: #daccda;
    }
  }
`;
// styles end

export default () => (
  <Layout>
    <Wrapper>
      <Navbar />
      <InnerWrpper>
        <img src={undraw_coding} alt="img" />
        <Message>
          <h3>
            Coming Soon<span>!</span>
          </h3>
        </Message>
      </InnerWrpper>
    </Wrapper>
  </Layout>
);
