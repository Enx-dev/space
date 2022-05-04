import React from "react";
import data from "../../data/data.json";
import { NavLink, useParams } from "react-router-dom";
import { Wrapper1, Wrapper2, Title, Mainwrapper } from "./styles";
const Crew = () => {
  const { name } = useParams();
  let i =
    name === "Douglas" ? 0 : name === "Mark" ? 1 : name === "Victor" ? 2 : 3;
  const crew = data.crew;
  return (
    <>
      {" "}
      <Title>
        <span>02</span> MEET THE CREW
      </Title>
      <Mainwrapper>
        <Wrapper1>
          <img src={"." + crew[i].images.png} alt='img' />
          <hr />
        </Wrapper1>
        <Wrapper2>
          <div className='div-1'>
            <ul>
              <NavLink to={"/crew/Douglas"}>
                <li
                  className={({ isActive }) =>
                    isActive ? "active" : "unactive"
                  }>
                  {" "}
                </li>
              </NavLink>
              <NavLink to={"/crew/Mark"}>
                <li
                  className={({ isActive }) =>
                    isActive ? "active" : "unactive"
                  }></li>
              </NavLink>
              <NavLink to={"/crew/Victor"}>
                <li
                  className={({ isActive }) =>
                    isActive ? "active" : "unactive"
                  }>
                  {" "}
                </li>
              </NavLink>
              <NavLink to={"/crew/Anousheh"}>
                <li
                  className={({ isActive }) =>
                    isActive ? "active" : "unactive"
                  }></li>
              </NavLink>
            </ul>
          </div>
          <div className='div-2'>
            <h2>{crew[i].role}</h2>
            <h1>{crew[i].name}</h1>
            <p>{crew[i].bio}</p>
          </div>
        </Wrapper2>
      </Mainwrapper>
    </>
  );
};

export default Crew;
