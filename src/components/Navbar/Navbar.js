import styled from "styled-components/macro";

export const Nav = styled.nav`
  padding-inline: 3rem;
  padding-block: 0.5rem;
  display: flex;
  z-index: 30;
  position: absolute;
  right: 0;
  left: 0;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  .menu {
      @media (min-width: 768px) {
        display: none;
      }
    }
    @media (min-width: 768px) {
      padding-inline: 0;
      padding-inline-start: 3rem;
    }
    @media (min-width: 1024px) {
      margin-top:1rem;
    }
    .line{
      width: 90%;
    margin-left: 2rem;
    /* background: #97979724; */
    border: none;
    border-top: 1px solid #97979754;
    display:none;
    @media (min-width: 1024px){
      display: block;
    }
}
    }
  .links {
    width: 450px;
    height: 96px;
    background: #97979724;
    display:none;
    @media (min-width: 768px) {
      display:block;
      span{
        display:none;
      }
    }
    @media (min-width: 1024px) {
      width: 100%;
    margin-left: -2rem;
    span{
      display:inline-block;
      font-weight:400;
    }
    
}
    }
    
    ul {
      display: flex;
      align-items:center;
      height:100%;
      width:100%;
      justify-content:space-evenly;
      padding-inline:0.5rem;
      li {
        font-family: "Barlow Condensed", sans-serif;
        list-style: none;
        font-size: 14px;
        letter-spacing: 2.7px;
        font-weight: 100;
       
        .active{
           &::after{
          content: "";
          position: relative;
          display: block;
          width: inherit;
          height: 5px;
          top: 36px;
          background: white;
        }
        }
       
        a {
          text-decoration: none;
          color: white;
        }
    }
  }
  
  
`;
export const Dropdown = styled.div`
  backdrop-filter: blur(25px);
  z-index: 50;
  background: #979797;
  position: absolute;
  flex-direction: column;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  justify-content: center;
  background-color: #80808030;
  padding: 1rem;
  .close {
    object-fit: contain;
    width: 30px;
    height: 30px;
    position: relative;
    left: 207px;
    bottom: -15px;
  }
  ul {
    width: 100%;
    height: 40%;
    padding-inline-start: 2rem;
  }
  li {
    font-family: "Barlow Condensed", sans-serif;
    list-style: none;
    font-size: 16px;
    margin-block: 2rem;
    letter-spacing: 2.7px;
    font-weight: 100;
    span {
      font-weight: 400;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Logo = styled.img``;
