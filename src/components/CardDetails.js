// Alex Joshua (c) 2022

import './Card.css';
import AbstractFace from "../img/AbstractFaces.png";

export default function Card(props) {
    return(
        <div className="glassCard cardDetailsWrapper">
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <div className="cardDescription">
                <p>{props.desc}</p>
            </div>
            
        </div>
    )
}