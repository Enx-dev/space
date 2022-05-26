import styled from "styled-components";

export const Background = styled.main`
  background: url(${({ src }) => src && `${src}`});
  position: absolute;
  padding-block-start: 3rem;
  min-height: 100vh;
  right: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    padding-block-start: 5rem;
  }
  @media (min-width: 1024px) {
    padding-block-start: 10rem;
    overflow: hidden;
  }
`;
