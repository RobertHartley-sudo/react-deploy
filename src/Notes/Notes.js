import React from 'react';

const notes = (props) => {
    return (
    <div>
    <img src={props.name} alt={props.name} />    
    </div>
    )
};
//        <p>test {props.name}</p>        


export default notes;