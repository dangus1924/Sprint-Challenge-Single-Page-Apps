import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList() { 
  const [characters, setCharacters] = useState([]);

  useEffect(() => {   
    const getCharacters = () => {
      axios
      .get('https://rickandmortyapi.com/api/character/')      
      .then(res =>{
        console.log('The response data: ', res.data.results);        
        setCharacters(res.data.results);
      })     
      .catch(err =>{
        console.log('Can not get characters data');
      })
    }
    getCharacters();
  }, [])

  return <section className='character-list grid-view'>
    
    {characters.map((character, key) => (
          //  console.log(character);
           <CharacterCard key={key} 
                          name={character.name} 
                          status={character.status} 
                          species={character.species} 
                          characterImg={character.image} 
                          location={character.location.name} 
                          origin={character.origin.name}
                          />
    ))}
    
    </section>

}