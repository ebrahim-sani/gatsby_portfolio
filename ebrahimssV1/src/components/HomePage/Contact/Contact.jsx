import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { Button } from "../../common/Button/index";
import { Wrapper, InnerWrapper, Heading, Btn } from "./styles";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contactHead
          contactSub
          contact
        }
      }
    }
  `);
  return (
    <Wrapper data-aos="zoom-in-up" id="contact">
      <InnerWrapper>
        <Heading>{data.site.siteMetadata.contactHead}!</Heading>
        <span>{data.site.siteMetadata.contactSub}</span>
        <p>{data.site.siteMetadata.contact}</p>
        <Btn>
          <Button
            style={{
              marginBottom: "20px",
            }}
            onClick={() =>
              (window.location =
                "https://www.upwork.com/freelancers/~01b9648643e1a0de6f")
            }
          >
            Contact Me via Upwork
          </Button>
          <Button
            style={{
              marginBottom: "20px",
            }}
            onClick={() => (window.location = "www.gmail.com/ibraheemsani47")}
          >
            Contact Me via Email
          </Button>
        </Btn>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Contact;
