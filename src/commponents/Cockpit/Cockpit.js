import React from "react";
import "./Cockpit.css"
import {Button, ButtonToolbar} from 'react-bootstrap';
const cockpit = (props) => {


    const Button_Style = {
        position: 'auto',
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    };

    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('red'); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        classes.push('bold'); // classes = ['red', 'bold']
    }
    return (
        <div className={"classes.Cockpit"}>
            <div className={"bg"}>
                <h3 className={classes.join(' ')}> My Udemy Exersice </h3>
                <button style={Button_Style} onClick={props.clicked}>
                    Toggle Persons
                </button>
                <p className={classes.join(' ')}>Fusce ut placerat eros. Aliquam consequat in augue sed
                    convallis. Donec orci urna, tincidunt
                </p>
            </div>
        </div>
    );
};

export default cockpit;

