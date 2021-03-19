import React, { useEffect } from "react";
import netflix from "../../../assets/images/netflix.png";
import { Wrapper, InnerWrapper, Content, Heading, Icons, Icon } from "./styles";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          project1Detail
          project2Detail
          project3Detail
        }
      }
    }
  `);
  return (
    <Wrapper data-aos="fade-up" id="project">
      <Heading>Experimental Works</Heading>
      <InnerWrapper>
        <Content>
          <img src={netflix} alt="img" />
          <p>{data.site.siteMetadata.project1Detail}</p>
          <Icons>
            <Icon>
              <FaGithub
                style={{
                  fontSize: "25px",
                  color: "#8E208E",
                  cursor: "pointer",
                }}
              />
            </Icon>
            <Icon>
              <FaExternalLinkAlt
                style={{
                  fontSize: "25px",
                  color: "#8E208E",
                  cursor: "pointer",
                }}
              />
            </Icon>
          </Icons>
        </Content>
        <Content>
          <img src={netflix} alt="img" />
          <p>{data.site.siteMetadata.project2Detail}</p>
          <Icons>
            <Icon>
              <FaGithub
                style={{
                  fontSize: "25px",
                  color: "#8E208E",
                  cursor: "pointer",
                }}
              />
            </Icon>
            <Icon>
              <FaExternalLinkAlt
                style={{
                  fontSize: "25px",
                  color: "#8E208E",
                  cursor: "pointer",
                }}
              />
            </Icon>
          </Icons>
        </Content>
        <Content>
          <img src={netflix} alt="img" />
          <p>{data.site.siteMetadata.project3Detail}</p>
          <Icons>
            <Icon>
              <FaGithub
                style={{
                  fontSize: "25px",
                  color: "#8E208E",
                  cursor: "pointer",
                }}
              />
            </Icon>
            <Icon>
              <FaExternalLinkAlt
                style={{
                  fontSize: "25px",
                  color: "#8E208E",
                  cursor: "pointer",
                }}
              />
            </Icon>
          </Icons>
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Project;
