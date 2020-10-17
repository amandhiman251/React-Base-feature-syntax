import React from 'react';

const person = ( props ) => {
    return (
        <div className = "Person">
            <p onClick = {props.abc}>I'm a {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type = "text" onChange = {props.changed} defaultValue = {props.name} />
        </div>   
    )
};

export default person;