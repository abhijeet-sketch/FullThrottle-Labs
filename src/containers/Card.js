import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div onClick={props.cardClicked} className="user-card">
            <h2 className="card-h2">{props.data.real_name}</h2>
            <p className="card-p">{props.data.tz}</p>
        </div>
    );
};

export default Card;