import React from "react";
import { Background } from "./Conatiner";
const Conatiner = ({ children, src }) => {
  return <Background src={src}>{children}</Background>;
};

export default Conatiner;
