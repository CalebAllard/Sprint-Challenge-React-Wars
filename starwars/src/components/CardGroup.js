import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Card from './Card';


export default function CardGroup(){
    
    
    const [people, setPeople] = useState({});
    let tempArray = {};
     useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/')
        .then(response => {
            console.log(response);
            setPeople(response.data.results);
            console.log(people);
        // for (let key in people.results){
        //     if (people.results.hasOwnProperty(key)){
        //         tempArray.push(people.results[key]);
        //     } 
        // }
         
            
        
         })
         .catch(error =>{console.log(`error: ${error}`)});
     },[]);
        // let tempArray = {}
        // for (let key in people){
        //     if (people.hasOwnProperty(key)){
        //         tempArray.push(people[key]);
        //     }
        // }
        // console.log(tempArray);

    return (
        
        <div className='CardGroup'>
            {

            }

           
               
            <Card />

        </div>
        
    )


}

