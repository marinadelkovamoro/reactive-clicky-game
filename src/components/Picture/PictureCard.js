import React from "react";
import "./style.css";

function PictureCard(props) {
    const imgProps = {
        alt: props.name,
        src: props.image,
        onClick: () => props.handleClick(props.id),
    };
    
    return (
        <div className="card">
            <div className="img-container">
                <img {...imgProps} />
                {/* <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)} /> */}
            </div>
        </div>
    );
}

export default PictureCard;
