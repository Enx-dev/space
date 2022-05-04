import React from "react";
import useImage from "../hooks/useImage";
import bgmobileimg from "../assets/technology/background-technology-mobile.jpg";
import bgtabletimg from "../assets/technology/background-technology-tablet.jpg";
import bgdesktopimg from "../assets/technology/background-technology-desktop.jpg";
import { Container } from "../components";
import TechComp from "../components/Tech";
const Tech = () => {
  const { winWidth } = useImage();
  return (
    <Container
      src={
        winWidth >= 1024
          ? bgdesktopimg
          : winWidth < 1024 && winWidth >= 768
          ? bgtabletimg
          : bgmobileimg
      }>
      <TechComp />
    </Container>
  );
};

export default Tech;
