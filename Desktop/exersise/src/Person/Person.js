import React from "react";
// import {IndexLink, Link} from "react-router";
import './person.css';

const Person = (props) =>
{
    return (
        <div className={"Person"}>
            {/*<h2 onClick={props.click}> I'm a {props.name}, and I am {props.age} years old</h2>*/}
            <h2 onClick={props.click}>  I'm a {props.name} and {props.age} years old</h2>
            {/*<p>{props.children}</p>*/}
            <input type='text' onChange={props.changed}/>
        </div>
    )
};

export default Person;


