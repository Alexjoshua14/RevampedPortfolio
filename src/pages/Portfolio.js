// Alex Joshua (c) 2022

import './Portfolio.css';
import Card from '../components/Card';
import AbstractFace from '../img/AbstractFaces.png';
import Social from '../socialLinks/social';

export default function Portfolio() {

    return (
        <>
        <div className="portfolioWrapper">
            <div id="portfolioGrid">  
                {fillGrid()}
            </div>
            <Social />
        </div> 
        </>
    )
};

function fillGrid() {
    

    const cardSelect = (id) => {
        console.log("A card has been selected!!")
        console.log("Specifics: " + id);

    } 

    var imgs = [
        {id: 1,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 2,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 3,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 4,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 5,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 6,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 7,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 8,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 9,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 10,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 11,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 12,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 13,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 14,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 15,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
        {id: 16,
        title: "Abstract Faces",
         src: "https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
         date: "September 1, 2022",
         med: "Pencil Sketch",
         desc: "Description of the art"},
    ];

    // const cards = [];

    // imgs.forEach( art => cards.push(
    //         <Card onClick={() => cardSelect()} title={art.title} src={art.src} alt="alt text" date={art.date} med={art.med} desc={art.desc} />
    //     ));

    return (
        <> 
            {imgs.map(({ id, title, src, date, med, desc }) => (
                <Card key={id} title={title} src={src} alt="alt text" date={date} med={med} desc={desc} handleClick={() => cardSelect} />
            ))}
        </>
    )
}

