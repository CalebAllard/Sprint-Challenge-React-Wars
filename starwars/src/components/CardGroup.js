import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';


const CardsGroup = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-content: space-between;
`;

export default function CardGroup(){
    


    
    const [people, setPeople] = useState([]);
    let tempArray = [];
     useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/')
        .then(response => {
            // console.log(response);
            setPeople(response.data.results);
           
        
         })
         .catch(error =>{console.log(`error: ${error}`)});
     },[]);
        
        for (let key in people){
            if (people.hasOwnProperty(key)){
                tempArray.push(people[key]);
            }
        }
        console.log(tempArray);

    return (
        
        <CardsGroup>
            {
                tempArray.map((item,key) =>
                    <Card key={key} name={item.name} birth_year={item.birth_year} hair_color={item.hair_color}/>                
                )
            }

           
               
            {/* <Card /> */}

        </CardsGroup>
        
    )


}

