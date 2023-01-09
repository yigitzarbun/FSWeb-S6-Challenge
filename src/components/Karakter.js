import React from "react";
import styled from "styled-components";
import Arama from "./Arama";
import img from "../images/no_result-removebg-preview.png";
export default function Karakter(props) {
  const { data, visibility, expansion, searchTerm } = props;

  const StyledAllCharactersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 2rem; auto;
    justify-content: center;
    column-gap: 2rem;
    row-gap: 2rem;
    align-items: start;
  `;
  const StyledCharDiv = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: 25%;
    border: 0.3rem solid #00ffab;
    border-radius: 20px;
    color: white;
    min-height: 50px;
    position: relative;
    padding-bottom: 60px;
    transition: height 2s;
  `;

  const StyledSeeMoreButton = styled.button`
    background-color: white;
    font-size: 1.1rem;
    border: none;
    position: absolute;
    bottom: 20px;
    left: 45%;
    &:hover {
      background-color: #00ffab;
      color: black;
      border: none;
    }
  `;

  const StyledNoResult = styled.p`
    color: white;
    font-size: 1.2rem;
  `;

  const StyledExpandedData = styled.div`
    ${(props) =>
      props.expansion !== props.characterName
        ? `display: none`
        : `display: block`}
  `;

  return (
    <StyledAllCharactersContainer>
      {data
        .filter((character) => {
          if (searchTerm === "") {
            return character;
          } else if (
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return character;
          }
        })
        .map((character) => (
          <StyledCharDiv key={character.name}>
            <h3>{character.name}</h3>
            <StyledExpandedData
              expansion={expansion}
              characterName={character.name}
            >
              <p>Height: {character.height}</p>
              <p>Mass: {character.mass}</p>
              <p>Hair Color: {character.hair_color}</p>
              <p>Skin Color: {character.skin_color}</p>
              <p>Year of Birth: {character.birth_year}</p>
              <p>Gender: {character.gender}</p>
            </StyledExpandedData>
            <StyledSeeMoreButton onClick={() => visibility(character.name)}>
              {expansion !== character.name ? "+" : "-"}
            </StyledSeeMoreButton>
          </StyledCharDiv>
        ))}
      {data.length === 0 ||
      data.find((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) === undefined ? (
        <StyledNoResult>No results found</StyledNoResult>
      ) : null}
    </StyledAllCharactersContainer>
  );
}
