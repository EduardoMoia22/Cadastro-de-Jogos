import "./style.css"

export default function Card(props){
    return(
        <div className="card">
            <h2>{props.name}</h2>
            <h2>{props.style}</h2>
        </div>        
    )
}