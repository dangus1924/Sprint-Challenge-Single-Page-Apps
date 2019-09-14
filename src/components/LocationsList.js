import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard  from './LocationCard'

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const getLocations = () => {
            axios
        .get('https://rickandmortyapi.com/api/location/')
        
        .then(res =>{
          console.log('The res data: ', res.data);
          
          setLocations(res.data.results);
        })
        
        .catch(err =>{
          console.log('Can not get locations data');
        })
      }
      getLocations();
    }, [])

    
    return <section>
   
    {locations.map((location, key) => (
      // console.log(location);
      <LocationCard  key={key} 
                    name={location.name} 
                    type={location.type} 
                    dimension={location.dimension} 
                    residents={location.residents.length}/>
  ))}
    </section>

}
    
    