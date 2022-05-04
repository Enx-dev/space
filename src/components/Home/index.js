import styled from "styled-components/macro";
export const Mainwrapper = styled.div`
  @media (min-width: 1024px) {
    flex-direction: row;
    display: flex;
  }
`;
export const Wrapper = styled.div`
  padding-top: 4rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 1024px) {
    align-items: flex-start;
    margin-block-start: 2rem;
    margin-inline-start: 5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 50%;
    text-align: left;
  }
`;
export const Title = styled.h1`
  font-family: "Bellefair", serif;
  font-size: 80px;
  line-height: 100px;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 150px;
    line-height: 150px;
  }
  @media (min-width: 1024px) {
    font-size: 120px;
    line-height: 120px;
    margin-block: 1rem;
  }
`;
export const Subtitle = styled.h3`
  color: #d0d6f9;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  letter-spacing: 2.7px;
  line-height: auto;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.38px;
  }
`;
export const Text = styled.p`
  color: #d0d6f9;
  font-family: "Barlow", sans-serif;
  font-size: 15px;
  font-weight: 400;
  padding-inline: 3rem;
  line-height: 25px;
  letter-spacing: 0px;
  @media (min-width: 768px) {
    padding-inline: 11rem;
    font-size: 16px;
    line-height: 28px;
  }
  @media (min-width: 1024px) {
    padding-inline: 0;
  }
`;
export const Circle = styled.div`
  width: 150px;
  height: 150px;
  color: black;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  &:hover {
    box-shadow: 0px 0px 0px 40px #979797 !important;
  }
  @media (min-width: 768px) {
    width: 242px;
    height: 242px;
  }
  @media (min-width: 1024px) {
    align-self: center;
    width: 200px;
    height: 200px;
    justify-self: center;
  }
  P {
    font-family: Bellefair;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 1.25px;
    text-align: center;
  }
`;
