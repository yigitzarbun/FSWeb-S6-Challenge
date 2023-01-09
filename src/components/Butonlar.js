import React from "react";
import styled from "styled-components";

export default function Butonlar(props) {
  const { page, setPage, handlePage } = props;

  const StyledButtonDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.7rem;
    row-gap: 0.7rem;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    padding: 1rem 0;
  `;
  const StyledButton = styled.button`
    color: blue;
    font-family: "Montserrat", sans-serif;
    border-radius: 15px;
    border: 0.1rem solid #00ffab;
    font-size: 0.9rem;
    padding: 0.5rem;
    row-gap: 1.5rem;
    min-width: 10%;

    &:hover {
      background-color: white;
      color: #191a19;
      border: 0.1rem solid white;
      font-weight: bold;
    }

    ${(props) =>
      props.page == props.value
        ? `background-color: #00ffab; color: #191A19; font-weight: bold;`
        : `background: rgba(0, 0, 0, 0.8); color: white; font-weight: light;`}
  `;

  return (
    <StyledButtonDiv>
      <StyledButton onClick={() => handlePage("1")} page={page} value={"1"}>
        Page 1
      </StyledButton>
      <StyledButton onClick={() => handlePage("2")} page={page} value={"2"}>
        Page 2
      </StyledButton>
      <StyledButton onClick={() => handlePage("3")} page={page} value={"3"}>
        Page 3
      </StyledButton>
      <StyledButton onClick={() => handlePage("4")} page={page} value={"4"}>
        Page 4
      </StyledButton>
      <StyledButton onClick={() => handlePage("5")} page={page} value={"5"}>
        Page 5
      </StyledButton>
      <StyledButton onClick={() => handlePage("6")} page={page} value={"6"}>
        Page 6
      </StyledButton>
      <StyledButton onClick={() => handlePage("7")} page={page} value={"7"}>
        Page 7
      </StyledButton>
      <StyledButton onClick={() => handlePage("8")} page={page} value={"8"}>
        Page 8
      </StyledButton>
      <StyledButton onClick={() => handlePage("9")} page={page} value={"9"}>
        Page 9
      </StyledButton>
    </StyledButtonDiv>
  );
}
