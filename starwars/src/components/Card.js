import React from 'react';
import style from 'styled-components';

const StyledCard = style.div`
    background: white;
    box-shadow: 0 1rem 1.5rem rgba(000,000,000,0.8);
    width:20.5rem;
    margin: 0 1rem 1.5rem 1rem;
    div h3{
        text-transform:uppercase;
        font-size:1.8rem;
        padding: 1rem 0;
    }
    div{
        width:100%;
        background:lightblue;
        
    }
    p{
        padding: 1rem 0;
    }

`;

export default function Card(props){


    return(

        <StyledCard>
            <div>
            <h3>{props.name}</h3>
            </div>
            <p>Birth Year: {props.birth_year}</p>
            <p>Hair Color: {props.hair_color}</p>

        </StyledCard>


    )


}
