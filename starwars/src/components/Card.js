import React from 'react';
import style from 'styled-components';

const card = styled.div`


`;

export default function Card(props){


    return(

        <div className="card">
            <h3>{props.name}</h3>
            <p>Birth Year:{props.birth_year}</p>
            <p>Hair Color:{props.hair_color}</p>

        </div>


    )


}
