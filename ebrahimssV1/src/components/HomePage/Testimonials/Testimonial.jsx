import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect } from "react";
import { Wrapper, InnerWrapper, Content, Heading } from "./styles";
import { FaQuoteLeft } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          testimony1
          testimony2
          testimony3
          person1Title
          person1Name
          person2Title
          person2Name
          person3Title
          person3Name
        }
      }
    }
  `);
  return (
    <Wrapper data-aos="fade-up" id="testimonial">
      <Heading>Testimonials</Heading>
      <InnerWrapper>
        <Content>
          <FaQuoteLeft
            style={{
              marginBottom: "10px",
            }}
          />
          <p>{data.site.siteMetadata.testimony1}</p>
          <span>{data.site.siteMetadata.person1Title}</span>
          <h3>{data.site.siteMetadata.person1Name}</h3>
        </Content>
        <Content>
          <FaQuoteLeft
            style={{
              marginBottom: "10px",
            }}
          />
          <p>{data.site.siteMetadata.testimony2}</p>
          <span>{data.site.siteMetadata.person2Title}</span>
          <h3>{data.site.siteMetadata.person2Name}</h3>
        </Content>
        <Content>
          <FaQuoteLeft
            style={{
              marginBottom: "10px",
            }}
          />
          <p>{data.site.siteMetadata.testimony3}</p>
          <span>{data.site.siteMetadata.person3Title}</span>
          <h3>{data.site.siteMetadata.person3Name}</h3>
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Testimonial;
