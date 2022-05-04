import React from "react";
import useImage from "../hooks/useImage";
import { Container } from "../components";
import bgmobileimg from "../assets/crew/background-crew-mobile.jpg";
import bgtabletimg from "../assets/crew/background-crew-tablet.jpg";
import bgdesktopimg from "../assets/crew/background-crew-desktop.jpg";
import Crew from "../components/Crew";
const Crews = () => {
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
      <Crew />
    </Container>
  );
};

export default Crews;
