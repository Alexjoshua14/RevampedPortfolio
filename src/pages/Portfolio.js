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
    const [imageData, setImageData] = useState(null);
    const [detailShown, showDetails] = useState(false);
    useEffect(() => {
        console.log("Running use Effect");
        getData().then(
            data => {
                setBackendData(data);
                console.log(data);
            }
        );
        // getImage('UploadToAWS/Untitled6.jpeg').then(data => {
        //     console.log("retrieved image?..");
        //     setImageData(URL.createObjectURL(data));
        // })

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
                {/* {(typeof backendData.artworks === 'undefined') ? 
                        <h1>loading</h1> : 
                        backendData.artworks.map((art, i) => 
                            { <p>{art}</p>})} */}
                <div id="portfolioGrid"> 
                    {fillGrid()} 
                </div>
                <div id="detailsContainer" onClick={() => showDetails(false)}>
                        <ArtworkDetail key={details.id} title={details.title} src={details.src} date={details.date} med={details.med} desc={details.desc} handleClick={() => showDetails}/>    
                </div>
                <Social />
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
    
        const imgs = [
            {id: 1,
            title: ( backendData === null) ? "loading" : backendData[0].title,
             src: imageData ? imageData : "",
             date: "September 1, 2022",
             med: ( backendData === null) ? "loading" : backendData[0].medium,
             Description: "Description of the art"},
            {id: 2,
            title:( backendData === null) ? "loading" : backendData[1].title,
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 3,
            title: ( backendData === null) ? "loading" : backendData[0].title,
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 4,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 5,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 6,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 7,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 8,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 9,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 10,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 11,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 12,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 13,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 14,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 15,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
            {id: 16,
            title: "Abstract Faces",
             src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
             date: "September 1, 2022",
             med: "Pencil Sketch",
             description: "Description of the art"},
        ];
    
        // const cards = [];
    
        // imgs.forEach( art => cards.push(
        //         <Card onClick={() => cardSelect()} title={art.title} src={art.src} alt="alt text" date={art.date} med={art.med} desc={art.desc} />
        //     ));
    
        return (
            <> 
                {(backendData == null) ? /*imgs.map(({ id, title, src, date, med, description }) => (
                    <Card key={id} title={title} src={src} alt="alt text" date={date} med={med} desc={description} handleClick={() => cardSelect} />
                ))*/ <h1>Loading</h1> : backendData.map(({ id, title, thumbnail, date, med, description }) => (
                    <Card key={id} title={title} src={thumbnail} alt="alt text" date={date} med={med} desc={description} handleClick={() => cardSelect} />
                ))}
            </>
        )
    }
};



