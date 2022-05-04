import { createGlobalStyle } from "styled-components";
import BarlowLight from "./assets/font/BarlowCondensed-ExtraLight.ttf";
import "animate.css";
export const Globalstyle = createGlobalStyle`
@font-face{
    font-family:'Barlow Condensed'
    src:url(${BarlowLight}) format('ttf');
}
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
body{
    min-height:100vh;
}
`;
