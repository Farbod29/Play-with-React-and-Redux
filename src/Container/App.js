import React, {Component} from 'react';
import './App.css';
// import Teacher from "./Teacher/Teacher";
import Radium, {StyleRoot} from 'radium';
import Persons from "../commponents/Persosns/Persons";
import Cockpit from "../commponents/Cockpit/Cockpit"

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
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const show = this.state.showPersons;
        this.setState({showPersons: !show});
    };


    render() {
        let Button_Style = {
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
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletepersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );
            Button_Style.backgroundColor = 'red';
            Button_Style[':hover'] = {
                backgroundColor: 'pink',
                color: 'black'
            };
        }
        return (
            <StyleRoot>
                        <Cockpit
                            showPersons={this.state.showPersons}
                            clicked={this.togglePersonsHandler}
                            persons={this.state.persons}
                        />

                        <div>{persons}</div>
            </StyleRoot>
        );
    };
}

export default Radium(App);
