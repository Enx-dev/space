import React from "react";
import useImage from "../hooks/useImage";
import { Container, Des } from "../components";
import bgmobileimg from "../assets/destination/background-destination-mobile.jpg";
import bgtabletimg from "../assets/destination/background-destination-tablet.jpg";
import bgdesktopimg from "../assets/destination/background-destination-desktop.jpg";
const Destination = () => {
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
      <Des />
    </Container>
  );
};

export default Destination;
