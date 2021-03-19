import React from "react";
import { Layout } from "../components/common/Layout/index";
import { HeroSection } from "../components/HomePage/Home/index";
import About from "../components/HomePage/About/index";
import Contact from "../components/HomePage/Contact/Contact";
import Footer from "../components/theme/Footer/Footer";
import Project from "../components/HomePage/Projects/Project";
import Testimonial from "../components/HomePage/Testimonials/Testimonial";

export default () => (
  <Layout>
    <HeroSection />
    <About />
    <Project />
    <Testimonial />
    <Contact />
    <Footer />
  </Layout>
);
