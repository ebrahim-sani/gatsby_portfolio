import { useStaticQuery, graphql } from "gatsby";
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../../providers/ThemeProviders";
import { Wrapper, Bio, Image } from "./styles";
import ebs from "../../../assets/images/ebs.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          aboutTitle
          about
        }
      }
    }
  `);
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper data-aos="fade-up" id="about">
      <Bio theme={theme}>
        <h1>
          {data.site.siteMetadata.aboutTitle}
          <span>.</span>
        </h1>
        <p>{data.site.siteMetadata.about}</p>
      </Bio>
      <Image>
        <img src={ebs} alt="my_pic" />
      </Image>
    </Wrapper>
  );
};

export default About;
