// Alex Joshua (c) 2022

import './Card.css';
import AbstractFace from "../img/AbstractFaces.png";
import { getImage } from "../utilities/databaseFunctions";
import { useState, useEffect } from 'react';

export default function Card(props) {
    const [src, setSrc] = useState("https://images.unsplash.com/photo-1545486332-9e0999c535b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80");
    //Extract just the year and if the date was unset then
    //set it to an empty string
    const date = new Date(props.date);
    let year = date.getFullYear();
    year = (year == 1969) ? "" : year;
    
    useEffect(() => {
        getImage(props.src).then(src => {
            setSrc(src);
        })
    }, []);

    return(
        <div onClick={props.handleClick(props)} className="glassCard cardWrapper">
            <h1>{props.title}</h1>
            <h2>{year}</h2>
            <div className="cardImgHolder">
                <img 
                    src={src} 
                    alt={props.alt} 
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    />
            </div>
            
        </div>
    )
}