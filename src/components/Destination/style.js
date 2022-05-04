import styled from "styled-components/macro";

export const Title = styled.h1`
  color: white;
  span {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;

    color: #ffffff;

    mix-blend-mode: normal;
    opacity: 0.25;
  }
  text-align: center;
  margin-block: 3rem;
  font-family: Barlow Condensed;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 2.700000047683716px;

  @media (min-width: 768px) {
    margin-left: 3rem;
    font-size: 20px;
    line-height: 24px;
    align-self: flex-start;
    /* identical to box height */

    letter-spacing: 3.375px;
    span {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
    }
  }
  @media (min-width: 1024px) {
    margin-inline-start: 4rem;
  }
`;
export const Mainwrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;
export const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;
  img {
    object-fit: contain;
    width: 250px;
  }
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 300px;
    }
  }
  @media (min-width: 1024px) {
    width: 100%;
    img {
      width: 350px;
      margin-inline-start: 4rem;
    }
  }
`;
export const Wrapper2 = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
  h1 {
    margin-block: 1rem;
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
  .text{
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    padding-inline:3rem;
    line-height: 25px;
    text-align: center;
    color: #d0d6f9;
  }
  hr {
      margin-top 1rem;
    width: 100%;
    height: 30px;
    border: none;
    border-top-color: currentcolor;
    border-top-style: none;
    border-top-width: medium;
    border-top: 1px solid #97979754;
  }
  ul {
    margin-block: 1rem;
    display: flex;
    width: 100%;
    padding-inline: 3rem;
    justify-content: space-between;
    text-transform: uppercase;
    font-family: Barlow Condensed;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 2.362499952316284px;
    text-align: left;
    color: rgba(208, 214, 249, 1);

    li {
      list-style: none;
      a {
        text-decoration: none;
        color: inherit;
      }
      .active {
        &::after {
          content: "";
          margin-top: 5px;
          width: 100%;
          display: block;
          background: white;
          opacity: 1;
          height: 5px;
        }
      }
    }
  }
  @media (min-width: 768px){
    h1{
      font-size: 80px;
line-height: 92px;
    }
    .text{
      font-size: 16px;
line-height: 28px;
text-align:left;
padding-inline:7rem;
    }
    hr{
      margin-block:2rem;
      width:70%;

    }
    ul {
      width: 50%;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 3.362499952316284px;
    }
  }
  @media (min-width: 1024px) {
    margin-left:2rem;
    width:100%;
    padding-inline:3rem;
    align-items: flex-start;
    h1{
      font-size: 80px;
line-height: 92px;
    }
    .text{
      font-size: 16px;
line-height: 28px;
padding-inline:0;
padding-right:5rem;
    }
    hr{
      margin-block:2rem;
      width:70%;

    }
    ul {
      width: 70%;
      font-size: 16px;
      line-height: 20px;
      padding-inline:0;
      letter-spacing: 3.362499952316284px;
    }
  }
  }
`;
export const Wrapper3 = styled.div`
  div {
    margin-bottom: 2rem;
    h1 {
      margin-block: 0.5rem;
      font-family: "Barlow Condensed";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      text-align: center;
      letter-spacing: 2.3625px;
      text-transform: uppercase;

      color: #d0d6f9;
    }
    p {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      line-height: 32px;
      /* identical to box height */

      text-align: center;
      text-transform: uppercase;

      color: #ffffff;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    div {
      h1 {
        font-size: 17px;
        line-height: 20px;
        /* identical to box height */

        text-align: center;
        letter-spacing: 3.3625px;
      }
      p {
        font-size: 30px;
        line-height: 34px;
      }
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    div {
      margin-right:2rem;
      h1 {
        font-size: 17px;
        line-height: 20px;
        /* identical to box height */

        text-align: left;
        letter-spacing: 3.3625px;
      }
      p {
        font-size: 30px;
        line-height: 34px;
        text-align:left;
      }
    }
  }
  }
`;
