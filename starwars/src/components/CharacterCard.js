import React from "react";
import styled from "styled-components";

const CardBox = styled.div`
  color: black;
  background: white;
  border:1px solid black;

  width: 200px;
  margin: 20px;

`


const CharacterCard = function (props) {

  return (
    <CardBox>
      <h3>{props.name}</h3>
      <h4>Height: {props.height}cm</h4>
    </CardBox>
  )
}

export default CharacterCard;