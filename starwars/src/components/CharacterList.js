import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

/*** Schema 
name, height, mass, hair_color, skin_color, eye_color, birth_year, gender,
homeworld (url), films[url], species[url], vehicles[url], starships[url],
created, edited, url (self-ref)
***/

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  color: white;
`;

const CharacterList = function (props) {
const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log("People", response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("There is a disturbance in the force...", error);
      });
    }, []); // useEffect

    console.log (characters);

    return (
        <Container>
          {characters.map(person =>
            (
              <CharacterCard 
                key={person.key}
                name={person.name}
                height={person.height}
              />
            )
          )}
        </Container>
      );
}

export default CharacterList;