import React from 'react';
import style from 'styled-components';

const StyledCard = style.div`
    background: white;
    box-shadow: 0 1rem 1.5rem rgba(000,000,000,0.8);
    padding: 1rem 1.5rem;
    width:25%;
    margin-bottom:1.5rem;
    h3{
        text-transform:uppercase;
        font-size:1.8rem;
    }

`;

export default function Card(props){


    return(

        <StyledCard>
            <h3>{props.name}</h3>
            <p>Birth Year: {props.birth_year}</p>
            <p>Hair Color: {props.hair_color}</p>

        </StyledCard>


    )


}
