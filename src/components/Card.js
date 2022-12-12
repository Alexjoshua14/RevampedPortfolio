// Alex Joshua (c) 2022

import './Card.css';
import AbstractFace from "../img/AbstractFaces.png";

export default function Card(props) {
    return(
        <div onClick={props.handleClick(props)} className="glassCard cardWrapper">
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <div className="cardImgHolder">
                <img src={props.src} alt={props.alt}/>
            </div>
            
        </div>
    )
}