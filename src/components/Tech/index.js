import React from "react";
import data from "../../data/data.json";
import useImage from "../../hooks/useImage";
import { useParams, NavLink } from "react-router-dom";
import { Wrapper1, Wrapper2, Mainwrapper, Title } from "./style";

const TechComp = () => {
  const { winWidth } = useImage();
  const { name } = useParams();
  const tech = data.technology;
  let i = name === "Launch" ? 0 : name === "Spaceport" ? 1 : 2;
  return (
    <>
      <Title>
        <span>03</span>
        SPACE LAUNCH 101
      </Title>
      <Mainwrapper>
        <Wrapper1>
          <img
            src={
              winWidth >= 1024
                ? "." + tech[i].images.portrait
                : "." + tech[i].images.landscape
            }
            alt=''
          />
        </Wrapper1>
        <Wrapper2>
          <div className='link'>
            <ul>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to={"/tech/Launch"}>
                <li>1</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to={"/tech/Spaceport"}>
                <li>2</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to={"/tech/Space"}>
                <li>3</li>
              </NavLink>
            </ul>
          </div>
          <div className='text'>
            <h2>THE TEMINOLOGY</h2>
            <h1>{tech[i].name}</h1>
            <p>{tech[i].description}</p>
          </div>
        </Wrapper2>
      </Mainwrapper>
    </>
  );
};

export default TechComp;
