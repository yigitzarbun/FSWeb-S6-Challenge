import React, { useState } from "react";
import styled from "styled-components";
export default function (props) {
  const { setSearchTerm, searchTerm } = props;

  const StyledSearchBar = styled.input`
    width: 30%;
    height: 5vh;
    margin: 0 auto 2vh auto;
    font-family: font-family: 'Montserrat', sans-serif;
    color: white;
    background-color: black;
    border: 0.1rem solid #00ffab;
    &:hover {
        background: rgba(0, 0, 0, 0.7);
        color: white;
    }
  `;

  return (
    <StyledSearchBar
      type="text"
      placeholder="Search by Name"
      onChange={(event) => setSearchTerm(event.target.value)}
      value={searchTerm}
      autoFocus
    ></StyledSearchBar>
  );
}
