import React, {Component} from 'react';
import './App.css';
// import Teacher from "./Teacher/Teacher";
import Person from './Person/Person';
//import BackgroundPhoto from './BackgroundPhoto/BackgroundPhoto';
//import {Button, ButtonToolbar} from 'react-bootstrap'
import './App.css';
import Radium, { StyleRoot } from 'radium';


class App extends Component {
    state = {
        persons:
            [
                {id: '1as3dasde3434', name: 'Max', age: 131},
                {id: '23sasasf43334', name: 'Ferry', age: 51},
                {id: '234sdasdasd34', name: 'Gholam Ali', age: 91}
            ],
        teacher: {title: "Dr."},
        showPersons: false
    };

    // deletepersonHandler = (personIndex) => {
    //     const persons = [...this.state.persons];
    //     persons.splice(personIndex,1);
    //     this.setState({persons : persons});
    //     console.log('sossis bandari were clicked');
    // };

    deletepersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1); // chand ta roo kam mikone = 1
        this.setState({persons: persons});
        console.log('sossis bandari were clicked');
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
    };

    // ---------------------------// ostaad version //-------------------------------//
    togglePersonsHandler = () => {
        const show = this.state.showPersons;
        this.setState({showPersons: !show});
    };

    render() {
        const Style = {
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
            let styles2 = {
            margin: '10px',
            backgroundColor: 'gray',
            display: 'inline-block',
            color: 'red',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }

        };
        let persons = null;

        if (this.state.showPersons) {
            Style.backgroundColor = 'green';
            Style[':hover'] = {
                backgroundColor: 'lightred',
                color: 'black'
            };
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return (
                                <Person
                                    style={styles2}
                                    // changed={this.nameChangedHandler()}
                                    click={() => this.deletepersonHandler(index)}
                                    name={person.name}
                                    age={person.age}
                                    key={person.id}
                                    changed={(event) => this.nameChangedHandler(event, person.id)}
                                    //click={this.onSwitchHandler.bind(this, 'hala mah shodam')}
                                />
                            )
                        })
                    }
                </div>

            );
        }

        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red'); // classes = ['red']
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold'); // classes = ['red', 'bold']
        }


        return (

            <div className={"App"}>
                <div className={"bg"}>
                    <div className="bg">
                        <div className="person">{persons}</div>
                        <h3 className={classes.join(' ')}>My Udemy Exersice </h3>
                        {/*<ButtonToolbar>*/}
                            <button style={Style} active onClick={this.togglePersonsHandler}>
                                {/*btStyle={'primary'}*/}
                                Toggle Persons
                            </button>
                        {/*</ButtonToolbar>*/}
                        <p className={classes.join(' ')}>Fusce ut placerat eros. Aliquam consequat in augue sed
                            convallis. Donec orci urna, tincidunt
                            vel dui at, elementum semper dolor. Donec tincidunt risus sed magna dictum, quis luctus
                            metus volutpat. Donec accumsan et nunc vulputate accumsan. Vestibulum tempor, erat in mattis
                            fringilla, elit urna ornare nunc, vel pretium elit sem quis orci. Vivamus condimentum dictum
                            tempor. Nam at est ante. Sed lobortis et lorem in sagittis. In suscipit in est et
                            vehicula.</p>
                    </div>
                </div>
            </div>
        );
    };
}

export default Radium(App);
