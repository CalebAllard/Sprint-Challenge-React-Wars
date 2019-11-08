import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';


const CardsGroup = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    align-content:space-around;
`;

export default function CardGroup(){
    


    
    const [people, setPeople] = useState([]);
    let tempArray = [];
     useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/')
        .then(response => {
            // console.log(response);
             return setPeople(response.data.results);
            // console.log(people);
        // for (let key in people.results){
        //     if (people.results.hasOwnProperty(key)){
        //         tempArray.push(people.results[key]);
        //     } 
        // }
        // return tempArray; 
            
        
         })
         .catch(error =>{console.log(`error: ${error}`)});
     },[]);
        // console.log(tempArray);
        // let tempArray = {}
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

