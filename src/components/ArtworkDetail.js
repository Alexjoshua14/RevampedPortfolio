import "./ArtworkDetail.css";
import CardDetails from "../components/CardDetails";

export default function ArtworkDetail(props) {
    return(
        <div className="artworkCardWrapper">
            <div className="artwork">
                <img 
                    src={props.src}
                    alt={props.alt}
                />
            </div>
            <div className="artworkDesc">
                <CardDetails 
                    id={props.id}
                    title={props.title}
                    src={props.src}
                    date={props.date} 
                    med={props.med}
                    desc={props.desc}
                />
            </div>
        </div>
    )
}