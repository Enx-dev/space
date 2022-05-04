import React from "react";
import Explore from "./Explore";
import { Mainwrapper, Subtitle, Text, Title, Wrapper } from "./index";
export { Wrapper, Title, Text, Subtitle } from "./index";
const Header = () => {
  return (
    <>
      <Mainwrapper>
        <Wrapper>
          <Subtitle>SO, YOU WANT TO TRAVEL TO</Subtitle>
          <Title> SPACE</Title>
          <Text>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Text>
        </Wrapper>
        <Explore />
      </Mainwrapper>
    </>
  );
};

export default Header;
//
//
//   Explore
