import styled from "styled-components/macro";

export const Title = styled.h1`
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
  margin-block: 2rem;
  margin-inline-start: 3rem;
  text-align: center;
  color: white;
  font-family: Barlow Condensed;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 2.700000047683716px;
  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Mainwrapper = styled.main`
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    flex-direction: column-reverse;
  }
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    align-self: center;
    width: 90%;
  }
`;

export const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    overflow: hidden;
  }
  img {
    object-fit: contain;
    width: 200px;
    max-width: 400px;
    margin: 0;
    @media (min-width: 768px) {
      width: 50vw;
    }
  }
  hr {
    margin-top: -2.5px;
    width: 70%;
    border: none;
    border-top-color: currentcolor;
    border-top-style: none;
    border-top-width: medium;
    border-top: 1px solid gray;
    @media (min-width: 768px) {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;
    overflow: visible;
    img {
    }
  }
`;
export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: column-reverse;
    div {
      height: 100%;
      h1 {
        font-size: 40px;
        line-height: 46px;
      }
      h2 {
        font-size: 24px;
        line-height: 28px;
      }
      p {
        font-size: 16px;
        line-height: 28px;
        padding-inline: 10rem;
      }
    }
  }
  .div-1 {
    display: flex;
    justify-content: center;
    margin: 1rem;
    ul {
      display: flex;
      a {
        border-radius: 50%;
        height: 10px;
        background: #979797;
        width: 10px;
        margin-inline: 0.3rem;
      }
      li {
        list-style: none;
      }
      .active {
        background: white;
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }
  }
  h2 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;

    color: #ffffff;

    mix-blend-mode: normal;
    opacity: 0.5;
  }
  h1 {
    margin-block: 1rem;
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */

    text-align: center;
    text-transform: uppercase;

    color: white;
  }
  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    padding-inline: 3rem;
    font-size: 15px;
    line-height: 25px;
    /* or 167% */

    text-align: center;

    color: #d0d6f9;
  }
  @media (min-width: 1024px) {
    div {
      width: 100%;
      h1 {
        font-size: 56px;
        line-height: 64px;
        letter-spacing: 0px;
      }
      h2 {
        font-size: 32px;
        line-height: 37px;
        letter-spacing: 0px;
      }
      p {
        padding-inline: 0;
        font-size: 18px;
        line-height: 32px;
        word-spacing: 1px;
        padding-right: 7rem;
      }
    }
    .div-1 {
      display: flex;
      justify-content: flex-start;
      margin: 0;
      margin-block-start: 3rem;
      ul {
        display: flex;
        width: 50%;
        a {
          border-radius: 50%;
          height: 12px;
          background: #979797;
          width: 12px;
          margin-inline-end: 1rem;
        }
        li {
          list-style: none;
        }
        .active {
          background: white;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
      }
    }
    h2,
    h1,
    p {
      text-align: left;
    }
  }
`;
