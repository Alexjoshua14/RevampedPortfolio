// Alex Joshua (c) 2022

import './Card.css';
import { getImage } from "../utilities/databaseFunctions";
import { useState, useEffect, useMemo } from 'react';

export default function Card(props) {
    const [src, setSrc] = useState("https://images.unsplash.com/photo-1679471491129-9e2f3ea6ec3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    
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
        <div className="col-auto g-5 card-wrapper">
            <div className="card shadow-sm" onClick={props.handleClick(props)}>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <h6 className="card-subtitle">{year}</h6>
                </div>
                <img 
                    className="card-img-bottom img-fluid"
                    src={src} 
                    alt={props.alt} 
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    />

            </div>
        </div>
    )
}