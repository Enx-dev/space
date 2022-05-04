import React from "react";
import useImage from "../hooks/useImage";
import { Header } from "../components";
import Conatiner from "../components/Container";
import bgmobileimg from "../assets/home/background-home-mobile.jpg";
import bgtabletimg from "../assets/home/background-home-tablet.jpg";
import bgdesktopimg from "../assets/home/background-home-desktop.jpg";
const Home = () => {
  const { winWidth } = useImage();
  return (
    <>
      <Conatiner
        src={
          winWidth >= 1024
            ? bgdesktopimg
            : winWidth < 1024 && winWidth >= 768
            ? bgtabletimg
            : bgmobileimg
        }>
        <Header />
      </Conatiner>
    </>
  );
};

export default Home;
