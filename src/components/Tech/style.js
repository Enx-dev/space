import styled from "styled-components/macro";

export const Title = styled.h1`
  color: white;
  span {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin-block: 2rem;
    margin-right: 1rem;
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
    text-align: left;
    padding-inline-start: 3rem;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    span {
      font-size: 18px;
      font-weight: 400;
      line-height: 21px;
    }
  }
`;
export const Mainwrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    height: 500px;
    flex-direction: row-reverse;
  }
`;
export const Wrapper1 = styled.div`
  img {
    object-fit: contain;
    width: 103%;
  }
  @media (min-width: 1024px) {
    height: 527px;
    width: 715px;
    img {
      object-fit: cover;
      height: 100%;
    }
  }
`;
export const Wrapper2 = styled.div`
  .link {
    display: flex;
    margin-block-end: 2rem;
    width: 100%;
    justify-content: center;
    ul {
      display: flex;
      .active {
        background: white;
        color: black;
      }
      a {
        text-decoration: none;
        color: black;
        width: 50px;
        margin-inline: 0.5rem;
        height: 50px;
        border: 1px solid white;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        li {
          font-size: 20px;
          list-style: none;
        }
      }
    }
  }
  @media (min-width: 768px) {
    padding-inline: 8rem;
    padding-block: 3rem;
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
    width: 100%;
    flex-direction: row;
    display: flex;
    padding-inline: 0;
    align-self: center;
    .link {
      ul {
        flex-direction: column;
        a {
          margin-block-end: 1.5rem;
          width: 80px;
          height: 80px;
          li {
            font-family: Bellefair;
            font-size: 32px;
            font-weight: 400;
            line-height: 37px;
            letter-spacing: 2px;
            text-align: center;
          }
        }
      }
    }
    .text {
      h2 {
        text-align: revert;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.700000047683716px;
      }
      p {
        text-align: revert;
        padding-inline: 0;
        padding-inline-end: 15rem;
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0px;
      }
      h1 {
        text-align: revert;
        font-size: 56px;
        font-weight: 400;
        line-height: 64px;
        letter-spacing: 0px;
      }
    }
  }
`;
