import * as React from "react";
import { Link } from "gatsby";
import undraw_found from "../assets/illustrations/undraw_page.svg";
import styled from "styled-components";
import Layout from "../components/common/Layout/index";

// styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Thumbnail = styled.div`
  img {
    width: 100%;
  }
`;

const Message = styled.div`
  h3 {
    font-size: 1.3rem;
  }
  span {
    font-size: 1.2rem;
  }
`;

export default () => (
  <Layout>
    <Wrapper>
      <Thumbnail>
        <img src={undraw_found} alt="img" />
      </Thumbnail>
      <Message>
        <h3>
          Opps.. We couldn't found page you're looking for!<span>!</span>
        </h3>
        <Link to="/">
          <span>Go back</span>
        </Link>
      </Message>
    </Wrapper>
  </Layout>
);
