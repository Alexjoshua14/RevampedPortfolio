// Alex Joshua (c) 2022

import { useEffect, useState } from 'react';
import './Portfolio.css';
import Card from '../components/Card';
import ArtworkDetail from '../components/ArtworkDetail';
import CardDetails from '../components/CardDetails';
import Social from '../socialLinks/social';
import { getData, getImage } from "../utilities/databaseFunctions";

export default function Portfolio() {
    const [backendData, setBackendData] = useState(null);
    const [detailShown, showDetails] = useState(false);
    useEffect(() => {
        console.log("Running use Effect");
        getData().then(
            data => {
                setBackendData(data);
                console.log(data);
            }
        );
    }, []);

    const [details, updateDetails] = useState({
        id: 0,
        title: "sda",
        src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        date: "asdas",
        med: "asdsa",
        desc: "asdsa"
    });

    // const hideDetails = () => {
    //     const grid = document.getElementById("portfolioGrid");
    //     grid.style.gap = "200rem"
    //     const dContainer = document.getElementById("detailsContainer");
    //     dContainer.style.display = "none";
    // }

    return (
        <>
            <div className="portfolioWrapper">
                <div id="portfolioGrid"> 
                    {fillGrid()} 
                </div>
                <div id="detailsContainer" onClick={() => showDetails(false)}>
                        <ArtworkDetail key={details.id} title={details.title} src={details.src} date={details.date} med={details.med} desc={details.desc} handleClick={() => showDetails}/>    
                </div>
            </div> 
        </>
    )


    function fillGrid() {
        const cardSelect = (artInfo) => {
            console.log("Card selected");
            //updateDetails(artInfo);
            // showDetails(true);

            // console.log("A card has been selected!!")
            // console.log("Specifics: " + id);
            // const grid = document.getElementById("portfolioGrid");
            // grid.style.gap = "200rem"
    
            // const dContainer = document.getElementById("detailsContainer");
            // dContainer.style.display = "block";
    
        } 
    
        return (
            <> 
                {(backendData == null) ?
                    <h1>Loading</h1> : 
                    backendData.map(({ id, title, thumbnail, date, med, description }) => (
                        <Card key={id} title={title} src={thumbnail} alt="alt text" date={date} med={med} desc={description} handleClick={() => cardSelect} />
                ))}
            </>
        )
    }
};



