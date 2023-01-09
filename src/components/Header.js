import React from "react";
import styled from "styled-components";
import logo from "../images/star-wars-logo.png";
export default function Header() {
  const StyledHeaderDiv = styled.div``;
  const StyledHeader = styled.h1`
    color: white;
    font-family: font-family: 'Montserrat', sans-serif;
    font-style: italic;
  `;
  const StyledHeaderAnchor = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const StyledLogo = styled.img`
    width: 20%;
  `;

  return (
    <StyledHeaderDiv>
      <StyledHeaderAnchor href="index.html">
        <StyledLogo src={logo}></StyledLogo>
        <StyledHeader>Characters</StyledHeader>
      </StyledHeaderAnchor>
    </StyledHeaderDiv>
  );
}
