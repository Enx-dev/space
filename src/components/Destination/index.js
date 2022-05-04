import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Wrapper1, Wrapper2, Wrapper3, Title, Mainwrapper } from "./style";
import data from "../../data/data.json";
const Moon = () => {
  const destination = data.destinations;
  const { moon } = useParams();
  let i =
    moon === "moon" ? 0 : moon === "titan" ? 3 : moon === "europa" ? 2 : 1;
  return (
    <>
      {" "}
      <Title>
        <span>01</span> PICK YOUR DESTINATION
      </Title>
      <Mainwrapper>
        <Wrapper1>
          <img src={"." + destination[i].images.png} alt='moon' />
        </Wrapper1>
        <Wrapper2>
          <ul>
            <li>
              <NavLink
                to={"/destination/moon"}
                className={({ isActive }) => (isActive ? "active" : undefined)}>
                Moon
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/destination/mars"}
                className={({ isActive }) => (isActive ? "active" : undefined)}>
                Mars
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/destination/europa"}
                className={({ isActive }) => (isActive ? "active" : undefined)}>
                Europa
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/destination/titan"}
                className={({ isActive }) => (isActive ? "active" : undefined)}>
                Titan
              </NavLink>
            </li>
          </ul>
          <h1>{destination[i].name}</h1>
          <p className='text'>{destination[i].description}</p>
          <hr />
          <Wrapper3>
            <div className='dis'>
              <h1>AVG. DISTANCE</h1>
              <p>{destination[i].distance}</p>
            </div>
            <div className='time'>
              <h1>EST. TRAVEL TIME</h1>
              <p>{destination[i].travel}</p>
            </div>
          </Wrapper3>
        </Wrapper2>
      </Mainwrapper>
    </>
  );
};

export default Moon;
