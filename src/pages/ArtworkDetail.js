import "./ArtworkDetail.css";
import CardDetails from "../components/CardDetails";

export default function ArtworkDetail(props) {
    return(
        <div className="artworkDetailContent">
            <div className="artwork">
                <img 
                    src="https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="alternate text"/>
            </div>
            <div className="artworkDesc">
                <ArtworkDetail 
                    id="3"
                    title="Abstract Faces" 
                    src="https://images.unsplash.com/photo-1670851030047-2cf3dca9afe6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" 
                    date="September 1  2022" 
                    med="Pencil Sketch" 
                    desc="Description of the art"/>
            </div>
        </div>
    )
}