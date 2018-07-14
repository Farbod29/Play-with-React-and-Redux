import React from "react";
import "./Cockpit.css"

const cockpit = (props) => {


    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('red'); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        classes.push('bold'); // classes = ['red', 'bold']
    }
    return (
        <div className={"classes.Cockpit"}>
                <h3 className={classes.join(' ')}> My Udemy Exersice </h3>
                <button className={"button button1"} onClick={props.clicked}>
                    Toggle Persons
                </button>
                <p className={classes.join(' ')}>Fusce ut placerat eros. Aliquam consequat in augue sed
                    convallis. Donec orci urna, tincidunt
                </p>
        </div>
    );
};

export default cockpit;


// import React from 'react';
// import classes from './Cockpit.css';
// import {Button, ButtonToolbar} from 'react-bootstrap';
//
// const cockpit = ( props ) => {
//
//     let classes = [];
//     if (props.persons.length <= 2) {
//         classes.push('red'); // classes = ['red']
//     }
//     if (props.persons.length <= 1) {
//         classes.push('bold'); // classes = ['red', 'bold']
//     }
//
//     return (
//         <div className={"classes.Cockpit"}>
//             <h1>{ props.appTitle }</h1>
//             <p className={classes.join( ' ' )}>This is really working!</p>
//             <button
//                 className={"btnClass"}
//                 onClick={props.clicked}>Toggle Persons</button>
//         </div>
//     );
// };
//
// export default cockpit;
