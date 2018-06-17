import React from "react";
import {IndexLink, Link} from "react-router";


const Input = (props) => {
    return (
        <div>
            <input type='text' onChange={props.changed}/>
            <p>sage zard baradare shoghale</p>
        </div>
    );
};

export default Input;

