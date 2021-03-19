import { useStaticQuery, graphql } from "gatsby";
import React, { useContext } from "react";
import { Wrapper, HeroWrapper, Details, Thumbnail, Arrow } from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "../../common/Button/index";
import { ThemeContext } from "../../../providers/ThemeProviders";
import undraw_developer from "../../../assets/illustrations/undraw_developer.svg";
import Header from "../../theme/Header";

export const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          homeGreeting
          homeIntro
        }
      }
    }
  `);

  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Header />
      <HeroWrapper>
        <Details theme={theme}>
          <h1>
            {data.site.siteMetadata.homeGreeting}
            <span>!</span>
          </h1>
          <p>{data.site.siteMetadata.homeIntro}</p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <img src={undraw_developer} alt="" />
        </Thumbnail>
      </HeroWrapper>
    </Wrapper>
  );
};
