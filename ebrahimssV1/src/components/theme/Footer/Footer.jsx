import React from "react";
import { SiGatsby } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Wrapper, Content, Social } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <span
          style={{
            marginRight: "6px",
          }}
        >
          &copy; Ebrahim Sani 2021
        </span>
        -
        <span
          style={{
            marginLeft: "6px",
          }}
        >
          Built with
          <SiGatsby
            style={{
              marginLeft: "4px",
              color: "#8e208e",
            }}
          />
        </span>
      </Content>
      <Social>
        <SiUpwork
          style={{
            fontSize: "28px",
            margin: "0 7px",
            color: "#8e208e",
            cursor: "pointer",
          }}
          onClick={() =>
            (window.location =
              "https://www.upwork.com/freelancers/~01b9648643e1a0de6f")
          }
        />
        <FaLinkedinIn
          style={{
            fontSize: "28px",
            margin: "0 7px",
            color: "#8e208e",
            cursor: "pointer",
          }}
          onClick={() =>
            (window.location = "https://www.linkedin.com/in/ebrahim-sani")
          }
        />
        <FaTwitter
          style={{
            fontSize: "28px",
            margin: "0 7px",
            color: "#8e208e",
            cursor: "pointer",
          }}
          onClick={() =>
            (window.location = "https://www.twitter.com/ebrahim__sani")
          }
        />
        <FaGithub
          style={{
            fontSize: "28px",
            margin: "0 7px",
            color: "#8e208e",
            cursor: "pointer",
          }}
          onClick={() =>
            (window.location = "https://www.github.com/ebrahim-sani")
          }
        />
      </Social>
    </Wrapper>
  );
};

export default Footer;
